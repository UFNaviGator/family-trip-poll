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
    photoA:  'https://photos.barefoot.com/v3ccln0929/images/properties/52600/%232.jpg?v=93103',
    photoB:  'https://photos.barefoot.com/v3ccln0929/images/properties/46130/1+-+A-B-Sea-Exterior.jpg?v=77087',
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
    photoA:  'https://photos.barefoot.com/v3ccln0929/images/properties/49108/1+-+2332+Schooner+Landing+Drone-3.jpg?v=85993',
    photoB:  'https://photos.barefoot.com/v3ccln0929/images/properties/7303/1+-+Exterior-Amethyst-_KLH8964.JPG?v=72447',
    labelA: 'Royal Seas',
    labelB: 'Amethyst',
    linkA:  'http://collinsvacationrentals.com/rentals/royal-seas',
    linkB:  'https://www.collinsvacationrentals.com/rentals/amethyst',
  },
];

// ── Michigan ──────────────────────────────────────────────────────────────────

const MI_HOUSES = [
  // mi1 — "Good"
{
  id: 'mi1',
  dest: 'mi',
  name: 'South Haven 6BR + Harbor Breeze',
  beds:  '6 + 6',
  baths: '6 + 6',
  beach: 'Walk (3 min / 0.2 mi)',
  pool:  'Yes / Community',
  cost:  '~$26,000',
  extras: [
    'Both houses 6 bed / 6 bath',
    'Front house private pool',
    '3 min walk to two beach access points',
    'Dog friendly',
    'Most affordable Michigan option',
  ],
  caveat: '⚠️ Neither house is directly on the beach — 3 min walk to lake access. Harbor Breeze pool is community/shared, not private. Houses are 0.5 mile apart.',
  photoA:  'https://media.vrbo.com/lodging/64000000/63910000/63905100/63905083/50e405d7.jpg',
  photoB:  'https://media.vrbo.com/lodging/127000000/126580000/126572900/126572812/aaa841ec.jpg',
  labelA: 'South Haven 6BR',
  labelB: 'Harbor Breeze',
  linkA:  'https://www.vrbo.com/2191200',
  linkB:  'https://www.vrbo.com/5111668',
},

// mi2 — "Luxury"
{
  id: 'mi2',
  dest: 'mi',
  name: 'Lamb Haven + Lakeside Retreat',
  beds:  '7 + 5',
  baths: 'TBD + TBD',
  beach: 'Across from beach (main) / Walk (2 min shortcut)',
  pool:  'Yes / No',
  cost:  '~$32,000',
  extras: [
    'Lamb Haven is directly across from the beach',
    'Private pool, covered seating & bonfire pit',
    'Cut through open yard — 2 min between houses',
    'Dog friendly',
    'South Haven\'s "Golden Mile"',
  ],
  caveat: 'Best beach access of any Michigan option — front house is across from the beach. Back house has no pool. Houses are technically 0.5 mi apart but a yard shortcut makes it ~2 min.',
  photoA:  'https://media.vrbo.com/lodging/102000000/101820000/101817300/101817206/776b5648.jpg',
  photoB:  'https://media.vrbo.com/lodging/33000000/32670000/32664400/32664388/ddf7536f.jpg',
  labelA: 'Lamb Haven',
  labelB: 'Lakeside Retreat',
  linkA:  'https://www.vrbo.com/3813255',
  linkB:  'https://www.vrbo.com/1496312',
},

// mi3 — "Extra Luxury"
{
  id: 'mi3',
  dest: 'mi',
  name: 'Luxury Estate + Cozy Cottage',
  beds:  '9 + 3',
  baths: 'TBD + TBD',
  beach: 'Walk (3 min / 0.2 mi)',
  pool:  'Yes / No',
  cost:  '~$32,000',
  extras: [
    'Estate has private pool + spa',
    'Game room & movie room',
    'Two beach access points 3 min away',
    '5 min walk between houses',
    'Highest-end main house of any option',
  ],
  caveat: '⚠️ Significant quality gap between houses — the estate is exceptional but the cottage is very modest (3 rooms, basic). Best amenities, most uneven split. No pool at cottage.',
  photoA:  'https://media.vrbo.com/lodging/72000000/71130000/71123500/71123419/e342b86f.jpg',
  photoB:  'https://media.vrbo.com/lodging/25000000/24040000/24034600/24034529/7c83427f.jpg',
  labelA: 'Luxury Estate',
  labelB: 'Cozy Cottage',
  linkA:  'https://www.vrbo.com/2467492',
  linkB:  'https://www.vrbo.com/1318721',
},

];
