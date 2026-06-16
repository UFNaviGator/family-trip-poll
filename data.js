/**
 * ════════════════════════════════════════════════════════════
 *  JARRARD FAMILY TRIP 2027 — HOUSE DATA
 *  Edit this file to update house info, photos, and links.
 *  No need to touch index.html or results.html for content changes.
 *
 *  BEDROOMS & BATHROOMS
 *  ────────────────────
 *  Each option has two houses. Enter each house separately:
 *    house1: { beds: 7, fullBaths: 5, halfBaths: 2 }
 *    house2: { beds: 6, fullBaths: 4, halfBaths: 0 }
 *  halfBaths can be omitted or set to 0 if there are none.
 *  The site auto-calculates and displays combined totals.
 *
 *  PHOTOS
 *  ──────
 *  Use a repo-relative path: "images/fl1-a.jpg"
 *    → drop the file in the /images/ folder in the repo
 *  Or a direct web URL: "https://example.com/photo.jpg"
 *  Set to null to show a placeholder.
 *
 *  LINKS
 *  ─────
 *  linkA / linkB → full URL to the listing for each house.
 *  Set to null to hide the button.
 *
 *  TOTAL_INVITED
 *  ─────────────
 *  Approximate headcount — used for the participation % on results.
 * ════════════════════════════════════════════════════════════
 */

const TOTAL_INVITED = 27;

// ── Florida ───────────────────────────────────────────────────────────────────

const FL_HOUSES = [
  /*{
    id: 'fl1',
    dest: 'fl',
    name: 'Seven Seas + Sea-La-Vie',
    house1: { beds: 7, fullBaths: 7, halfBaths: 2 },
    house2: { beds: 6, fullBaths: 4, halfBaths: 0 },
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
    photoA:  'https://img.trackhs.com/1200x/https://track-pm.s3.amazonaws.com/capeandcoast/image/06132b40-4c32-4fac-a483-bc225170b6d7',
    photoB:  'images/sealavie.png',
    labelA: 'Seven Seas',
    labelB: 'Sea-La-Vie',
    linkA:  'https://www.capeandcoast.com/rentals/seven-seas',
    linkB:  'https://www.collinsvacationrentals.com/rentals/sea-la-vie',
  },*/
  {
    id: 'fl1',
    dest: 'fl',
    name: 'Seven Seas + Saltwater & Sunsets',
    house1: { beds: 7, fullBaths: 7, halfBaths: 2 },
    house2: { beds: 5, fullBaths: 5, halfBaths: 0 },
    beach: 'Yes (main) / Walk 2 min (2nd)',
    pool:  'Yes / Yes (screened)',
    cost:  '$24,197',
    extras: [
      'Seven Seas recently remodeled — top of The Plantation',
      'Near-360° rooftop deck with Gulf, Bay & Cut views',
      'Private pool with splash pad + pergola',
      'Elevator access to all floors',
      'Wet bar on 3rd floor lounge',
      'Gourmet kitchen — dual fridges, gas stove',
      'Fish cleaning station & private boardwalk with ramp',
      'Screened pool + tennis & basketball at 2nd house',
      '$400 beach gear credit included (bikes, kayaks, paddleboards)',
    ],
    caveat: 'Both houses in The Plantation on the east end of the island. Dogs allowed at Seven Seas (max 2, under 30 lbs). Sleeps up to 24 + 12 combined.',
    photoA:  'https://img.trackhs.com/1200x/https://track-pm.s3.amazonaws.com/capeandcoast/image/a23a9214-42a2-4ede-a989-afd9401fc74c',
    photoB:  'https://media.vrbo.com/lodging/121000000/120840000/120838600/120838590/2b054f26.jpg',
    labelA: 'Seven Seas',
    labelB: 'Saltwater & Sunsets',
    linkA:  'https://www.capeandcoast.com/rentals/seven-seas',
    linkB:  'https://www.vrbo.com/4862963',
  },

  /*{
    id: 'fl2',
    dest: 'fl',
    name: 'Casa Bella Luca + AB Sea',
    house1: { beds: 7, fullBaths: 6, halfBaths: 0 },
    house2: { beds: 5, fullBaths: 4, halfBaths: 0 },
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
  },*/
  {
    id: 'fl2',
    dest: 'fl',
    name: 'Royal Seas + Amethyst',
    house1: { beds: 7, fullBaths: 7, halfBaths: 1 },
    house2: { beds: 5, fullBaths: 4, halfBaths: 1 },
    beach: 'Yes (main) / Across street (2nd)',
    pool:  'Yes + spa / Yes',
    cost:  '$23,886',
    extras: [
      'Royal Seas — one of the largest beachfront homes on SGI',
      'Pool with overflow spa + outdoor kitchen',
      'Theater room + pool table game room',
      'Five wet bars & five gas fireplaces',
      'Elevator + SubZero fridge, double dishwashers & ovens',
      'Amethyst has screened porch & basketball court',
      'Royal Seas has Plantation Clubhouse access',
    ],
    caveat: 'Neither house allows pets. Royal Seas pool heat is extra ($400/wk); elevator also has a $100 fee. Amethyst is across the street from beach, not beachfront, and does NOT have Plantation Clubhouse access. Amethyst noted as "a bit dated" in reviews.',
    photoA:  'https://photos.barefoot.com/v3ccln0929/images/properties/49108/1+-+2332+Schooner+Landing+Drone-3.jpg?v=85993https://photos.barefoot.com/v3ccln0929/images/properties/49108/1+-+2332+Schooner+Landing+Drone-3.jpg?v=85993',
    photoB:  'https://photos.barefoot.com/v3ccln0929/images/properties/7303/1+-+Exterior-Amethyst-_KLH8964.JPG?v=72447',
    labelA: 'Royal Seas',
    labelB: 'Amethyst',
    linkA:  'https://www.collinsvacationrentals.com/rentals/royal-seas',
    linkB:  'https://www.collinsvacationrentals.com/rentals/amethyst',
  },

  /*{
    id: 'fl3',
    dest: 'fl',
    name: 'Royal Seas + Amethyst',
    house1: { beds: 6, fullBaths: 5, halfBaths: 0 },
    house2: { beds: 5, fullBaths: 4, halfBaths: 0 },
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
  },*/
  {
    id: 'fl3',
    dest: 'fl',
    name: 'Casa Bella Luca + AB Sea',
    house1: { beds: 7, fullBaths: 7, halfBaths: 1 },
    house2: { beds: 5, fullBaths: 5, halfBaths: 0 },
    beach: 'Yes, beachfront (main) / Beach access path (2nd)',
    pool:  'Yes / Yes',
    cost:  '$20,770',
    extras: [
      'Casa Bella Luca — the "Cartel house", we know it well',
      'Private boardwalk to beach + pool deck entertaining',
      'Media room with pool table & Blu-ray',
      'Two wet bars, two dining areas, two ovens & dishwashers',
      'Elevator at both houses',
      'AB Sea is pet friendly (2 dogs under 50 lbs)',
      'Both have full Plantation Clubhouse access incl. pickleball',
    ],
    caveat: 'Casa Bella Luca does not allow pets; AB Sea does. Pool heat extra ($400/wk) and elevator has a $100 fee at both houses. AB Sea spa has been removed. AB Sea is beach access, not beachfront.',
    photoA:  'https://photos.barefoot.com/v3ccln0929/images/properties/52600/%232.jpg?v=93103',
    photoB:  'https://photos.barefoot.com/v3ccln0929/images/properties/46130/1+-+A-B-Sea-Exterior.jpg?v=77087',
    labelA: 'Casa Bella Luca',
    labelB: 'AB Sea',
    linkA:  'https://www.collinsvacationrentals.com/rentals/casa-bellaluca',
    linkB:  'https://www.collinsvacationrentals.com/rentals/a-b-sea',
  },

];

