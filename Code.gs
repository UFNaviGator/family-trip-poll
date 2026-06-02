/**
 * Jarrard Family Trip Poll — Google Apps Script Backend
 *
 * SETUP INSTRUCTIONS:
 * 1. Open a new Google Sheet and name it "Jarrard Trip Poll 2027"
 * 2. Copy the Sheet ID from the URL (the long string between /d/ and /edit)
 * 3. Go to Extensions → Apps Script
 * 4. Paste this entire file, replacing the default code
 * 5. Set SHEET_ID below to your Sheet ID
 * 6. Set SALT to any secret string you want (used to hash emails)
 * 7. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 8. Authorize when prompted, then copy the Web App URL
 * 9. Paste that URL into index.html where it says YOUR_APPS_SCRIPT_URL_HERE
 *
 * SHEETS CREATED AUTOMATICALLY:
 * - "Responses"   — all votes, email stored as a short hash (anonymous)
 * - "Respondents" — email ↔ hash mapping so you know who has/hasn't voted
 *
 * To re-deploy after changes: Deploy → Manage deployments → edit → new version
 */

const SHEET_ID = 'YOUR_SHEET_ID_HERE';
const SALT     = 'jarrard2027trip';  // change to anything you like

// ── Helpers ──────────────────────────────────────────────────────────────────

function hashEmail(email) {
  const raw = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    SALT + email.toLowerCase().trim()
  );
  return raw
    .map(b => ('0' + (b & 0xFF).toString(16)).slice(-2))
    .join('')
    .substring(0, 20);
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#1a3a4a')
      .setFontColor('#ffffff');
  }
  return sheet;
}

function corsHeaders() {
  return ContentService
    .createTextOutput()
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Main handler ─────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (!data.email || !data.destination_pref) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'Missing required fields.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const ss   = SpreadsheetApp.openById(SHEET_ID);
    const hash = hashEmail(data.email);

    // ── Responses sheet (no raw emails) ──────────────────────────────────────
    const respHeaders = [
      'Voter ID (hashed)',
      'FL #1', 'FL #2', 'FL #3',
      'MI #1', 'MI #2', 'MI #3',
      'Destination Preference', 'Preference Score (1=FL, 5=MI)',
      'Comment',
      'Submitted At'
    ];
    const respSheet = getOrCreateSheet(ss, 'Responses', respHeaders);

    const newRow = [
      hash,
      data.fl_rank_1  || '', data.fl_rank_2  || '', data.fl_rank_3  || '',
      data.mi_rank_1  || '', data.mi_rank_2  || '', data.mi_rank_3  || '',
      data.destination_pref  || '',
      data.destination_score || '',
      data.comment    || '',
      data.timestamp  || new Date().toISOString()
    ];

    // Check for existing response by this voter and update if found
    const respData  = respSheet.getDataRange().getValues();
    const existingRow = respData.findIndex((r, i) => i > 0 && r[0] === hash);

    let status;
    if (existingRow > 0) {
      respSheet.getRange(existingRow + 1, 1, 1, newRow.length).setValues([newRow]);
      status = 'updated';
    } else {
      respSheet.appendRow(newRow);
      status = 'ok';
    }

    // ── Respondents sheet (email ↔ hash, access-restricted tab) ──────────────
    const rHeaders = ['Email', 'Voter ID (hashed)', 'First Submitted', 'Last Updated'];
    const rSheet   = getOrCreateSheet(ss, 'Respondents', rHeaders);
    const rData    = rSheet.getDataRange().getValues();
    const rExist   = rData.findIndex((r, i) => i > 0 && r[1] === hash);
    const now      = new Date().toISOString();

    if (rExist > 0) {
      rSheet.getRange(rExist + 1, 4, 1, 1).setValue(now);
    } else {
      rSheet.appendRow([data.email.toLowerCase().trim(), hash, now, now]);
    }

    // ── Auto-resize columns for readability ──────────────────────────────────
    respSheet.autoResizeColumns(1, respHeaders.length);

    return ContentService
      .createTextOutput(JSON.stringify({ status }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── GET handler — health check or results data ────────────────────────────────
function doGet(e) {
  const action = e && e.parameter && e.parameter.action;

  if (action === 'results') {
    return getResults();
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Jarrard Trip Poll API is live.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getResults() {
  try {
    const ss        = SpreadsheetApp.openById(SHEET_ID);
    const respSheet = ss.getSheetByName('Responses');
    const rSheet    = ss.getSheetByName('Respondents');

    if (!respSheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'empty', responses: [], respondentCount: 0 }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Raw rows (skip header)
    const rows = respSheet.getDataRange().getValues().slice(1);

    const responses = rows.map(r => ({
      fl_rank_1:          r[1]  || '',
      fl_rank_2:          r[2]  || '',
      fl_rank_3:          r[3]  || '',
      mi_rank_1:          r[4]  || '',
      mi_rank_2:          r[5]  || '',
      mi_rank_3:          r[6]  || '',
      destination_pref:   r[7]  || '',
      destination_score:  Number(r[8]) || 0,
      comment:            r[9]  || '',
      timestamp:          r[10] || '',
    }));

    // Respondent count (total invited vs responded)
    const respondentCount = rSheet ? Math.max(0, rSheet.getLastRow() - 1) : 0;

    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'ok',
        responses,
        respondentCount,
        generatedAt: new Date().toISOString(),
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
