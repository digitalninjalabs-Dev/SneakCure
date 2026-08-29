import { productImage, serviceImage, PRODUCT_IMAGES, SERVICE_IMAGES, BEFORE_AFTER } from "@/lib/constants";

export const SITE = {
  name: "Sneakcure",
  phone: "+91 9555213651",
  email: "care@sneakcure.com",
  whatsapp: "919555213651",
  address:
    "Kh No: 31/25, Plot No 86, Near MG Royal Banquet Hall, Pocket 1, Matiala Extension, Matiala, Delhi, 110059",
  hours: "10:00 AM – 8:00 PM IST (Mon–Tue, Thu–Sun)",
  weeklyOff: "Wednesday",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1",
  instagram: "https://instagram.com/Sneakcure",
  facebook: "https://www.facebook.com/sneakcure",
  youtube: "https://www.youtube.com/@sneakcure",
} as const;

export const CONTACT_STORES = [
  {
    name: "Delhi Headoffice",
    landmark: "Near MG Royal Banquet Hall",
    address:
      "Kh No: 31/25, Plot No 86, Near MG Royal Banquet Hall, Pocket 1, Matiala Extension, Matiala, Delhi, 110059",
    hours: "10:00 AM – 8:00 PM IST (Monday–Sunday)",
    weeklyOff: "Wednesday",
    phone: "+91 9555213651",
    phoneHref: "919555213651",
    email: "companysneakcure@gmail.com",
  },
  {
    name: "Lucknow Company Own Studio",
    landmark: "Near Summit Building",
    address: "624V/177 Vishesh Khand, Gomti Nagar, Lucknow, 226010",
    hours: "10:00 AM – 8:00 PM IST (Monday–Sunday)",
    weeklyOff: "Wednesday",
    phone: "+91 9170775506",
    phoneHref: "919170775506",
    email: "companysneakcure@gmail.com",
  },
  {
    name: "Kanpur Company Own Studio",
    landmark: "",
    address: "128/61, K Block, VIRAT NAGAR, Kidwai Nagar, Kanpur, Uttar Pradesh 208011",
    hours: "10:00 AM – 8:00 PM IST (Monday–Sunday)",
    weeklyOff: "Wednesday",
    phone: "+91 9170775506",
    phoneHref: "919170775506",
    email: "companysneakcure@gmail.com",
  },
] as const;

export const CONTACT_REFERRAL_SOURCES = [
  "Google Search",
  "Instagram",
  "Family & Friends",
  "Word of Mouth",
  "Brand / Store Reference",
  "Our Store Hoardings",
  "Others",
] as const;

export const CONTACT_FAQ_ITEMS = [
  {
    q: "How long does a restoration usually take?",
    a: "Most restoration projects are completed within 7–15 business days, depending on the condition, materials, and level of craftsmanship required.",
  },
  {
    q: "Can you restore luxury brands?",
    a: "Yes. We specialize in restoring premium articles like sneakers, handbags, and leather goods, sofa & car restoration from leading luxury brands using professional restoration techniques.",
  },
  {
    q: "Do you offer doorstep pickup and delivery?",
    a: "Yes. We provide secure pickup and delivery services across Delhi, Lucknow & Kanpur, making it easy to restore your favorite pieces from anywhere.",
  },
  {
    q: "Can heavily damaged leather be restored?",
    a: "Many damaged items can be significantly revived after a detailed assessment. Our team will recommend the most suitable restoration approach before work begins.",
  },
  {
    q: "How do I request a restoration quote?",
    a: "Simply send us clear photos through our contact form or WhatsApp. We'll review your item and share a personalized recommendation and estimate.",
  },
  {
    q: "Do you provide franchise opportunities?",
    a: "Yes. Sneakcure offers franchise partnerships and professional training programs for entrepreneurs interested in building a premium restoration business.",
  },
  {
    q: "What types of products do you restore?",
    a: "We restore sneakers, leather shoes, luxury handbags, wallets, belts, jackets, and other premium leather accessories.",
  },
  {
    q: "Is my item insured during shipping?",
    a: "We use trusted logistics partners and secure packaging to ensure your item is handled with the highest level of care throughout the restoration journey.",
  },
] as const;

