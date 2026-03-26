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
    { name: "Ray Nicholls", rating: 5, text: "We engaged Mark and his team at Surrey Hills Landscaping to construct a patio and paths running both sides of our house. He did a fantastic job, and we are extremely pleased with the result. We communicated regularly, which I felt was …  ", date: "7 years ago" },
    { name: "Cammie Czuchnicki", rating: 5, text: "A hard working and professional landscaping team who are a pleasure to work alongside. I have enjoyed planting up some of some of their fabulous gardens. Highly recommend.  ", date: "2 years ago" },
    { name: "Jim Sheather", rating: 5, text: "I can highly recommend Mark and his team at Surrey Hills Landscaping. They provided ideas and completely transformed our garden with a great new patio. The quality of work was excellent, and was completed within the timeframes anticipated. I wouldn't", date: "7 years ago" },
    { name: "Tabitha Northrup", rating: 5, text: "The team at Surrey Hills Landscapes are professional and knowledgeable and just as importantly, friendly and approachable.  They always offer excellent design advice and deliver a really flawless and unique result.  They also delivered on time and on", date: "3 years ago" },
    { name: "Rachel Hahn", rating: 5, text: "This was an extremely happy experience. From quote to completion was reliable, friendly, cost effective and a pleasure to have the team on site. We have a beautiful terrace that has transformed our garden. I recommend Mark and his team wholeheartedly", date: "4 years ago" },
    { name: "Kieran Mccloud", rating: 5, text: "What a pleasure.  Surrey Hills Landscaping were fantastic from start to finish and can't recommend them highly enough.  From design to completion, the Surrey Hills team were professional and friendly with superb workmanship.  A great experience, an o", date: "Edited 8 years ago" },
    { name: "Tim Moxon", rating: 5, text: "We used Surrey Hills Landscaping to do a number of renovations to our outdoor areas including some paving, building a wall and building a shed. They were very creative, coming up with ideas and implementing our plans better than we'd …  ", date: "13 years ago" },
    { name: "David Atkinson", rating: 5, text: "I can only offer a review of my contact with this company as they never actually carried out any work. I emailed to discuss a quote …  ", date: "Edited 7 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Surrey Hills Landscapes | Landscaper in Godalming",
    description: "Professional landscaper in Godalming. 5.0-star rated on Google. Call for a free quote.",
  },
};
