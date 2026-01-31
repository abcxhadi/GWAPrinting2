export const categories = [
  {
    id: "business-essentials",
    name: "Business Essentials",
    icon: "💼",
    color: "cyan",
    description: "Core items for professional identity and operations",
    subcategories: [
      "Business Cards",
      "PVC/NFC Cards",
      "Letterheads",
      "Receipt Vouchers",
      "Stamps",
      "Uniforms",
      "Name Badges",
      "Self Ink Stamp",
    ],
  },
  {
    id: "cards-invitations",
    name: "Cards & Invitations",
    icon: "✉️",
    color: "orange",
    description: "For every personal and professional announcement",
    subcategories: ["Birthday Cards", "Invitation Cards", "Greeting Cards"],
  },
  {
    id: "marketing-materials",
    name: "Marketing Materials",
    icon: "📈",
    color: "cyan",
    description: "Tools to amplify your brand's message",
    subcategories: ["Stickers & Labels", "Flyers & Brochures", "Paper Bags", "Flex Printing"],
  },
  {
    id: "packaging-solutions",
    name: "Packaging Solutions",
    icon: "📦",
    color: "orange",
    description: "Custom solutions for product presentation and protection",
    subcategories: [
      "Paper Packaging",
      "Boxes",
      "Mailers",
      "Specialty Boxes",
      "Accessories",
      "Eco Packaging",
    ],
  },
  {
    id: "apparel-accessories",
    name: "Apparel & Accessories",
    icon: "👚",
    color: "cyan",
    description: "Wearable branding and stylish accessories",
    subcategories: ["T-Shirts", "Hoodies", "Bags", "Labels", "Caps", "Screen Printing"],
  },
  {
    id: "gifts-promotional",
    name: "Gifts & Promotional Items",
    icon: "🎁",
    color: "orange",
    description: "Memorable items for lasting impressions",
    subcategories: ["Pens & Diaries", "Drinkware", "Lanyards", "Desk Items", "Calendars", "Mementos & Prizes", "Engraving"],
  },
  {
    id: "signage-event-displays",
    name: "Signage & Event Displays",
    icon: "📍",
    color: "cyan",
    description: "Visual communication for spaces and events",
    subcategories: [
      "Signboard / Signage",
      "Nameplate",
      "Lightbox Signage",
      "Self Standing",
      "Direction Signage",
      "Flags",
      "Rollup/ Standees",
      "Backdrop Signage",
      "Exhibition & Events",
      "Shell Scheme Booths",
      "Event Props",
      "Foam Boards",
      "Office Branding",
      "Wallpaper",
      "Vehicle Branding",
    ],
  },
];

export const sampleProducts = [];
let productId = 1;
categories.forEach((category) => {
  category.subcategories.forEach((sub) => {
    const slug = sub
      .toLowerCase()
      .replace(/ \/ /g, "-")
      .replace(/[^a-z0-9-\s]/g, "")
      .replace(/\s+/g, "-");
    sampleProducts.push({
      id: productId++,
      name: `${sub}`,
      category: category.id,
      subcategory: sub,
      image: `/images/${slug}.jpg`, // URL-friendly image path
      price: "Price varies depending on quantity",
      badge: "NEW",
      rating: 4.5,
    });
  });
});