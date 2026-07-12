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
  { value: 12000, suffix: "+", label: "Restorations Completed" },
  { value: 2800, suffix: "+", label: "Happy Clients" },
  { value: 40, suffix: "+", label: "Luxury Brands Served" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
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
  { step: "01", title: "Pickup", desc: "Secure doorstep pickup at your convenience." },
  { step: "02", title: "Assessment", desc: "Every item is carefully inspected before restoration." },
  { step: "03", title: "Deep Cleaning", desc: "Professional cleaning to remove dirt, stains, and buildup." },
  { step: "04", title: "Restoration", desc: "Expert repair, color correction, and material renewal." },
  { step: "05", title: "Quality Review", desc: "Every detail is checked to meet our atelier standards." },
  { step: "06", title: "Return Delivery", desc: "Safely packaged and delivered, ready to be enjoyed again." },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Expert Restoration",
    body: "Every item is restored with precision, premium materials, and techniques that preserve its original beauty, comfort, and character.",
  },
  {
    title: "Luxury-Grade Materials",
    body: "We use professional products trusted by luxury brands to deliver long-lasting results while protecting delicate leather, suede, canvas, and premium fabrics.",
  },
  {
    title: "Handcrafted by Specialists",
    body: "Each restoration is completed by experienced artisans who carefully inspect, repair, and finish every piece with exceptional attention to detail.",
  },
  {
    title: "Transparent Care",
    body: "Every project is evaluated individually, with honest recommendations, clear communication, and no unnecessary treatments.",
  },
  {
    title: "Safe Pickup & Delivery",
    body: "Secure doorstep pickup, protective packaging, and reliable delivery ensure your treasured items remain safe throughout the restoration journey.",
  },
  {
    title: "Quality You Can Trust",
    body: "Before every item leaves our atelier, it undergoes a detailed quality inspection to ensure it meets the high standards Sneakcure is known for.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I honestly didn't expect my sneakers to look this good again. The attention to detail and finish exceeded my expectations. Sneakcure truly knows how to preserve premium footwear.",
    name: "Verified Customer",
    role: "Sneaker Restoration",
  },
  {
    quote:
      "From pickup to delivery, the entire experience felt premium. My leather bag was beautifully restored, and the communication throughout the process was excellent.",
    name: "Verified Customer",
    role: "Luxury Bag Restoration",
  },
  {
    quote:
      "Professional team, transparent process, and outstanding results. My favorite leather shoes look refreshed while keeping their original character. Highly recommended.",
    name: "Verified Customer",
    role: "Leather Restoration",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "How long does a restoration take?",
    a: "Most restorations are completed within 7–15 business days, depending on the item's condition and the level of craftsmanship required.",
  },
  {
    q: "Can you restore luxury brands?",
    a: "Yes. We professionally restore sneakers, shoes, bags, jackets, and leather accessories from leading luxury and premium brands.",
  },
  {
    q: "Do you offer pickup across India?",
    a: "Yes. We provide secure doorstep pickup and delivery services across India for a smooth, hassle-free restoration experience.",
  },
  {
    q: "Can damaged leather be restored?",
    a: "In many cases, yes. Our specialists assess every item individually and recommend the most suitable restoration solution.",
  },
  {
    q: "Will the original look be preserved?",
    a: "Absolutely. Our focus is to preserve the original character, texture, and craftsmanship while restoring the item's appearance.",
  },
  {
    q: "How can I get a quote?",
    a: "Simply share clear photos of your item through WhatsApp or our enquiry form. Our team will review them and provide a personalized estimate.",
  },
  {
    q: "Do you provide franchise opportunities?",
    a: "Yes. Sneakcure offers franchise partnerships and professional training programs for entrepreneurs across India.",
  },
  {
    q: "What items do you restore?",
    a: "We restore sneakers, leather shoes, handbags, wallets, jackets, sofas, car interiors, and other premium leather goods.",
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

export const BEFORE_AFTER_SHOWCASE = [
  {
    title: "Luxury Sneaker Restoration",
    before: BEFORE_AFTER.before,
    after: BEFORE_AFTER.after,
    beforeAlt: "Sneaker before restoration",
    afterAlt: "Sneaker after restoration",
  },
  {
    title: "Suede Revival",
    before: "/services/service-02.jpg",
    after: "/services/service-03.jpg",
    beforeAlt: "Suede sneaker before restoration",
    afterAlt: "Suede sneaker after restoration",
  },
  {
    title: "Leather Bag Care",
    before: "/product/product-04.jpg",
    after: "/product/product-05.jpg",
    beforeAlt: "Leather bag before restoration",
    afterAlt: "Leather bag after restoration",
  },
] as const;

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
