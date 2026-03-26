export const client = {
  // Business Details
  name: "Surrey Hills Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Godalming.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01483 361100",
  email: "",
  website: "",

  // Location
  address: "Godalming",
  city: "Godalming",
  county: "",
  postcode: "",
  basedIn: "Godalming",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Philip Goldenberg", rating: 5, text: "Within a week from first contact, our grotty blackened patio had become a stunning vista of beauty.  The workmen were ultra-efficient, pleasant and tidy.  Absolutely recommended.  Philip Goldenberg", date: "a year ago" },
    { name: "Lewis Milford", rating: 5, text: "Mark and his team at Surrey Hills Landscapes did an incredible job transforming our outdoor spaces. They rebuilt our front steps, laid a stunning new patio, and installed some beautifully crafted balustrades. The attention to detail in their work was truly exceptional, and the quality of the finish speaks for itself—it’s flawless.  What really stood out was how Mark and his team went above and beyond at every stage. From helping us choose the best materials to ensuring everything was completed to the highest standard, they exceeded all expectations. They were professional, tidy, and genuinely cared about making sure we were happy with the results.  I can’t recommend Surrey Hills Landscapes highly enough! If you’re looking for meticulous craftsmanship and a team that genuinely takes pride in their work, Mark is the person to call. Thank you so much for making our vision a reality!", date: "a year ago", badge: "Local Guide" },
    { name: "Marcel Costa", rating: 5, text: "Excellent service, very friendly and professional. Would definitely recommend.", date: "a year ago" },
    { name: "Bernard Howes", rating: 5, text: "Right from the start I could see that this was a company that cares about its work and that was very reassuring. The workmanship and end result couldn't have been better. A gem of a company!", date: "2 years ago" },
    { name: "Cammie Czuchnicki", rating: 5, text: "A hard working and professional landscaping team who are a pleasure to work alongside. I have enjoyed planting up some of some of their fabulous gardens. Highly recommend.", date: "2 years ago", badge: "Local Guide" },
    { name: "Tabitha Northrup", rating: 5, text: "The team at Surrey Hills Landscapes are professional and knowledgeable and just as importantly, friendly and approachable.  They always offer excellent design advice and deliver a really flawless and unique result.  They also delivered on time and on budget. Highly recommended.", date: "3 years ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Surrey Hills Landscapes | Landscaper in Godalming",
    description: "Professional landscaper in Godalming. 5.0-star rated on Google. Call for a free quote.",
  },
};
