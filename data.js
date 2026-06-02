/**
 * ════════════════════════════════════════════════════════════
 *  JARRARD FAMILY TRIP 2027 — HOUSE DATA
 *  Edit this file to update house info, photos, and links.
 *  No need to touch index.html or results.html for content changes.
 *
 *  PHOTOS
 *  ──────
 *  Use a repo-relative path: "images/fl1-a.jpg"
 *    → drop the file in the /images/ folder in the repo
 *  Or a direct web URL: "https://example.com/photo.jpg"
 *    → paste any direct image link (VRBO listing photos work great)
 *  Set to null to show a placeholder.
 *
 *  LINKS
 *  ─────
 *  linkA / linkB → full URL to the listing for each house in the pair.
 *  Set to null to hide the button.
 *
 *  TOTAL_INVITED
 *  ─────────────
 *  Approximate headcount — used for the participation % on the results page.
 * ════════════════════════════════════════════════════════════
 */

const TOTAL_INVITED = 27;

// ── Florida ───────────────────────────────────────────────────────────────────

const FL_HOUSES = [
  {
    id: 'fl1',
    dest: 'fl',
    name: 'Seven Seas + Sea-La-Vie',
    beds:  '7 + 5',
    baths: '6 + 4',
    beach: 'Yes (main) / Walk (2nd)',
    pool:  'Yes / Yes',
    cost:  '~$27,000',
    extras: [
      'Wrap-around balcony',
      'Splash pad for the kids',
      'Double fridge & outdoor grill',
      'Pool table in garage',
      'Multiple covered sitting areas',
    ],
    caveat: 'Secondary house is not beachfront — short walk to beach access. Both houses have pools.',
    // Photos
    photoA:  'https://img.trackhs.com/1200x/https://track-pm.s3.amazonaws.com/capeandcoast/image/06132b40-4c32-4fac-a483-bc225170b6d7',   // e.g. "images/fl1-a.jpg" or a full URL
    photoB:  'images/sealavie.png',
    labelA: 'Seven Seas',
    labelB: 'Sea-La-Vie',
    // Listing links
    linkA:  'https://www.capeandcoast.com/rentals/seven-seas',
    linkB:  'https://www.collinsvacationrentals.com/rentals/sea-la-vie',    // add Sea-La-Vie link when available
  },
  {
    id: 'fl2',
    dest: 'fl',
    name: 'Casa Bella Luca + AB Sea',
    beds:  '7 + 5',
    baths: '6 + 5',
    beach: 'Yes (main) / No (2nd)',
    pool:  'Yes / Yes',
    cost:  '~$23,000',
    extras: [
      'Top deck with panoramic gulf views',
      'Hot tub at AB Sea',
      'We know this house — the "Cartel house"',
      'Double fridge, large outdoor dining',
      'Walking distance between houses',
    ],
    caveat: 'AB Sea is pool-only, no beach access. Walking distance to main house. Most budget-friendly FL option.',
    photoA:  null,
    photoB:  null,
    labelA: 'Casa Bella Luca',
    labelB: 'AB Sea',
    linkA:  'https://www.collinsvacationrentals.com/rentals/casa-bellaluca',
    linkB:  'https://www.collinsvacationrentals.com/rentals/a-b-sea',
  },
  {
    id: 'fl3',
    dest: 'fl',
    name: 'Royal Seas + Amethyst',
    beds:  '6 + 5',
    baths: '5 + 4',
    beach: 'Yes (main) / No (2nd)',
    pool:  'Yes / Yes',
    cost:  '~$25,500',
    extras: [
      'Theater room',
      'Game room with arcade',
      'Private boardwalk to beach',
      'Large covered lanai & fire pit',
      'Hot tub on main house deck',
    ],
    caveat: 'Amethyst is the smaller house — tighter quarters for larger family units. Royal Seas has the best amenities of any FL option.',
    photoA:  null,
    photoB:  null,
    labelA: 'Royal Seas',
    labelB: 'Amethyst',
    linkA:  null,
    linkB:  null,
  },
];

// ── Michigan ──────────────────────────────────────────────────────────────────

const MI_HOUSES = [
  {
    id: 'mi1',
    dest: 'mi',
    name: 'OG Luxury + Feirin de Magnificent',
    beds:  '7 + 5',
    baths: '6 + 4',
    beach: 'Walk (~5 min) / No',
    pool:  'Yes / Yes',
    cost:  '~$27,000',
    extras: [
      'Both houses have private pools',
      'High-end finishes throughout',
      'Fire pit, kayaks, lake gear included',
      'Closest Michigan option to the water',
      'Great restaurant & brewery scene nearby',
    ],
    caveat: '⚠️ Neither house is directly on the beach. ~5 min walk to public lake access. No private beachfront at either property.',
    photoA:  null,
    photoB:  null,
    labelA: 'OG Luxury',
    labelB: 'Feirin de Magnificent',
    linkA:  null,
    linkB:  null,
  },
  {
    id: 'mi2',
    dest: 'mi',
    name: 'Lamb + Victorian Painted Lady',
    beds:  '7 + 5',
    baths: '5 + 4',
    beach: 'No (~0.5 mi walk)',
    pool:  'Yes / No',
    cost:  '~$21,000',
    extras: [
      'Most affordable Michigan option',
      'Victorian house has incredible character',
      'Large wraparound porch',
      'Only 4 houses apart',
      'Good access to South Haven dining',
    ],
    caveat: '⚠️ No beach access from either house — 0.5 mile walk to the lake. Only the main house has a pool. Victorian Painted Lady has no pool.',
    photoA:  null,
    photoB:  null,
    labelA: 'Lamb',
    labelB: 'Victorian Painted Lady',
    linkA:  null,
    linkB:  null,
  },
  {
    id: 'mi3',
    dest: 'mi',
    name: '6-Bed Home + Bridgewater',
    beds:  '6 + 6',
    baths: '5 + 5',
    beach: 'No (short drive)',
    pool:  'Yes / Club only',
    cost:  '~$27,000',
    extras: [
      'Most total rooms of any Michigan option',
      'Tennis court on property',
      'Club pool access at Bridgewater',
      'Putt-putt & playground on site',
      'Great for splitting into sub-families',
    ],
    caveat: '⚠️ Beach requires a short drive — not walkable. Bridgewater has club pool access only, not private. Best Michigan option for space.',
    photoA:  null,
    photoB:  null,
    labelA: '6-Bed Home',
    labelB: 'Bridgewater',
    linkA:  null,
    linkB:  null,
  },
];