// ── Michigan ──────────────────────────────────────────────────────────────────

const MI_HOUSES = [
  // mi1 — "Good"
  {
    id: 'mi1',
    dest: 'mi',
    name: 'South Haven 6BR + Harbor Breeze',
    house1: { beds: 6, fullBaths: 4, halfBaths: 2 },
    house2: { beds: 6, fullBaths: 5, halfBaths: 1 },
    beach: 'Walk (3 min / 0.2 mi)',
    pool:  'Yes / Community',
    cost:  '~$26,000',
    extras: [
      'Both houses 6 bedrooms',
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
    house1: { beds: 7, fullBaths: 7, halfBaths: 1 },
    house2: { beds: 5, fullBaths: 3, halfBaths: 0 },
    beach: 'Across from beach (main) / Walk (2 min shortcut)',
    pool:  'Yes / No',
    cost:  '~$32,000',
    extras: [
      'Lamb Haven is directly across from the beach',
      'Private pool, covered seating & bonfire pit',
      'Cut through open yard — 2 min between houses',
      'Dog friendly',
      "South Haven's \"Golden Mile\"",
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
    house1: { beds: 9, fullBaths: 5, halfBaths: 2 },
    house2: { beds: 3, fullBaths: 1, halfBaths: 0 },
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
    caveat: '⚠️ Significant quality gap between houses — the estate is exceptional but the cottage is modest. Best amenities, most uneven split. No pool at cottage.',
    photoA:  'https://media.vrbo.com/lodging/72000000/71130000/71123500/71123419/e342b86f.jpg',
    photoB:  'https://media.vrbo.com/lodging/25000000/24040000/24034600/24034529/7c83427f.jpg',
    labelA: 'Luxury Estate',
    labelB: 'Cozy Cottage',
    linkA:  'https://www.vrbo.com/2467492',
    linkB:  'https://www.vrbo.com/1318721',
  },
];

/* ════════════════════════════════════════════════════════════
   HELPERS — used by index.html and results.html.
   You normally don't need to edit below this line.
   ════════════════════════════════════════════════════════════ */

// Notation: beds + full baths + half baths.
// A trailing "+ 0" for half baths is dropped for cleanliness, UNLESS
// forceHalf is true (used for the option total when any house has halves),
// so the columns line up in the detail view.
function unitNotation(beds, full, half, forceHalf) {
  if (half > 0 || forceHalf) {
    return beds + ' : ' + full + ' : ' + half;
  }
  return beds + ' : ' + full;
}

// Per-house notation, e.g. "7 + 5 + 2" or "6 + 4"
function houseNotation(house) {
  return unitNotation(house.beds || 0, house.fullBaths || 0, house.halfBaths || 0, false);
}

// Combined totals as an object
function totals(h) {
  return {
    beds: (h.house1.beds || 0) + (h.house2.beds || 0),
    full: (h.house1.fullBaths || 0) + (h.house2.fullBaths || 0),
    half: (h.house1.halfBaths || 0) + (h.house2.halfBaths || 0),
  };
}

// Combined bedroom count, e.g. 12
function totalBeds(h) {
  return totals(h).beds;
}

// Option-total notation, e.g. "11 + 8 + 3" or "13 + 9"
function totalNotation(h) {
  const t = totals(h);
  return unitNotation(t.beds, t.full, t.half, false);
}

// Short summary for the rank card, e.g. "11 + 8 + 3"
function shortBedBath(h) {
  return totalNotation(h);
}

// Per-house values for the detail panel
function house1Notation(h) { return houseNotation(h.house1); }
function house2Notation(h) { return houseNotation(h.house2); }
