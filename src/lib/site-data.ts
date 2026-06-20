import { productImage, serviceImage, PRODUCT_IMAGES, SERVICE_IMAGES, BEFORE_AFTER } from "@/lib/constants";

export const SITE = {
  name: "SneakCure",
  phone: "+91 98765 43210",
  email: "hello@sneakcure.com",
  whatsapp: "919876543210",
  address: "Gomti Nagar, Lucknow, Uttar Pradesh 226010, India",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1",
  instagram: "https://instagram.com/sneakcure",
} as const;

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training & Consultation", href: "/training" },
  { label: "Get Franchise", href: "/franchise" },
  { label: "Founder Story", href: "/founder" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const BRAND_VALUES = [
  { title: "Craft First", body: "Every piece is treated as collectible art — never rushed, never generic." },
  { title: "Material Science", body: "Protocols built for exotic skins, knit, patent leather, and limited-run composites." },
  { title: "Transparency", body: "Condition reports, progress updates, and honest timelines at every stage." },
  { title: "Confidential Care", body: "Discreet handling for collectors, stylists, and luxury clientele." },
] as const;

export const TEAM = [
  { name: "Atelier Lead", role: "Restoration Director", image: serviceImage(0) },
  { name: "Leather Specialist", role: "Senior Technician", image: serviceImage(1) },
  { name: "Color Artisan", role: "Patina & Repaint", image: serviceImage(2) },
  { name: "Quality Control", role: "Final Inspection", image: serviceImage(3) },
] as const;

export const FOUNDER = {
  name: "Aryan Singh",
  title: "Founder & Atelier Director",
  location: "Lucknow, India",
  image: serviceImage(4),
  tagline: "From late-night restorations to a national restoration house.",
  intro:
    "Aryan Singh founded SneakCure in 2018 with one bench, a desk lamp, and a refusal to treat iconic footwear like disposable fashion. What began as restorations for friends in Lucknow grew into a full atelier — and eventually a training academy and franchise network — because clients kept asking for the same standard on leather goods, bags, and pieces no one else would touch.",
} as const;

export const FOUNDER_STORY = [
  {
    title: "The spark",
    body: "Aryan grew up surrounded by sneaker culture — collecting, trading, and eventually watching pairs he loved age beyond repair. Local cleaners would shrink suede, strip paint, or rush jobs that deserved patience. He started experimenting on his own pairs at home, studying material guides and watching atelier videos from Europe and Japan until he could revive what others wrote off.",
  },
  {
    title: "The first bench",
    body: "In 2018, he rented a small studio space in Gomti Nagar, Lucknow — one bench, a rack of brushes, and a desk lamp for inspection. Word spread through friends and local collectors. The first paid job was a pair of oxidized Air Jordans; the client returned with three more pairs and a leather wallet. That was the moment SneakCure stopped being a side project and became a standard.",
  },
  {
    title: "Building the house",
    body: "As demand grew, Aryan refused to scale by cutting corners. Every piece received a written protocol: material mapping, before photos, stage updates, and final QC under studio lighting. He hired slowly — prioritizing hand skill and respect for the culture over speed. Leather goods, bags, and patina work followed naturally as clients trusted the atelier with more than sneakers.",
  },
  {
    title: "Academy & franchise",
    body: "By 2022, collectors and stylists across India were shipping pieces to Lucknow. Aryan launched the SneakCure Training Academy so the craft could outlive one studio, and began developing franchise systems to bring the same standard to new cities — with SOPs, supply chains, and on-site mentorship built in from day one.",
  },
] as const;

export const FOUNDER_MEMBERS = [
  {
    name: "Aryan Singh",
    role: "Founder & Atelier Director",
    joined: "2018",
    bio: "Sets the restoration standard, leads material R&D, and mentors every new artisan through the SneakCure protocol.",
    image: serviceImage(4),
    founder: true,
  },
  {
    name: "Priya Sharma",
    role: "Operations Lead",
    joined: "2019",
    bio: "Joined after managing luxury retail in Delhi. Built client intake, white-glove logistics, and the condition-report system the atelier runs on today.",
    image: serviceImage(0),
    founder: false,
  },
  {
    name: "Rahul Verma",
    role: "Senior Leather Technician",
    joined: "2020",
    bio: "A trained leather artisan from Kanpur. Brought jacket, bag, and edge-recolor expertise — and helped formalize leather protocols alongside sneaker work.",
    image: serviceImage(1),
    founder: false,
  },
  {
    name: "Neha Kapoor",
    role: "Color & Patina Artist",
    joined: "2021",
    bio: "Fine-arts background with a focus on pigment chemistry. Leads custom patina, repaint, and color-matching for grail and designer pieces.",
    image: serviceImage(2),
    founder: false,
  },
  {
    name: "Vikram Joshi",
    role: "Academy & Franchise Lead",
    joined: "2022",
    bio: "Former hospitality operator. Designed the training curriculum and partner onboarding playbook as SneakCure expanded beyond Lucknow.",
    image: serviceImage(3),
    founder: false,
  },
] as const;

export const FOUNDER_TIMELINE = [
  {
    year: "2016",
    title: "First experiments",
    body: "Late-night restorations on personal grails — learning deoxidation, suede revival, and sole work through trial, research, and community feedback.",
  },
  {
    year: "2018",
    title: "SneakCure is born",
    body: "Opened the first atelier bench in Gomti Nagar, Lucknow. Named the house SneakCure — sneaker care elevated to a cure, not a quick clean.",
  },
  {
    year: "2019",
    title: "First core members",
    body: "Priya joined to build operations and client experience. Rahul came on as the first dedicated leather technician — expanding beyond footwear.",
  },
  {
    year: "2020",
    title: "Luxury expansion",
    body: "Added bags, wallets, jackets, and bespoke patina services. Corporate and stylist clients began shipping runway and editorial pieces.",
  },
  {
    year: "2021",
    title: "The color studio",
    body: "Neha established the patina and repaint studio — custom color stories for leather goods and limited-run sneakers.",
  },
  {
    year: "2022",
    title: "Training academy",
    body: "Launched professional restoration programs. Vikram joined to scale education and franchise development.",
  },
  {
    year: "2024",
    title: "National vision",
    body: "Franchise partnerships in new cities, 500+ students trained, and 12,000+ pieces restored under the SneakCure standard.",
  },
] as const;

export const SERVICE_PAGES = [
  {
    slug: "luxury-sneaker-restoration",
    title: "Luxury Sneaker Restoration",
    tagline: "Museum-grade revival for iconic footwear.",
    shortDesc: "Deep cleaning, sole whitening, repainting, and full archival restoration for luxury sneakers.",
    image: serviceImage(0),
    overview:
      "From oxidized soles to distressed suede and custom paint layers, our sneaker atelier restores grails to factory-fresh character while preserving authenticity. Every pair receives a bespoke protocol documented under studio lighting.",
    process: [
      "Inspection & material mapping",
      "Deep cleanse & deoxidation",
      "Structural repair & repaint",
      "Protective finish & QC",
      "Archival return packaging",
    ],
    pricing: [
      { tier: "Essential Clean", price: "₹1,499+", note: "Standard materials" },
      { tier: "Premium Restore", price: "₹3,999+", note: "Midsoles, suede, leather" },
      { tier: "Grail Revival", price: "₹8,999+", note: "Full restoration" },
    ],
    faqs: [
      { q: "How long does restoration take?", a: "Typically 5–7 business days. Express service available for select pairs." },
      { q: "Do you work on designer sneakers?", a: "Yes — Dior, Louis Vuitton, Balenciaga, and limited-run pairs are our specialty." },
    ],
  },
  {
    slug: "bags-wallets-care",
    title: "Bags & Wallets Care",
    tagline: "Revive the leather you carry every day.",
    shortDesc: "Cleaning, conditioning, color restoration, and hardware care for luxury bags and wallets.",
    image: serviceImage(1),
    overview:
      "We treat handbags and wallets with the same archival standards as footwear — gentle pH-balanced cleansing, leather rehydration, edge recoloring, and hardware polishing without compromising structure.",
    process: ["Condition audit", "Surface cleanse", "Leather conditioning", "Color & edge work", "Hardware polish"],
    pricing: [
      { tier: "Wallet Care", price: "₹999+", note: "Clean & condition" },
      { tier: "Handbag Refresh", price: "₹2,499+", note: "Full exterior care" },
      { tier: "Archive Restore", price: "₹5,999+", note: "Deep restoration" },
    ],
    faqs: [
      { q: "Can you fix corner wear?", a: "Yes — we recolor and rebuild worn edges with matched pigments." },
      { q: "Is pickup available?", a: "White-glove pickup available in Lucknow, Delhi, and Kanpur." },
    ],
  },
  {
    slug: "leather-jacket-accessories-restoration",
    title: "Leather Jacket & Accessories Restoration",
    tagline: "Bring heritage leather back to life.",
    shortDesc: "Restoration for jackets, belts, watch straps, and premium leather accessories.",
    image: serviceImage(2),
    overview:
      "Cracked panels, faded dye, and dry leather are revived through multi-stage conditioning, pigment matching, and protective finishing — preserving the garment's original patina where it matters.",
    process: ["Leather analysis", "Cleanse & degrease", "Recolor & repair", "Conditioning", "Final seal"],
    pricing: [
      { tier: "Accessory Care", price: "₹799+", note: "Belts, straps" },
      { tier: "Jacket Refresh", price: "₹3,499+", note: "Clean & condition" },
      { tier: "Full Restoration", price: "₹7,999+", note: "Repair & recolor" },
    ],
    faqs: [
      { q: "Do you handle suede jackets?", a: "Yes — with dedicated suede nap revival protocols." },
      { q: "Can you match custom colors?", a: "Our artisans color-match from reference swatches or original panels." },
    ],
  },
  {
    slug: "premium-sofa-cleaning-restoration",
    title: "Premium Sofa Cleaning & Restoration",
    tagline: "Luxury upholstery, restored in place or atelier.",
    shortDesc: "Deep cleaning and leather restoration for premium home and office seating.",
    image: serviceImage(3),
    overview:
      "We restore premium leather and fabric upholstery with material-specific protocols — stain lift, conditioning, recoloring, and protective coatings for long-lasting results.",
    process: ["Site inspection", "Material test patch", "Deep extraction cleanse", "Restoration & recolor", "Protective finish"],
    pricing: [
      { tier: "Single Seat", price: "₹1,999+", note: "Chair / stool" },
      { tier: "Two-Seater", price: "₹4,999+", note: "Sofa section" },
      { tier: "Full Suite", price: "Custom", note: "On-site quote" },
    ],
    faqs: [
      { q: "Is on-site service available?", a: "Yes — we offer on-site cleaning for sofas in major metros." },
      { q: "How long does drying take?", a: "Typically 2–4 hours depending on material and ventilation." },
    ],
  },
  {
    slug: "car-leather-customization",
    title: "Car Leather Customization",
    tagline: "Bespoke interiors with precision finish.",
    shortDesc: "Custom leather dye, repair, and interior detailing for luxury vehicles.",
    image: serviceImage(4),
    overview:
      "From steering wheel rewraps to seat panel recoloring, we deliver automotive leather work with factory-level precision — color-matched pigments and UV-stable finishes.",
    process: ["Interior audit", "Panel prep", "Custom color match", "Application & cure", "UV protection"],
    pricing: [
      { tier: "Steering Wheel", price: "₹2,999+", note: "Restore or recolor" },
      { tier: "Seat Panels", price: "₹6,999+", note: "Per pair" },
      { tier: "Full Interior", price: "Custom", note: "Consultation required" },
    ],
    faqs: [
      { q: "Will the color fade?", a: "We use automotive-grade UV-stable finishes designed for longevity." },
      { q: "How long does customization take?", a: "3–10 business days depending on scope." },
    ],
  },
  {
    slug: "patina-work",
    title: "Patina Work",
    tagline: "Artisan color stories on premium leather.",
    shortDesc: "Hand-applied patina, antiquing, and custom color artistry for footwear and leather goods.",
    image: productImage(5),
    overview:
      "Our patina artists build depth and character through layered dyes, antiquing, and burnishing — from subtle vintage tones to bold bespoke color stories on shoes, bags, and jackets.",
    process: ["Design consultation", "Base prep", "Layer application", "Burnish & seal", "Final artistry QC"],
    pricing: [
      { tier: "Light Patina", price: "₹2,499+", note: "Subtle aging" },
      { tier: "Full Patina", price: "₹4,999+", note: "Custom color story" },
      { tier: "Bespoke Art", price: "₹9,999+", note: "One-of-one work" },
    ],
    faqs: [
      { q: "Can I choose the colors?", a: "Yes — we work from references, swatches, or collaborative design sessions." },
      { q: "Is patina permanent?", a: "Properly sealed patina is durable; we include care instructions with every piece." },
    ],
  },
] as const;

export type ServicePage = (typeof SERVICE_PAGES)[number];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export const PRODUCT_CATEGORIES = ["All", "Sneaker Care", "Leather Care", "Restoration Kits", "Accessories"] as const;

export const PRODUCTS = [
  { slug: "premium-sneaker-cleaner", name: "Premium Sneaker Cleaner", category: "Sneaker Care", price: "₹899", image: productImage(0), rating: 4.9, reviews: 124 },
  { slug: "suede-revive-kit", name: "Suede Revive Kit", category: "Sneaker Care", price: "₹1,299", image: productImage(1), rating: 4.8, reviews: 86 },
  { slug: "leather-conditioner-pro", name: "Leather Conditioner Pro", category: "Leather Care", price: "₹749", image: productImage(2), rating: 4.9, reviews: 210 },
  { slug: "patina-dye-set", name: "Patina Dye Set", category: "Leather Care", price: "₹1,999", image: productImage(3), rating: 4.7, reviews: 54 },
  { slug: "restoration-toolkit", name: "Atelier Restoration Toolkit", category: "Restoration Kits", price: "₹3,499", image: productImage(4), rating: 5.0, reviews: 38 },
  { slug: "microfiber-care-pack", name: "Microfiber Care Pack", category: "Accessories", price: "₹499", image: productImage(5), rating: 4.6, reviews: 167 },
  { slug: "sole-whitening-gel", name: "Sole Whitening Gel", category: "Sneaker Care", price: "₹649", image: productImage(6), rating: 4.8, reviews: 203 },
  { slug: "archival-storage-box", name: "Archival Storage Box", category: "Accessories", price: "₹1,149", image: productImage(7), rating: 4.9, reviews: 72 },
] as const;

export type Product = (typeof PRODUCTS)[number];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const TRAINING_PROGRAMS = [
  {
    title: "Foundation Restoration",
    duration: "4 Weeks",
    level: "Beginner",
    desc: "Core cleaning, material ID, and basic repair techniques.",
    image: serviceImage(0),
  },
  {
    title: "Advanced Leather Artistry",
    duration: "6 Weeks",
    level: "Intermediate",
    desc: "Repainting, patina, and color-matching mastery.",
    image: serviceImage(1),
  },
  {
    title: "Business & Atelier Setup",
    duration: "2 Weeks",
    level: "Professional",
    desc: "Operations, pricing, client handling, and studio setup.",
    image: serviceImage(2),
  },
] as const;

export const TRAINING_STATS = [
  { value: "500+", label: "Alumni trained" },
  { value: "3", label: "Program tracks" },
  { value: "100%", label: "Hands-on bench" },
  { value: "Lifetime", label: "Alumni support" },
] as const;

export const TRAINING_GALLERY = SERVICE_IMAGES.slice(0, 4);
export const FRANCHISE_GALLERY = PRODUCT_IMAGES.slice(2, 6);

export const FRANCHISE_BENEFITS = [
  "Proven SneakCure brand & SOPs",
  "Hands-on training & certification",
  "Marketing & social media playbooks",
  "Ongoing product supply support",
  "Territory guidance & launch assistance",
] as const;

export const SHARED_TESTIMONIALS = [
  { quote: "They resurrected my Travis fragments. Factory-new soles and suede nap.", name: "Marcus L.", role: "Collector · Lucknow" },
  { quote: "Our atelier ships runway samples here. SneakCure is the only team we trust.", name: "Elena V.", role: "Creative Director" },
  { quote: "Cinematic turnaround, white-glove service. Apple-level care for sneakers.", name: "Jordan K.", role: "Stylist · Delhi" },
] as const;

export const ABOUT_GALLERY = PRODUCT_IMAGES.slice(0, 6);
export const FOUNDER_GALLERY = PRODUCT_IMAGES.slice(4, 8);

/** Founder page imagery — matches founder/code.html sample */
export const FOUNDER_MEDIA = {
  portrait:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDHUM-ggHjAq16xJWmdkicEp3z-dDduaGskZOSCX8l4beVDXVuCreBLqLf_occ5dS-nFI-b8FV_y_KR0NCC9xnyAsYebC3hH2t1iha5m1N6YX7AmD4k5M77Yes6oopCD8PB9nPL7asnl0qvcU4gdeyUpixipTFmvMr_kXW30_FXjWqAyTSMUpZXjlGWTy8mv7YlswdtxDiGSnRD_NKbJQ9C1V89lLvXO4puR0tIfEX4YPrGtaMtfRiD",
  workspace:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Iy_sQQkcWqHuP7KSYE-qOx4Lm80RIZbdHvqgW059WON7CIK8Wo2a-uGUahM3y7OcoVQ-0RTRotProm2d2LRvOfsOwf7ztW4KAMjG5O3l2eUpyk9sVvvjn7T9SJt1sxt1xEBgrYKJentqANFh5aZlE7jsh7CHdR3pnm-KxKDoGbIlJjYs2UaayesLIv4VErjUftuymFOGh6Kkz2oNaL9Tmjl6jeIQdLQ0xwLNlSUYgXZcqMBIuOwq",
  studio:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAfEs885IfpUU_90THpB4ZFnWAx4Sbc9iLKA5o-kA2oLDYVXKD836KlVMqD11CMNl1ZfK1htnDbEPNfuW7Xs4n4vyCeFQ7NF9genJGY460U06YPXnRRJbDopjeGHwTW37ThCqQ9IwLUtTOx3grkbyG3wEtliZTpZEm2GeJIp716SayGz3nzM8gB24uOZeOJueV24JGMHX3YIAmDyIIznnuGdPdtY81rxR_tlZ1pQIHQ8mJb3QiTbacl",
  process:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvMt-WmYcWWsvDkHfsRk61aDqzxP9lNq6kcoyTX_snUcWAgOldAxfROJPNchXwntnDtwarvBfc4UtdNIvAPb3iBxtTLxA1zuDafWUtKUNOEOsBpAOj9w8yfbjjgEdUlw8B_YVWAQF1PauXelloFJ-h3WfxvabrdmqlBW-kdIPZUAqEJGrJ8_f2KH3vkA42vkLNhY8yy2ZqkYSLTbw-fYHVQNODXuJI7USGPQn6Uv7Vu2sZNAvYygld",
} as const;

export const SERVICE_BEFORE_AFTER = BEFORE_AFTER;
