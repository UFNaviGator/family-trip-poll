# Jarrard Family Trip Poll 2027

Interactive voting tool for the biennial family trip destination decision.
Built as a single self-contained HTML file — no build step, no dependencies beyond Google Fonts.

## Live site

Deploy via GitHub Pages: **Settings → Pages → Deploy from branch → main → / (root)**

Your URL will be: `https://[your-username].github.io/family-trip-poll`

---

## Updating house data

All house content lives at the top of `index.html` in two clearly labeled arrays:
`FL_HOUSES` and `MI_HOUSES`. Each entry has:

```js
{
  id:     'fl1',              // internal ID, must match PHOTOS key
  dest:   'fl',              // 'fl' or 'mi'
  name:   'Seven Seas + Sea-La-Vie',
  beds:   '7 + 5',
  baths:  '6 + 4',
  beach:  'Yes (main) / Walk (2nd)',
  pool:   'Yes / Yes',
  cost:   '~$27,000',
  extras: ['Wrap-around balcony', ...],
  caveat: 'Short note about tradeoffs for this option.'
}
```

---

## Adding photos

Photos are configured in the `PHOTOS` object near the top of `index.html`:

```js
const PHOTOS = {
  fl1: { a: null, b: null, labelA: 'Seven Seas', labelB: 'Sea-La-Vie' },
  ...
};
```

**Option A — repo images:**
1. Drop your photos into the `/images/` folder (jpg or webp recommended, ~500KB or less)
2. Set the path: `a: "images/fl1-a.jpg"`

**Option B — web URL:**
Just paste any direct image URL (VRBO listing photos, Google Drive share links, etc.):
`a: "https://example.com/photo.jpg"`

Both options work simultaneously — mix and match per house.
If a photo fails to load, a placeholder is shown automatically.

---

## Connecting Google Sheets

1. Open a new Google Sheet
2. Go to **Extensions → Apps Script**
3. Paste the contents of `Code.gs`, replacing the default code
4. Set `SHEET_ID` to your sheet's ID (from the URL)
5. Optionally change `SALT` to any secret string
6. **Deploy → New deployment → Web app**
   - Execute as: Me
   - Who has access: Anyone
7. Copy the Web App URL
8. In `index.html`, replace `YOUR_APPS_SCRIPT_URL_HERE` with that URL

### Sheet structure

| Sheet | Contents |
|---|---|
| **Responses** | All votes. Email stored as a 20-char hash — anonymous. |
| **Respondents** | Email ↔ hash mapping. Restrict access to this tab. |

Submitting again with the same email **updates** the existing response rather than creating a duplicate.

---

## Re-deploying after changes

If you update `Code.gs` in Apps Script:
- Deploy → Manage deployments → pencil icon → Version: New version → Deploy

If you update house data or photos in `index.html`:
- Just commit and push — GitHub Pages picks it up automatically.

---

## Project structure

```
/
├── index.html        # The entire poll (edit house data + photos here)
├── Code.gs           # Google Apps Script backend (paste into Apps Script editor)
├── README.md         # This file
└── images/           # Drop house photos here (or use web URLs instead)
```
