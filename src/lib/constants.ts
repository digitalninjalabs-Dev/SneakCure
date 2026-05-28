export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  { title: "Sneaker Cleaning", desc: "pH-balanced deep cleanse for every upper material." },
  { title: "Sole Whitening", desc: "Ice-white midsoles without brittle oxidation." },
  { title: "Leather Restoration", desc: "Rehydrate, recolor, and revive premium leather." },
  { title: "Suede Restoration", desc: "Nap revival, stain lift, and protective finishing." },
  { title: "Repainting", desc: "Color-matched artistry for scuffs and panel wear." },
  { title: "Deep Care", desc: "Full disassembly-level restoration for grails." },
  { title: "Deodorizing", desc: "Antimicrobial treatment with lasting freshness." },
] as const;

export const STATS = [
  { value: 12400, suffix: "+", label: "Sneakers Restored" },
  { value: 2800, suffix: "+", label: "Premium Clients" },
  { value: 48, suffix: "", label: "Luxury Brands" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
] as const;

export const BRANDS = [
  "Prada",
  "Dior",
  "Gucci",
  "Louis Vuitton",
  "Balenciaga",
  "Chanel",
  "Burberry",
  "Fendi",
  "Valentino",
  "Hermès",
  "YSL",
  "Alexander McQueen",
  "Jimmy Choo",
  "Christian Louboutin",
  "Moschino",
  "Bottega Veneta",
  "Givenchy",
  "Versace",
  "Celine",
  "Tom Ford",
] as const;

export const PROCESS_STEPS = [
  { step: "01", title: "Pickup", desc: "White-glove collection from your door." },
  { step: "02", title: "Inspection", desc: "Material mapping and restoration blueprint." },
  { step: "03", title: "Deep Cleaning", desc: "Multi-stage cleanse across every surface." },
  { step: "04", title: "Restoration", desc: "Precision repair, repaint, and conditioning." },
  { step: "05", title: "Quality Check", desc: "Macro inspection under studio lighting." },
  { step: "06", title: "Delivery", desc: "Sealed return in archival presentation." },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Museum-Grade Craft",
    body: "Every pair is treated like collectible art — archival materials, controlled humidity, and master technicians.",
  },
  {
    title: "Luxury Material Science",
    body: "Formulations engineered for exotic skins, patent leather, knit, and limited-run composites.",
  },
  {
    title: "Confidential Concierge",
    body: "Discreet pickup, insured transit, and priority turnaround for collectors and stylists.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "They resurrected my Travis fragments. The sole ice and suede nap look factory-new.",
    name: "Marcus L.",
    role: "Collector · Los Angeles",
  },
  {
    quote:
      "Our atelier ships six-figure runway samples here. SneakCure is the only team we trust.",
    name: "Elena V.",
    role: "Creative Director · Milan",
  },
  {
    quote:
      "Cinematic turnaround, white-glove service. This is Apple-level care for sneakers.",
    name: "Jordan K.",
    role: "Stylist · New York",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "How long does a premium restoration take?",
    a: "Standard service is 5–7 business days. Express concierge is available within 48 hours for select pairs.",
  },
  {
    q: "Do you work on luxury designer footwear?",
    a: "Yes. We regularly restore Hermès, Dior, Louboutin, and limited-run runway pieces with material-specific protocols.",
  },
  {
    q: "Is pickup available nationwide?",
    a: "We offer insured white-glove pickup in major metros and secure shipping kits everywhere else.",
  },
  {
    q: "What if my sneakers have custom paint or deconstruction?",
    a: "Our atelier documents every layer before treatment. Custom art and reconstructed uppers are handled by specialists.",
  },
] as const;

export const PRODUCT_IMAGES = [
  "/product/product-01.jpg",
  "/product/product-02.jpg",
  "/product/product-03.jpg",
  "/product/product-04.jpg",
  "/product/product-05.jpg",
  "/product/product-06.jpg",
  "/product/product-07.jpg",
  "/product/product-08.jpg",
  "/product/product-09.jpg",
  "/product/product-10.jpg",
] as const;

export const BEFORE_AFTER = {
  before: "/beforeafter/before.jpg",
  after: "/beforeafter/after.jpg",
} as const;

export const REEL_VIDEOS = [
  "/reel/reel-01.mp4",
  "/reel/reel-02.mp4",
  "/reel/reel-03.mp4",
  "/reel/reel-04.mp4",
] as const;

export const SERVICE_IMAGES = [
  "/services/service-01.jpg",
  "/services/service-02.jpg",
  "/services/service-03.jpg",
  "/services/service-04.jpg",
  "/services/service-05.jpg",
] as const;

export const productImage = (index: number) =>
  PRODUCT_IMAGES[index % PRODUCT_IMAGES.length]!;

export const serviceImage = (index: number) =>
  SERVICE_IMAGES[index % SERVICE_IMAGES.length]!;

export const SOCIAL_IMAGES = PRODUCT_IMAGES.slice(0, 6);

export const COLLECTION_ITEMS = [
  {
    name: "Air Jordan 1 · Chicago",
    tag: "Heritage Revival",
    image: productImage(0),
  },
  {
    name: "New Balance 550",
    tag: "Suede Archive",
    image: productImage(1),
  },
  {
    name: "Nike Dunk Low",
    tag: "Panda Reset",
    image: productImage(2),
  },
  {
    name: "Yeezy 350",
    tag: "Primeknit Care",
    image: productImage(3),
  },
] as const;

export const SHOWCASE_SNEAKERS = [
  {
    name: "Fragment Jordan",
    image: productImage(4),
  },
  {
    name: "Off-White Dunk",
    image: productImage(5),
  },
  {
    name: "Travis Scott",
    image: productImage(6),
  },
  {
    name: "Dior B23",
    image: productImage(7),
  },
] as const;