export const SERVICE_CITIES = ["Delhi", "Lucknow", "Kanpur"] as const;

export const FRANCHISE_HOME_IMAGE = "/franchise/atelier-neon-bg.png";

export const FRANCHISE_TERRITORIES = [
  {
    city: "Delhi",
    detail: "NCR · Headquarters",
    phone: "+91 9555213651",
    phoneHref: "919555213651",
  },
  {
    city: "Lucknow",
    detail: "Gomti Nagar · Flagship",
    phone: "+91 9170775506",
    phoneHref: "919170775506",
  },
  {
    city: "Kanpur",
    detail: "UP · Open",
    phone: "+91 9170775506",
    phoneHref: "919170775506",
  },
] as const;

/** Franchise page — exclusive territory cards */
export const FRANCHISE_EXCLUSIVE_TERRITORIES = [
  {
    name: "Delhi",
    status: "Headquarters",
    statusClass: "bg-primary-black text-white",
    desc: "Home to Sneakcure's central headquarters, large-scale restoration workshop, and operations center. This facility powers franchise training, quality control, product development, and nationwide support.",
    image: "/franchise/delhi.jpg",
  },
  {
    name: "Lucknow",
    status: "Company-Owned Store",
    statusClass: "bg-primary-black/90 text-white",
    desc: "Our fully operational Sneakcure store serves customers with premium shoe and leather restoration. Experience our service standards, customer journey, and business model in action.",
    image: "/franchise/lucknow.jpg",
  },
  {
    name: "Kanpur",
    status: "Company-Owned Store",
    statusClass: "bg-primary-black/90 text-white",
    desc: "An established Sneakcure store built on the same premium systems and craftsmanship. A live demonstration of the operational excellence every franchise partner receives.",
    image: "/franchise/kanpur.jpg",
  },
] as const;

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training & Consultation", href: "/training" },
  { label: "Get Franchise", href: "/franchise" },
  { label: "Founder Story", href: "/founder" },
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
  name: "Ajit Yadav",
  title: "Founder & Atelier Director",
  location: "Delhi, India",
  image: "/founder/ajit-yadav-portrait.jpg",
  tagline: "Restoring exceptional footwear instead of replacing it.",
  intro:
    "Sneakcure was founded in 2020 by Ajit Yadav with a simple vision to restore exceptional footwear instead of replacing it. What started as a small workshop in Lucknow has grown into a trusted luxury leather atelier, professional training academy, and expanding franchise network, driven by craftsmanship, precision, and a commitment to preserving every piece with the care it truly deserves.",
} as const;

export const FOUNDER_STORY = [
  {
    title: "The spark",
    body: "Ajit Yadav grew up surrounded by sneaker culture — collecting, trading, and eventually watching pairs he loved age beyond repair. Local cleaners would shrink suede, strip paint, or rush jobs that deserved patience. He started experimenting on his own pairs at home, studying material guides and watching atelier videos from Europe and Japan until he could revive what others wrote off.",
  },
  {
    title: "The first bench",
    body: "In 2018, he rented a small studio space in Gomti Nagar, Lucknow — one bench, a rack of brushes, and a desk lamp for inspection. Word spread through friends and local collectors. The first paid job was a pair of oxidized Air Jordans; the client returned with three more pairs and a leather wallet. That was the moment Sneakcure stopped being a side project and became a standard.",
  },
  {
    title: "Building the house",
    body: "As demand grew, Ajit Yadav refused to scale by cutting corners. Every piece received a written protocol: material mapping, before photos, stage updates, and final QC under studio lighting. He hired slowly — prioritizing hand skill and respect for the culture over speed. Leather goods, bags, and patina work followed naturally as clients trusted the atelier with more than sneakers.",
  },
  {
    title: "Academy & franchise",
    body: "By 2022, collectors and stylists across India were shipping pieces to Lucknow. Ajit Yadav launched the Sneakcure Training Academy so the craft could outlive one studio, and began developing franchise systems to bring the same standard to new cities — with SOPs, supply chains, and on-site mentorship built in from day one.",
  },
] as const;

