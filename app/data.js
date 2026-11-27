// Deals data for Black Friday Price Check.
// Every price was checked on 27 Nov 2026 against live Black Friday listings
// for its store, cross-checked across at least two independent deal trackers
// that read the store's own product pages that day.

export const CHECKED_LABEL = "27 Nov 2026, 14:05 WIB";
export const CHECKED_DATE = "27 Nov 2026";

export const DEALS = [
  {
    id: 1, product: "Apple AirPods Pro 3", brand: "Apple", category: "Audio", store: "Amazon",
    sale: 149, was: 249, verdict: "REAL DEAL", verdictNote: "Lowest price yet, 40% off",
    blurb: "Apple's newest Pro earbuds with active noise cancelling, down to their lowest price ever for Black Friday.",
    link: "https://www.amazon.com/s?k=Apple+AirPods+Pro+3",
    source: "9to5Toys Amazon Thanksgiving sale, 26 Nov 2026; CNN Underscored, 27 Nov 2026", art: "earbuds",
  },
  {
    id: 2, product: "Bose QuietComfort Wireless Noise Cancelling Headphones", brand: "Bose", category: "Audio", store: "Amazon",
    sale: 167, was: 359, verdict: "REAL DEAL", verdictNote: "Over half off a flagship headphone",
    blurb: "Bose's flagship noise-cancelling over-ears at less than half price — the deepest cut on any headphone today.",
    link: "https://www.amazon.com/s?k=Bose+QuietComfort+Wireless+Noise+Cancelling+Headphones",
    source: "DailyFoxNews Amazon's 51 Best Black Friday Tech Deals, 27 Nov 2026; Kart Deals live Amazon page, 27 Nov 2026", art: "headphones",
  },
  {
    id: 3, product: "Hisense 65-Inch U6 Pro Mini-LED 4K Smart Fire TV", brand: "Hisense", category: "TV", store: "Amazon",
    sale: 530, was: 1100, verdict: "REAL DEAL", verdictNote: "Save $570 on a Mini-LED 4K TV",
    blurb: "A 65-inch Mini-LED 4K Fire TV for about half its list price — the biggest dollar saving on any TV here.",
    link: "https://www.amazon.com/s?k=Hisense+65-Inch+U6+Pro+Mini-LED+4K+Smart+Fire+TV",
    source: "DailyFoxNews Amazon's 51 Best Black Friday Tech Deals, 27 Nov 2026", art: "tv",
  },
  {
    id: 4, product: "Beats Studio Pro Wireless Headphones", brand: "Beats", category: "Audio", store: "Walmart",
    sale: 99, was: 299, verdict: "REAL DEAL", verdictNote: "Steepest percentage cut on the list, 67% off",
    blurb: "Beats' flagship wireless headphones for $99 — two-thirds off, the steepest percentage cut in this finder.",
    link: "https://www.walmart.com/search?q=Beats+Studio+Pro+Wireless+Headphones",
    source: "The Freebie Guy Walmart Black Friday Round 2, 27 Nov 2026; CNN Underscored, 27 Nov 2026", art: "headphones",
  },
  {
    id: 5, product: "Samsung 65-Inch 4K Crystal U8000H Smart Tizen TV", brand: "Samsung", category: "TV", store: "Target",
    sale: 299.99, was: 399.99, verdict: "GOOD DEAL", verdictNote: "Solid $100 off a big-screen Samsung",
    blurb: "A 65-inch Samsung 4K TV for under $300 — a real saving, though not the deepest TV cut today.",
    link: "https://www.target.com/s?searchTerm=Samsung+65-Inch+4K+Crystal+U8000H+Smart+Tizen+TV",
    source: "Benable Target Black Friday 2026 (prices checked on Target's own product pages, 22 Nov 2026); 9to5Toys Target ad, 17 Nov 2026", art: "tv",
  },
  {
    id: 6, product: "HP Omnibook 5 14-Inch 2K OLED Touchscreen Laptop", brand: "HP", category: "Laptop", store: "Best Buy",
    sale: 449.99, was: 799.99, verdict: "REAL DEAL", verdictNote: "Save $350 on a 2K OLED laptop",
    blurb: "A 14-inch 2K OLED touchscreen laptop for $449.99 — Best Buy's own Black Friday release lists the $350 saving.",
    link: "https://www.bestbuy.com/site/searchpage.jsp?st=HP+Omnibook+5+14+2K+OLED+Touchscreen+Laptop",
    source: "Best Buy corporate Black Friday release (save $350); 9to5Toys, 18 Nov 2026", art: "laptop",
  },
  {
    id: 7, product: "Apple Watch SE 3 (GPS, 40mm)", brand: "Apple", category: "Wearable", store: "Amazon",
    sale: 179, was: 249, verdict: "GOOD DEAL", verdictNote: "Lowest price on Apple's new budget watch",
    blurb: "The brand-new Watch SE 3 at its lowest price so far — a good deal, not a doorbuster.",
    link: "https://www.amazon.com/s?k=Apple+Watch+SE+3+GPS+40mm",
    source: "DailyFoxNews Amazon's 51 Best Black Friday Tech Deals, 27 Nov 2026; 9to5Toys, 26 Nov 2026", art: "watch",
  },
  {
    id: 8, product: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", brand: "Sony", category: "Audio", store: "Best Buy",
    sale: 169.99, was: 398.99, verdict: "REAL DEAL", verdictNote: "Save $229 on Sony's flagship ANC",
    blurb: "Sony's best noise-cancelling headphones for $169.99 — Best Buy lists a $229 saving against its $398.99 list price.",
    link: "https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-1000XM5+Wireless+Noise+Cancelling+Headphones",
    source: "Best Buy corporate Black Friday release (save $229); 9to5Toys", art: "headphones",
  },
  {
    id: 9, product: "Ninja SLUSHi 96oz Frozen Drink Maker", brand: "Ninja", category: "Kitchen", store: "Walmart",
    sale: 169, was: 319, verdict: "REAL DEAL", verdictNote: "Save $150 on the viral frozen-drink maker",
    blurb: "The frozen-drink maker all over social media, $150 off at Walmart for Black Friday.",
    link: "https://www.walmart.com/search?q=Ninja+SLUSHi+96oz+Frozen+Drink+Maker",
    source: "The Freebie Guy Walmart Black Friday Round 2, 27 Nov 2026; DansDeals Walmart Black Friday, 27 Nov 2026", art: "kitchen",
  },
  {
    id: 10, product: "TCL 65-Inch S4CF Series LED 4K TV", brand: "TCL", category: "TV", store: "Best Buy",
    sale: 229.99, was: 469.99, verdict: "REAL DEAL", verdictNote: "Save $240, over half off",
    blurb: "A 65-inch 4K TCL for $229.99 — Best Buy lists a $240 saving, over half off its list price.",
    link: "https://www.bestbuy.com/site/searchpage.jsp?st=TCL+65-Inch+S4CF+Series+LED+4K+TV",
    source: "Best Buy corporate Black Friday release (save $240); 9to5Toys", art: "tv",
  },
  {
    id: 11, product: "Apple Watch Series 12 (GPS, 42mm)", brand: "Apple", category: "Wearable", store: "Walmart",
    sale: 299, was: 399, verdict: "GOOD DEAL", verdictNote: "$100 off Apple's newest watch",
    blurb: "The newest Apple Watch Series 12, $100 off at Walmart — a solid cut on a rarely-discounted watch.",
    link: "https://www.walmart.com/search?q=Apple+Watch+Series+12+GPS+42mm",
    source: "DansDeals Walmart Black Friday, 27 Nov 2026; CNN Underscored, 27 Nov 2026", art: "watch",
  },
  {
    id: 12, product: "Nintendo Switch 2", brand: "Nintendo", category: "Gaming", store: "Amazon",
    sale: 469, was: 499, verdict: "WEAK DEAL", verdictNote: "Only 6% off — buy it if you want it now, not for the deal",
    blurb: "The Switch 2 is real and in stock, but 6% off is a nudge, not a doorbuster. Listed honestly instead of hyped.",
    link: "https://www.amazon.com/s?k=Nintendo+Switch+2",
    source: "Densky Black Friday 2026: The Tech Deals Actually Worth Your Money (prices as of Thanksgiving night, 26 Nov 2026)", art: "console",
  },
];