export const FOUNDER_MEMBERS = [
  {
    name: "Ajit Yadav",
    role: "Founder & Atelier Director",
    joined: "2018",
    bio: "Sets the restoration standard, leads material R&D, and mentors every new artisan through the Sneakcure protocol.",
    image: "/founder/ajit-yadav-portrait.jpg",
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
    bio: "Former hospitality operator. Designed the training curriculum and partner onboarding playbook as Sneakcure expanded beyond Lucknow.",
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
    title: "Sneakcure is born",
    body: "Opened the first atelier bench in Gomti Nagar, Lucknow. Named the house Sneakcure — sneaker care elevated to a cure, not a quick clean.",
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
    body: "Franchise partnerships in new cities, 500+ students trained, and 12,000+ pieces restored under the Sneakcure standard.",
  },
] as const;

export const SERVICE_PAGES = [
  {
    slug: "luxury-sneaker-restoration",
    title: "Sneaker",
    tagline: "Professional restoration for premium sneakers.",
    shortDesc:
      "Deep cleaning, sole whitening, color restoration, stitching repair, suede care, and complete restoration to bring your favorite sneakers back to their finest condition.",
    homeAccent: "Every detail. Every finish. Perfectly restored.",
    image: serviceImage(0),
    overview:
      "Every restoration begins with a detailed inspection and ends with careful craftsmanship, ensuring your sneakers look their best while preserving their original character.",
    process: [
      "Complete Inspection & Assessment",
      "Deep Cleaning & Sole Care",
      "Leather, Suede & Color Restoration",
      "Stitching, Repair & Protection",
      "Final Quality Check & Premium Packaging",
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
    tagline: "Professional care for your everyday luxury.",
    shortDesc:
      "Cleaning, leather conditioning, color restoration, edge repair, and hardware polishing to restore the beauty and elegance of premium bags and wallets.",
    homeAccent: "Every detail. Every texture. Beautifully preserved.",
    image: serviceImage(1),
    overview:
      "Every bag and wallet is restored with expert craftsmanship and premium products, helping preserve its beauty, functionality, and value for years to come.",
    process: [
      "Complete Condition Assessment",
      "Gentle Deep Cleaning",
      "Leather Conditioning & Nourishment",
      "Color & Edge Restoration",
      "Hardware Polishing & Protection",
    ],
    pricing: [
      { tier: "Wallet Care", price: "₹999+", note: "Clean & condition" },
      { tier: "Handbag Refresh", price: "₹2,499+", note: "Full exterior care" },
      { tier: "Archive Restore", price: "₹5,999+", note: "Deep restoration" },
    ],
    faqs: [
      { q: "Can you fix corner wear?", a: "Yes — we recolor and rebuild worn edges with matched pigments." },
      { q: "Is pickup available?", a: "White-glove pickup available in Delhi, Lucknow, and Kanpur." },
    ],
  },
  {
    slug: "leather-jacket-accessories-restoration",
    title: "Jacket & Accessories",
    tagline: "Restore timeless leather with expert care.",
    shortDesc:
      "Professional cleaning, color restoration, conditioning, repair, and protection for leather jackets, belts, wallets, watch straps, and premium accessories.",
    homeAccent: "Every detail. Every finish. Expertly restored.",
    image: serviceImage(2),
    overview:
      "Every leather piece is carefully restored using premium techniques and materials, helping preserve its natural character, comfort, and elegance for years to come.",
    process: [
      "Material Inspection & Assessment",
      "Deep Cleaning & Leather Care",
      "Color Restoration & Repair",
      "Conditioning & Protection",
      "Final Quality Inspection",
    ],
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
    title: "Sofa Cleaning",
    tagline: "Expert care for luxury seating.",
    shortDesc:
      "Deep cleaning, stain removal, leather conditioning, fabric care, and color restoration for premium sofas, recliners, and upholstered furniture.",
    homeAccent: "Every fabric. Every finish. Beautifully renewed.",
    image: serviceImage(3),
    overview:
      "Every sofa is treated with specialized restoration techniques and premium care products to restore comfort, preserve materials, and maintain its elegant appearance for years to come.",
    process: [
      "Material Inspection",
      "Fabric & Leather Testing",
      "Deep Cleaning & Stain Removal",
      "Color Restoration & Conditioning",
      "Final Protection & Quality Check",
    ],
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
    slug: "patina-work",
    title: "Customization/Patina Artwork",
    tagline: "Handcrafted finishes with timeless character.",
    shortDesc:
      "Custom hand-painted patina, leather dyeing, antique effects, and bespoke color artistry for luxury shoes, bags, and leather accessories.",
    homeAccent: "Every detail. Every finish. Uniquely handcrafted.",
    image: productImage(5),
    overview:
      "Each patina is created entirely by hand using premium leather dyes and traditional artisan techniques, transforming every piece into a one-of-a-kind expression of craftsmanship and individuality.",
    process: [
      "Design Consultation",
      "Surface Preparation",
      "Hand-Dyed Color Layers",
      "Burnishing & Finishing",
      "Final Quality Inspection",
    ],
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
  {
    slug: "car-leather-customization",
    title: "Leather Care",
    tagline: "Premium leather care for interiors and goods.",
    shortDesc:
      "Leather conditioning, color matching, seat restoration, steering wrap, and refinishing for automotive interiors and luxury leather goods.",
    homeAccent: "Every detail. Every finish. Expertly cared for.",
    image: serviceImage(4),
    overview:
      "Every leather surface is treated with precision techniques and premium materials — restoring comfort, color, and longevity across car interiors and atelier leather care.",
    process: [
      "Inspection & Planning",
      "Surface Preparation",
      "Color Matching & Conditioning",
      "Repair & Finishing",
      "Protection & Final Inspection",
    ],
    pricing: [
      { tier: "Conditioning", price: "₹1,999+", note: "Clean & nourish" },
      { tier: "Panel Restore", price: "₹4,999+", note: "Recolor & repair" },
      { tier: "Full Care", price: "Custom", note: "Consultation required" },
    ],
    faqs: [
      { q: "Do you work on car interiors?", a: "Yes — seats, steering wheels, panels, and full interior leather care." },
      { q: "Will the color fade?", a: "We use UV-stable finishes designed for lasting color and protection." },
    ],
  },
] as const;

export type ServicePage = (typeof SERVICE_PAGES)[number];

export const SERVICE_NAV = [
  { label: "Sneaker", href: "/services/luxury-sneaker-restoration" },
  { label: "Bags & Wallets Care", href: "/services/bags-wallets-care" },
  { label: "Jacket & Accessories", href: "/services/leather-jacket-accessories-restoration" },
  { label: "Sofa Cleaning", href: "/services/premium-sofa-cleaning-restoration" },
  { label: "Customization/Patina Artwork", href: "/services/patina-work" },
  { label: "Leather Care", href: "/services/car-leather-customization" },
] as const;

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
  "Proven Sneakcure brand & SOPs",
  "Hands-on training & certification",
  "Marketing & social media playbooks",
  "Ongoing product supply support",
  "Territory guidance & launch assistance",
] as const;

export const SHARED_TESTIMONIALS = [
  { quote: "They resurrected my Travis fragments. Factory-new soles and suede nap.", name: "Marcus L.", role: "Collector · Lucknow" },
  { quote: "Our atelier ships runway samples here. Sneakcure is the only team we trust.", name: "Elena V.", role: "Creative Director" },
  { quote: "Cinematic turnaround, white-glove service. Apple-level care for sneakers.", name: "Jordan K.", role: "Stylist · Delhi" },
] as const;

export const ABOUT_GALLERY = PRODUCT_IMAGES.slice(0, 6);
export const FOUNDER_GALLERY = [
  "/founder/ajit-yadav-portrait.jpg",
  "/founder/ajit-yadav-workshop.jpg",
  "/founder/ajit-yadav-atelier.jpg",
] as const;

/** Founder page imagery — Ajit Yadav atelier photography */
export const FOUNDER_MEDIA = {
  portrait: "/founder/ajit-yadav-portrait.jpg",
  workspace: "/founder/ajit-yadav-workshop.jpg",
  studio: "/founder/ajit-yadav-workshop.jpg",
  process: "/founder/ajit-yadav-atelier.jpg",
  reel: "/founder/founderreel.mp4",
} as const;

export const SERVICE_BEFORE_AFTER = BEFORE_AFTER;