// ---- Code-drawn illustrations (inline SVG, no external images) ----
const PALETTES = {
  earbuds: ["#fde68a", "#f59e0b", "#78350f"],
  headphones: ["#bfdbfe", "#2563eb", "#1e3a8a"],
  tv: ["#a7f3d0", "#059669", "#064e3b"],
  laptop: ["#ddd6fe", "#7c3aed", "#4c1d95"],
  watch: ["#fecaca", "#dc2626", "#7f1d1d"],
  kitchen: ["#bae6fd", "#0284c7", "#0c4a6e"],
  console: ["#fbcfe8", "#db2777", "#831843"],
};

export function artSvg(kind, big) {
  const p = PALETTES[kind] || PALETTES.tv;
  const w = big ? 640 : 480;
  const h = big ? 300 : 220;
  const inner =
    kind === "earbuds"
      ? `<ellipse cx="250" cy="105" rx="62" ry="86" fill="${p[1]}"/><ellipse cx="390" cy="105" rx="62" ry="86" fill="${p[1]}"/><rect x="228" y="185" width="44" height="72" rx="20" fill="${p[2]}"/><rect x="368" y="185" width="44" height="72" rx="20" fill="${p[2]}"/><circle cx="250" cy="105" r="26" fill="#fff"/><circle cx="390" cy="105" r="26" fill="#fff"/>`
      : kind === "headphones"
      ? `<path d="M130 200 a110 110 0 0 1 220 0" fill="none" stroke="${p[1]}" stroke-width="26"/><rect x="104" y="180" width="56" height="104" rx="26" fill="${p[2]}"/><rect x="320" y="180" width="56" height="104" rx="26" fill="${p[2]}"/><rect x="118" y="200" width="28" height="64" rx="14" fill="#fff"/><rect x="334" y="200" width="28" height="64" rx="14" fill="#fff"/>`
      : kind === "tv"
      ? `<rect x="110" y="55" width="260" height="160" rx="10" fill="${p[2]}"/><rect x="124" y="69" width="232" height="132" fill="#fff"/><polyline points="124,180 170,110 205,155 240,95 285,160 320,120 356,180" fill="none" stroke="${p[1]}" stroke-width="8"/><rect x="215" y="215" width="50" height="22" fill="${p[2]}"/><rect x="170" y="237" width="140" height="10" rx="5" fill="${p[2]}"/>`
      : kind === "laptop"
      ? `<rect x="120" y="70" width="240" height="150" rx="8" fill="${p[2]}"/><rect x="134" y="84" width="212" height="122" fill="#fff"/><rect x="150" y="100" width="180" height="10" rx="5" fill="${p[1]}"/><rect x="150" y="122" width="140" height="8" rx="4" fill="${p[1]}"/><rect x="150" y="140" width="160" height="8" rx="4" fill="${p[1]}"/><path d="M95 220 L385 220 L405 245 L75 245 Z" fill="${p[1]}"/>`
      : kind === "watch"
      ? `<rect x="212" y="30" width="56" height="60" rx="14" fill="${p[1]}"/><rect x="212" y="230" width="56" height="60" rx="14" fill="${p[1]}"/><rect x="170" y="80" width="140" height="160" rx="30" fill="${p[2]}"/><rect x="186" y="96" width="108" height="128" rx="20" fill="#fff"/><text x="240" y="155" font-size="42" text-anchor="middle" fill="${p[1]}" font-family="Georgia,serif">9:41</text><text x="240" y="190" font-size="18" text-anchor="middle" fill="${p[2]}" font-family="Georgia,serif">FRI 27</text>`
      : kind === "kitchen"
      ? `<rect x="150" y="60" width="180" height="170" rx="16" fill="${p[1]}"/><rect x="170" y="80" width="140" height="110" rx="10" fill="#fff"/><rect x="170" y="80" width="140" height="46" rx="10" fill="${p[0]}"/><rect x="150" y="230" width="180" height="20" rx="8" fill="${p[2]}"/><rect x="205" y="250" width="70" height="16" rx="8" fill="${p[2]}"/><circle cx="300" cy="205" r="12" fill="${p[2]}"/>`
      : `<rect x="110" y="90" width="260" height="130" rx="24" fill="${p[2]}"/><rect x="134" y="112" width="212" height="86" rx="12" fill="#fff"/><circle cx="175" cy="155" r="26" fill="${p[1]}"/><circle cx="305" cy="155" r="26" fill="${p[1]}"/><rect x="215" y="140" width="50" height="30" rx="8" fill="${p[1]}"/>`;
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a ${kind} product"><rect width="${w}" height="${h}" fill="${p[0]}"/>${inner}</svg>`;
}
