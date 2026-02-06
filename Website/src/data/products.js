export const categories = [
  {
    id: "offset-printed-products",
    name: "Offset Printed Products",
    icon: "🖨️",
    color: "blue",
    description: "High-quality products produced with traditional offset printing methods.",
    printingMethod: "offset",
    subcategories: [
      {
        id: "business-cards",
        name: "Business Cards",
        icon: "💳",
        description: "Standard business cards",
        printingMethod: "offset",
        products: [
          { id: "matt-lamination-350gsm", name: "Business Card - Matt Lamination 350gsm" },
          { id: "matt-lamination-400gsm", name: "Business Card - Matt Lamination 400gsm" },
          { id: "glossy-lamination-400gsm", name: "Business Card - Glossy Lamination 400gsm" },
          { id: "art-paper-(without-lamination)-400gsm", name: "Business Card - Art Paper (Without Lamination) 400gsm" },
        ],
      },
      {
        id: "premium-business-cards",
        name: "Premium Business Cards",
        icon: "💎",
        description: "Specialty business cards with unique finishes",
        printingMethod: "offset",
        products: [
          { id: "rounded-corner-spot-uv-matt-lamination-400gsm", name: "Business Card - Rounded Corner Spot UV Matt Lamination 400gsm" },
          { id: "rounded-corner-matt-lamination-400gsm", name: "Business Card - Rounded Corner Matt Lamination 400gsm" },
          { id: "rounded-corner-spot-uv-velvet-lamination-760mic", name: "Rounded Corner Spot UV Velvet Lamination 760mic" },
          { id: "spot-uv-matt-lamination-400gsm", name: "Business Card - Spot UV Matt Lamination 400gsm" },
          { id: "rounded-corner-gold-foil-spot-uv-velvet-lamination-760mic", name: "Rounded Corner Gold Foil Spot UV Velvet Lamination 760mic" },
          { id: "rounded-corner-glossy-lamination-400gsm", name: "Business Card - Rounded Corner Glossy Lamination 400gsm" },
          { id: "gold-foil-matt-lamination-400gsm", name: "Business Card - Gold Foil Matt Lamination 400gsm" },
          { id: "gold-foil-spot-uv-matt-lamination-400gsm", name: "Business Card - Gold Foil Spot UV Matt Lamination 400gsm" },
          { id: "rounded-corner-gold-foil-spot-uv-matt-lamination-400gsm", name: "Business Card - Rounded Corner Gold Foil Spot UV Matt Lamination 400gsm" },
          { id: "rounded-corner-pet-glossy-lamination-760mic", name: "Business Card - Rounded Corner PET Glossy Lamination 760mic" },
          { id: "custom-die-cut-matt-lamination-400gsm", name: "Business Card - Custom Die Cut Matt Lamination 400gsm" },
          { id: "custom-die-cut-spot-uv-matt-lamination-400gsm", name: "Business Card - Custom Die Cut Spot UV Matt Lamination 400gsm" },
          { id: "custom-die-cut-gold-foil-spot-uv-matt-lamination-400gsm", name: "Business Card - Custom Die Cut Gold Foil Spot UV Matt Lamination 400gsm" },
          { id: "rounded-corner-gold-foil-matt-lamination-400gsm", name: "Business Card - Rounded Corner Gold Foil Matt Lamination 400gsm" },
          { id: "rounded-corner-gold-foil-pet-glossy-lamination-760mic", name: "Business Card - Rounded Corner Gold Foil PET Glossy Lamination 760mic" },
        ],
      },
      {
        id: "official-commercial-papers",
        name: "Official and Commercial Papers",
        icon: "📄",
        description: "Professional papers for official use",
        printingMethod: "offset",
        products: [
          { id: "letterhead-(wood-free-paper-120gsm)", name: "Letterhead (Wood Free paper 120gsm)" },
          { id: "letterhead-(wood-free-paper-100gsm)", name: "Letterhead (Wood Free paper 100gsm)" },
          { id: "envelope-(wood-free-paper-120gsm)", name: "Envelope (Wood Free paper 120gsm)" },
          { id: "envelope-(wood-free-paper-100gsm)", name: "Envelope (Wood Free paper 100gsm)" },
        ],
      },
      {
        id: "brochures",
        name: "Brochures",
        icon: "📰",
        description: "Informative and promotional brochures",
        printingMethod: "offset",
        products: [
          { id: "brochure-real-size-(glossy-paper-170gsm)", name: "Brochure Real Size (Glossy paper 170gsm)" },
          { id: "brochure-(glossy-paper-170gsm)", name: "Brochure (Glossy paper 170gsm)" },
          { id: "brochure-b4-(glossy-paper-170gsm)", name: "Brochure B4 (Glossy paper 170gsm)" },
          { id: "brochure-(glossy-paper-135gsm)", name: "Brochure (Glossy paper 135gsm)" },
          { id: "brochure-real-size-(glossy-paper-135gsm)", name: "Brochure Real Size (Glossy paper 135gsm)" },
          { id: "brochure-(glossy-paper-115gsm)", name: "Brochure (Glossy paper 115gsm)" },
          { id: "brochure-real-size-(glossy-paper-115gsm)", name: "Brochure Real Size (Glossy paper 115gsm)" },
          { id: "brochure-(wood-free-paper-100gsm)", name: "Brochure (Wood Free paper 100gsm)" },
          { id: "brochure-real-size-(woodfree-paper-100gsm)", name: "Brochure Real Size (Woodfree paper 100gsm)" },
          { id: "brochure-b4-(glossy-paper-135gsm)", name: "Brochure B4 (Glossy paper 135gsm)" },
          { id: "brochure-b4-(glossy-paper-115gsm)", name: "Brochure B4 (Glossy paper 115gsm)" },
          { id: "brochure-b4-(wood-free-paper-100gsm)", name: "Brochure B4 (Wood Free paper 100gsm)" },
          // New Brochure Products
        ],
      },
      {
        id: "flyers",
        name: "Flyers",
        icon: "🪶",
        description: "Effective marketing flyers",
        printingMethod: "offset",
        products: [
          { id: "flyer-real-size-(glossy-paper-170gsm)", name: "Flyer Real Size (Glossy paper 170gsm)" },
          { id: "flyer-economy-(glossy-paper-170gsm)", name: "Flyer Economy (Glossy paper 170gsm)" },
          { id: "flyer-economy-(glossy-paper-135gsm)", name: "Flyer Economy (Glossy paper 135gsm)" },
          { id: "flyer-economy-(glossy-paper-115gsm)", name: "Flyer Economy (Glossy paper 115gsm)" },
          { id: "flyer-dl-(glossy-paper-170gsm)", name: "Flyer DL (Glossy paper 170gsm)" },
          { id: "flyer-b4b5-(glossy-paper-170gsm)", name: "Flyer B4\\B5 (Glossy paper 170gsm)" },
          { id: "flyer-economy-(wood-free-paper-100gsm)", name: "Flyer Economy (Wood Free paper 100gsm)" },
          { id: "flyer-real-size-(glossy-paper-200gsm)", name: "Flyer Real Size (Glossy paper 200gsm)" },
          { id: "flyer-real-size-(glossy-paper-115gsm)", name: "Flyer Real Size (Glossy paper 115gsm)" },
          { id: "flyer-dl-(glossy-paper-135gsm)", name: "Flyer DL (Glossy paper 135gsm)" },
          { id: "flyer-b4b5-(glossy-paper-135gsm)", name: "Flyer B4\\B5 (Glossy paper 135gsm)" },
          { id: "flyer-b4b5-(glossy-paper-115gsm)", name: "Flyer B4\\B5 (Glossy paper 115gsm)" },
          // New Flyer Products
        ],
      },
      {
        id: "envelopes",
        name: "Envelopes",
        icon: "✉️",
        description: "Custom printed envelopes",
        printingMethod: "offset",
        products: [
          { id: "envelope-(wood-free-paper-120gsm)", name: "Envelope (Wood Free paper 120gsm)" },
          { id: "envelope-(wood-free-paper-100gsm)", name: "Envelope (Wood Free paper 100gsm)" },
        ],
      },
      {
        id: "table-mat",
        name: "Table Mat",
        icon: "🍽️",
        description: "Custom printed table mats",
        printingMethod: "offset",
        products: [
          { id: "table-mat-4-color-(wood-free-80gsm)", name: "Table Mat - 4 Color (Wood free 80gsm)" },
          { id: "table-mat-4-color-(wood-free-100gsm)", name: "Table Mat - 4 Color (Wood free 100gsm)" },
          { id: "table-mat-4-color-(economy-paper)", name: "Table Mat - 4 Color (Economy Paper)" },
          { id: "table-mat-4-color-(glossy-135gsm)", name: "Table Mat - 4 Color (Glossy 135gsm)" },
          { id: "table-mat-1-or-2-color-(wood-free-80gsm)", name: "Table Mat - 1 or 2 Color (Wood free 80gsm)" },
          { id: "table-mat-4-color-(glossy-90gsm)", name: "Table Mat - 4 Color (Glossy 90gsm)" },
          { id: "table-mat-1-or-2-color-(wood-free-100gsm)", name: "Table Mat - 1 or 2 Color (Wood free 100gsm)" },
          { id: "table-mat-1-or-2-color-(economy-paper)", name: "Table Mat - 1 or 2 Color (Economy Paper)" },
          { id: "table-mat-1-or-2-color-(glossy-135gsm)", name: "Table Mat - 1 or 2 Color (Glossy 135gsm)" },
          { id: "table-mat-1-or-2-color-(glossy-90gsm)", name: "Table Mat - 1 or 2 Color (Glossy 90gsm)" },
        ],
      },
      {
        id: "shopping-bags",
        name: "Shopping Bags",
        icon: "🛍️",
        description: "Custom branded shopping bags",
        printingMethod: "offset",
        products: [
          { id: "kraft-shopping-bag-(white)", name: "Kraft Shopping Bag (White)" },
          { id: "kraft-shopping-bag-(white)-top-fold", name: "Kraft Shopping Bag (White) Top Fold" },
          { id: "kraft-shopping-bag-(brown-virgin)", name: "Kraft Shopping Bag (Brown Virgin)" },
          { id: "kraft-shopping-bag-(brown-recycled)", name: "Kraft Shopping Bag (Brown Recycled)" },
          { id: "kraft-shopping-bag-(brown-virgin)-top-fold", name: "Kraft Shopping Bag (Brown Virgin) Top Fold" },
          { id: "kraft-shopping-bag-(brown-recycled)-top-fold", name: "Kraft Shopping Bag (Brown Recycled) Top Fold" },
        ],
      },
      {
        id: "fast-food-boxes",
        name: "Fast Food Boxes",
        icon: "🍔",
        description: "Custom packaging for fast food",
        printingMethod: "offset",
        products: [
          { id: "fried-chicken-box-(takeaway)-type1", name: "Fried Chicken Box (Takeaway) Type1" },
          { id: "cone-french-fries-box-(takeaway)", name: "Cone French Fries Box (Takeaway)" },
          { id: "fried-chicken-tray-(indoor)", name: "Fried Chicken Tray (indoor)" },
          { id: "simple-burger-box", name: "Simple Burger Box" },
          { id: "french-fries-tray-(indoor)", name: "French Fries Tray (indoor)" },
          { id: "fried-chicken-box-(takeaway)-type2", name: "Fried Chicken Box (Takeaway) Type2" },
          { id: "pearl-burger-box-sml", name: "Pearl Burger Box - S/M/L" },
        ],
      },
      {
        id: "die-cut-products",
        name: "Die-Cut Products",
        icon: "✂️",
        description: "Products with custom shapes and cuts",
        printingMethod: "offset",
        products: [
          { id: "custom-die-cut-sticker-glossy-lamination-80gsm", name: "Custom Die Cut Sticker Glossy Lamination 80gsm" },
          { id: "door-hanger-(glossy-170gsm)", name: "Door Hanger (Glossy 170gsm)" },
          { id: "door-hanger-cane-design-(matt-lamination-350gsm)", name: "Door Hanger Cane Design (Matt Lamination 350gsm)" },
          { id: "fridge-magnet-(normal-custom-die-cut)", name: "Fridge Magnet (Normal & Custom Die Cut)" },
          { id: "business-card-box", name: "Business Card Box" },
          { id: "door-hanger-(matt-lamination-350gsm)", name: "Door Hanger (Matt Lamination 350gsm)" },
          { id: "door-hanger-rounded-corner-design-(matt-lamination-350gsm)", name: "Door Hanger Rounded Corner Design (Matt Lamination 350gsm)" },
          { id: "door-hanger-butterfly-design(matt-lamination-350gsm)", name: "Door Hanger Butterfly Design (Matt Lamination 350gsm)" },
        ],
      },
      {
        id: "paper-cups",
        name: "Paper Cups",
        icon: "🥤",
        description: "Branded paper cups for events and businesses",
        printingMethod: "offset",
        products: [
          { id: "paper-cup-8oz-(240cc)-double-wall", name: "Paper Cup 8oz (240cc) - Double Wall" },
          { id: "paper-cup-4oz-(120cc)-double-wall", name: "Paper Cup 4oz (120cc) - Double Wall" },
        ],
      },
      {
        id: "stickers",
        name: "Stickers",
        icon: "🏷️",
        description: "Versatile stickers for branding and decoration",
        printingMethod: "offset",
        products: [
          { id: "sticker-glossy-lamination-80gsm", name: "Sticker Glossy Lamination 80gsm" },
          { id: "custom-die-cut-sticker-glossy-lamination-80gsm", name: "Custom Die Cut Sticker Glossy Lamination 80gsm" },
          { id: "sticker-without-lamination-(8x12-cm)", name: "Sticker Without Lamination (8x12 cm)" },
          { id: "sticker-without-lamination-(23x17-cm)", name: "Sticker Without Lamination (23x17 cm)" },
          { id: "custom-die-cut-gold-foil-sticker-glossy-lamination-80gsm", name: "Custom Die Cut Gold Foil Sticker Glossy Lamination 80gsm" },
          { id: "gold-foil-sticker-glossy-lamination-80gsm", name: "Gold Foil Sticker Glossy Lamination 80gsm" },
        ],
      },
      {
        id: "menus",
        name: "Menus",
        icon: "📜",
        description: "Custom designed restaurant menus",
        printingMethod: "offset",
        products: [
          { id: "menu-(matt-lamination-350gsm)", name: "Menu (Matt Lamination 350gsm)" },
          { id: "menu-(glossy-lamination-350gsm)", name: "Menu (Glossy Lamination 350gsm)" },
        ],
      },
      {
        id: "bill-books",
        name: "Bill Books",
        icon: "🧾",
        description: "NCR and custom bill books",
        printingMethod: "offset",
        products: [
          { id: "bill-book-ncr", name: "Bill Book NCR" },
        ],
      },
      {
        id: "car-mats",
        name: "Car Mats",
        icon: "🚗",
        description: "Branded car mats for dealerships and promotions",
        printingMethod: "offset",
        products: [
          { id: "car-mat-1-or-2-color-(wood-free-80gsm)", name: "Car Mat - 1 or 2 Color (Wood free 80gsm)" },
          { id: "car-mat-4-color-(wood-free-80gsm)", name: "Car Mat - 4 Color (Wood free 80gsm)" },
          { id: "car-mat-4-color-(wood-free-100gsm)", name: "Car Mat - 4 Color (Wood free 100gsm)" },
          { id: "car-mat-1-or-2-color-(economy-paper)", name: "Car Mat - 1 or 2 Color (Economy Paper)" },
          { id: "car-mat-1-or-2-color-(wood-free-100gsm)", name: "Car Mat - 1 or 2 Color (Wood free 100gsm)" },
          { id: "car-mat-4-color-(glossy-135gsm)", name: "Car Mat - 4 Color (Glossy 135gsm)" },
          { id: "car-mat-1-or-2-color-(glossy-135gsm)", name: "Car Mat - 1 or 2 Color (Glossy 135gsm)" },
          { id: "car-mat-4-color-(economy-paper)", name: "Car Mat - 4 Color (Economy Paper)" },
          { id: "car-mat-1-or-2-color-(glossy-90gsm)", name: "Car Mat - 1 or 2 Color (Glossy 90gsm)" },
          { id: "car-mat-4-color-(glossy-90gsm)", name: "Car Mat - 4 Color (Glossy 90gsm)" },
        ],
      },
    ],
  },
  {
    id: "other-printing-specialty-services",
    name: "Other Printing & Specialty Services",
    icon: "✨",
    color: "purple",
    description: "A wide range of specialized printing and unique product offerings.",
    printingMethod: "other",
    subcategories: [
      {
        id: "business-essentials-other",
        name: "Business Essentials",
        icon: "💼",
        color: "cyan",
        description: "Core items for professional identity and operations (non-offset)",
        products: [
          { id: "pvc-nfc-cards", name: "PVC/NFC Cards", printingMethod: "other" },
          { id: "stamps", name: "Stamps", printingMethod: "other" },
          { id: "uniforms", name: "Uniforms", printingMethod: "other" },
          { id: "name-badges", name: "Name Badges", printingMethod: "other" },
          { id: "self-ink-stamp", name: "Self Ink Stamp", printingMethod: "other" },
        ],
      },
      {
        id: "cards-invitations-other",
        name: "Cards & Invitations",
        icon: "✉️",
        color: "orange",
        description: "For every personal and professional announcement (non-offset)",
        products: [
          { id: "birthday-cards", name: "Birthday Cards", printingMethod: "other" },
          { id: "invitation-cards", name: "Invitation Cards", printingMethod: "other" },
          { id: "greeting-cards", name: "Greeting Cards", printingMethod: "other" },
        ],
      },
      {
        id: "marketing-materials-other",
        name: "Marketing Materials",
        icon: "📈",
        color: "cyan",
        description: "Tools to amplify your brand's message (non-offset)",
        products: [
          { id: "flex-printing", name: "Flex Printing", printingMethod: "other" },
        ],
      },
      {
        id: "packaging-solutions-other",
        name: "Packaging Solutions",
        icon: "📦",
        color: "orange",
        description: "Custom solutions for product presentation and protection (non-offset)",
        products: [
          { id: "paper-packaging", name: "Paper Packaging", printingMethod: "other" },
          { id: "mailers", name: "Mailers", printingMethod: "other" },
          { id: "specialty-boxes", name: "Specialty Boxes", printingMethod: "other" },
          { id: "accessories", name: "Accessories", printingMethod: "other" },
          { id: "eco-packaging", name: "Eco Packaging", printingMethod: "other" },
        ],
      },
      {
        id: "apparel-accessories-other",
        name: "Apparel & Accessories",
        icon: "👚",
        color: "cyan",
        description: "Wearable branding and stylish accessories",
        products: [
          { id: "t-shirts", name: "T-Shirts", printingMethod: "other" },
          { id: "hoodies", name: "Hoodies", printingMethod: "other" },
          { id: "bags", name: "Bags", printingMethod: "other" },
          { id: "labels", name: "Labels", printingMethod: "other" },
          { id: "caps", name: "Caps", printingMethod: "other" },
          { id: "screen-printing", name: "Screen Printing", printingMethod: "other" },
        ],
      },
      {
        id: "gifts-promotional-other",
        name: "Gifts & Promotional Items",
        icon: "🎁",
        color: "orange",
        description: "Memorable items for lasting impressions",
        products: [
          { id: "pens-diaries", name: "Pens & Diaries", printingMethod: "other" },
          { id: "drinkware", name: "Drinkware", printingMethod: "other" },
          { id: "lanyards", name: "Lanyards", printingMethod: "other" },
          { id: "desk-items", name: "Desk Items", printingMethod: "other" },
          { id: "calendars", name: "Calendars", printingMethod: "other" },
          { id: "mementos-prizes", name: "Mementos & Prizes", printingMethod: "other" },
          { id: "engraving", name: "Engraving", printingMethod: "other" },
        ],
      },
      {
        id: "signage-event-displays-other",
        name: "Signage & Event Displays",
        icon: "📍",
        color: "cyan",
        description: "Visual communication for spaces and events",
        products: [
          { id: "signboard-signage", name: "Signboard / Signage", printingMethod: "other" },
          { id: "nameplate", name: "Nameplate", printingMethod: "other" },
          { id: "lightbox-signage", name: "Lightbox Signage", printingMethod: "other" },
          { id: "self-standing", name: "Self Standing", printingMethod: "other" },
          { id: "direction-signage", name: "Direction Signage", printingMethod: "other" },
          { id: "flags", name: "Flags", printingMethod: "other" },
          { id: "rollup-standees", name: "Rollup/ Standees", printingMethod: "other" },
          { id: "backdrop-signage", name: "Backdrop Signage", printingMethod: "other" },
          { id: "exhibition-events", name: "Exhibition & Events", printingMethod: "other" },
          { id: "shell-scheme-booths", name: "Shell Scheme Booths", printingMethod: "other" },
          { id: "event-props", name: "Event Props", printingMethod: "other" },
          { id: "foam-boards", name: "Foam Boards", printingMethod: "other" },
          { id: "office-branding", name: "Office Branding", printingMethod: "other" },
          { id: "vehicle-branding", name: "Vehicle Branding", printingMethod: "other" },
        ],
      },
    ],
  },
];

export const sampleProducts = [];
let productId = 1;

const turnaroundBySlug = {
  "matt-lamination-350gsm": "1 Business Day",
  "matt-lamination-400gsm": "1 Business Day",
  "glossy-lamination-400gsm": "4 Business Days",
  "art-paper-(without-lamination)-400gsm": "3 Business Days",
  "rounded-corner-spot-uv-matt-lamination-400gsm": "2 Business Days",
  "rounded-corner-matt-lamination-400gsm": "2 Business Days",
  "rounded-corner-spot-uv-velvet-lamination-760mic": "5 Business Days",
  "spot-uv-matt-lamination-400gsm": "2 Business Days",
  "rounded-corner-gold-foil-spot-uv-velvet-lamination-760mic-": "5 Business Days",
  "rounded-corner-gold-foil-spot-uv-velvet-lamination-760mic": "5 Business Days",
  "rounded-corner-glossy-lamination-400gsm": "4 Business Days",
  "gold-foil-matt-lamination-400gsm": "4 Business Days",
  "rounded-corner-pet-glossy-lamination-760mic": "6 Business Days",
  "custom-die-cut-matt-lamination-400gsm": "4 Business Days",
  "custom-die-cut-spot-uv-matt-lamination-400gsm": "4 Business Days",
  "rounded-corner-gold-foil-matt-lamination-400gsm": "4 Business Days",
  "rounded-corner-gold-foil-pet-glossy-lamination-760mic": "6 Business Days",
  "rounded-corner-gold-foil-spot-uv-matt-lamination-400gsm": "4 Business Days",
  "gold-foil-spot-uv-matt-lamination-400gsm": "4 Business Days",
  "custom-die-cut-gold-foil-spot-uv-matt-lamination-400gsm": "4 Business Days",
  "letterhead-(wood-free-paper-120gsm)": "2 Business Days",
  "letterhead-(wood-free-paper-100gsm)": "2 Business Days",
  "envelope-(wood-free-paper-120gsm)": "5 Business Days",
  "envelope-(wood-free-paper-100gsm)": "5 Business Days",
  "brochure-real-size-(glossy-paper-170gsm)": "2 Business Days",
  "brochure-(glossy-paper-170gsm)": "2 Business Days",
  "brochure-b4-(glossy-paper-170gsm)": "2 Business Days",
  "brochure-(glossy-paper-135gsm)": "2 Business Days",
  "brochure-real-size-(glossy-paper-135gsm)": "2 Business Days",
  "brochure-(glossy-paper-115gsm)": "2 Business Days",
  "brochure-real-size-(glossy-paper-115gsm)": "2 Business Days",
  "brochure-(wood-free-paper-100gsm)": "2 Business Days",
  "brochure-real-size-(woodfree-paper-100gsm)": "2 Business Days",
  "brochure-b4-(glossy-paper-135gsm)": "2 Business Days",
  "brochure-b4-(glossy-paper-115gsm)": "2 Business Days",
  "brochure-b4-(wood-free-paper-100gsm)": "2 Business Days",
  "flyer-real-size-(glossy-paper-170gsm)": "1 Business Day",
  "flyer-economy-(glossy-paper-170gsm)": "2 Business Days",
  "flyer-economy-(glossy-paper-135gsm)": "2 Business Days",
  "flyer-economy-(glossy-paper-115gsm)": "2 Business Days",
  "flyer-dl-(glossy-paper-170gsm)": "2 Business Days",
  "flyer-b4\\b5-(glossy-paper-170gsm)": "2 Business Days",
  "flyer-b4b5-(glossy-paper-170gsm)": "2 Business Days",
  "flyer-economy-(wood-free-paper-100gsm)": "2 Business Days",
  "flyer-real-size-(glossy-paper-200gsm)": "1 Business Day",
  "flyer-real-size-(glossy-paper-115gsm)": "1 Business Day",
  "flyer-dl-(glossy-paper-135gsm)": "2 Business Days",
  "flyer-b4\\b5-(glossy-paper-135gsm)": "2 Business Days",
  "flyer-b4b5-(glossy-paper-135gsm)": "2 Business Days",
  "flyer-b4\\b5-(glossy-paper-115gsm)": "2 Business Days",
  "flyer-b4b5-(glossy-paper-115gsm)": "2 Business Days",
  "flyer-b4\\b5-(wood-free-paper-100gsm)": "2 Business Days",
  "flyer-b4b5-(wood-free-paper-100gsm)": "2 Business Days",
  "flyer-real-size-(glossy-paper-135gsm)": "1 Business Day",
  "flyer-real-size-(woodfree-paper-100gsm)": "1 Business Day",
  "flyer-dl-(glossy-paper-200gsm)": "2 Business Days",
  "flyer-dl-(glossy-paper-115gsm)": "2 Business Days",
  "flyer-dl-(wood-free-paper-100gsm)": "2 Business Days",
  "table-mat-4-color-(wood-free-80gsm)": "2 Business Days",
  "table-mat-4-color-(wood-free-100gsm)": "2 Business Days",
  "table-mat-4-color-(economy-paper)": "2 Business Days",
  "table-mat-4-color-(glossy-135gsm)": "2 Business Days",
  "table-mat-1-or-2-color-(wood-free-80gsm)": "2 Business Days",
  "table-mat-4-color-(glossy-90gsm)": "2 Business Days",
  "table-mat-1-or-2-color-(wood-free-100gsm)": "2 Business Days",
  "table-mat-1-or-2-color-(economy-paper)": "2 Business Days",
  "table-mat-1-or-2-color-(glossy-135gsm)": "2 Business Days",
  "table-mat-1-or-2-color-(glossy-90gsm)": "2 Business Days",
  "kraft-shopping-bag-(white)": "6 Business Days",
  "kraft-shopping-bag-(white)-top-fold": "6 Business Days",
  "kraft-shopping-bag-(brown-virgin)": "6 Business Days",
  "kraft-shopping-bag-(brown-recycled)": "6 Business Days",
  "kraft-shopping-bag-(brown-virgin)-top-fold": "6 Business Days",
  "kraft-shopping-bag-(brown-recycled)-top-fold": "6 Business Days",
  "fried-chicken-box-(takeaway)-type1": "6 Business Days",
  "cone-french-fries-box-(takeaway)": "6 Business Days",
  "fried-chicken-tray-(indoor)": "6 Business Days",
  "simple-burger-box": "6 Business Days",
  "french-fries-tray-(indoor)": "6 Business Days",
  "fried-chicken-box-(takeaway)-type2": "6 Business Days",
  "pearl-burger-box-s/m/l": "6 Business Days",
  "pearl-burger-box-sml": "6 Business Days",
  "custom-die-cut-sticker-glossy-lamination-80gsm": "3 Business Days",
  "door-hanger-(glossy-170gsm)": "3 Business Days",
  "door-hanger-cane-design-(matt-lamination-350gsm)": "3 Business Days",
  "fridge-magnet-(normal-&-custom-die-cut)": "6 Business Days",
  "fridge-magnet-(normal-custom-die-cut)": "6 Business Days",
  "business-card-box": "10 Business Days",
  "door-hanger-(matt-lamination-350gsm)": "3 Business Days",
  "door-hanger-rounded-corner-design-(matt-lamination-350gsm)": "3 Business Days",
  "door-hanger-butterfly-design(matt-lamination-350gsm)": "3 Business Days",
  "paper-cup-8oz-(240cc)-double-wall": "7 Business Days",
  "paper-cup-4oz-(120cc)-double-wall": "7 Business Days",
  "sticker-glossy-lamination-80gsm": "3 Business Days",
  "sticker-without-lamination-(8x12-cm)": "4 Business Days",
  "sticker-without-lamination-(23x17-cm)": "4 Business Days",
  "custom-die-cut-gold-foil-sticker-glossy-lamination-80gsm": "4 Business Days",
  "gold-foil-sticker-glossy-lamination-80gsm": "3 Business Days",
  "menu-(matt-lamination-350gsm)": "3 Business Days",
  "menu-(glossy-lamination-350gsm)": "3 Business Days",
  "bill-book-ncr": "3 Business Days",
  "car-mat-1-or-2-color-(wood-free-80gsm)": "2 Business Days",
  "car-mat-4-color-(wood-free-80gsm)": "2 Business Days",
  "car-mat-4-color-(wood-free-100gsm)": "2 Business Days",
  "car-mat-1-or-2-color-(economy-paper)": "2 Business Days",
  "car-mat-1-or-2-color-(wood-free-100gsm)": "2 Business Days",
  "car-mat-4-color-(glossy-135gsm)": "2 Business Days",
  "car-mat-1-or-2-color-(glossy-135gsm)": "2 Business Days",
  "car-mat-4-color-(economy-paper)": "2 Business Days",
  "car-mat-1-or-2-color-(glossy-90gsm)": "2 Business Days",
  "car-mat-4-color-(glossy-90gsm)": "2 Business Days",
};

const normalizeSlug = (slug) =>
  slug
    .replace(/—/g, "-")
    .replace(/%5C/gi, "\\\\")
    .replace(/&amp;/gi, "&")
    .toLowerCase();

categories.forEach((topCategory) => {
  if (topCategory.id === "offset-printed-products") {
    topCategory.subcategories.forEach((sub) => { // This 'sub' is the category like Business Cards
      sub.products.forEach((product) => { // This 'product' is the specific item like Matt Lamination 350gsm
        let slugDir = sub.name; // Use sub.name directly for directory
        if (slugDir === "Table Mat") {
          slugDir = "Table Mats";
        }
        const imageFileName = product.id; // Match exact filenames in public/images/offsetPrinting
        const imagePath = encodeURI(
          `/images/offsetPrinting/${slugDir}/${imageFileName}.png`,
        );

        sampleProducts.push({
          id: productId++,
          name: product.name,
          topCategoryId: topCategory.id, // e.g., offset-printed-products
          intermediateCategoryId: sub.id, // e.g., business-cards
          productSlugId: product.id, // specific product ID like matt-lamination-350gsm
          printingMethod: sub.printingMethod,
          image: imagePath,
          prices: [], // Initialize an empty array for detailed pricing
          turnaround: turnaroundBySlug[normalizeSlug(product.id)] || "",
          badge: "NEW",
          rating: 4.5,
        });
      });
    });
  } else if (topCategory.id === "other-printing-specialty-services") {
    topCategory.subcategories.forEach((midCategory) => { // This 'midCategory' is like Business Essentials (other)
      midCategory.products.forEach((product) => { // This 'product' is like PVC/NFC Cards
        const slug = product.id;

        let imagePath = `/images/${slug}.jpg`; // Default image path

        if (product.id === "pvc-nfc-cards") {
          imagePath = "/images/pvcnfc-cards.jpg";
        } else if (product.id === "stamps") {
          imagePath = "/images/stamps.jpg";
        } else if (product.id === "self-ink-stamp") {
          imagePath = "/images/self-ink-stamp.jpg";
        } else if (product.id === "uniforms") {
          imagePath = "/images/uniforms.jpg";
        } else if (product.id === "t-shirts") {
          imagePath = "/images/t-shirts.jpg";
        } else if (product.id === "hoodies") {
          imagePath = "/images/hoodies.jpg";
        } else if (product.id === "name-badges") {
          imagePath = "/images/name-badges.jpg";
        } else if (product.id === "birthday-cards") {
          imagePath = "/images/birthday-cards.jpg";
        } else if (product.id === "invitation-cards") {
          imagePath = "/images/invitation-cards.jpg";
        } else if (product.id === "greeting-cards") {
          imagePath = "/images/greeting-cards.jpg";
        } else if (product.id === "flex-printing") {
          imagePath = "/images/flex-printing.jpg";
        } else if (product.id === "paper-packaging") {
          imagePath = "/images/paper-packaging.jpg";
        } else if (product.id === "mailers") {
          imagePath = "/images/mailers.jpg";
        } else if (product.id === "specialty-boxes") {
          imagePath = "/images/boxes.jpg"; // specialty-boxes.jpg does not exist, using boxes.jpg
        } else if (product.id === "accessories") {
          imagePath = "/images/accessories.jpg";
        } else if (product.id === "eco-packaging") {
          imagePath = "/images/eco-packaging.jpg";
        } else if (product.id === "bags") {
          imagePath = "/images/bags.jpg";
        } else if (product.id === "labels") {
          imagePath = "/images/labels.jpg";
        } else if (product.id === "caps") {
          imagePath = "/images/caps.jpg";
        } else if (product.id === "screen-printing") {
          imagePath = "/images/screen-printing.jpg";
        } else if (product.id === "pens-diaries") {
          imagePath = "/images/pens-diaries.jpg";
        } else if (product.id === "drinkware") {
          imagePath = "/images/drinkware.jpg";
        } else if (product.id === "lanyards") {
          imagePath = "/images/lanyards.jpg";
        } else if (product.id === "desk-items") {
          imagePath = "/images/desk-items.jpg";
        } else if (product.id === "calendars") {
          imagePath = "/images/calendars.jpg";
        } else if (product.id === "mementos-prizes") {
          imagePath = "/images/mementos-prizes.jpg";
        } else if (product.id === "engraving") {
          imagePath = "/images/engraving.jpg";
        } else if (product.id === "signboard-signage") {
          imagePath = "/images/signboard-signage.jpg";
        } else if (product.id === "nameplate") {
          imagePath = "/images/nameplate.jpg";
        } else if (product.id === "lightbox-signage") {
          imagePath = "/images/lightbox-signage.jpg";
        } else if (product.id === "self-standing") {
          imagePath = "/images/self-standing.jpg";
        } else if (product.id === "direction-signage") {
          imagePath = "/images/direction-signage.jpg";
        } else if (product.id === "flags") {
          imagePath = "/images/flags.jpg";
        } else if (product.id === "rollup-standees") {
          imagePath = "/images/rollup-standees.jpg";
        } else if (product.id === "backdrop-signage") {
          imagePath = "/images/backdrop-signage.jpg";
        } else if (product.id === "exhibition-events") {
          imagePath = "/images/exhibition-events.jpg";
        } else if (product.id === "shell-scheme-booths") {
          imagePath = "/images/shell-scheme-booths.jpg";
        } else if (product.id === "event-props") {
          imagePath = "/images/event-props.jpg";
        } else if (product.id === "foam-boards") {
          imagePath = "/images/foam-boards.jpg";
        } else if (product.id === "office-branding") {
          imagePath = "/images/office-branding.jpg";
        } else if (product.id === "vehicle-branding") {
          imagePath = "/images/vehicle-branding.jpg";
        }

        sampleProducts.push({
          id: productId++,
          name: product.name,
          topCategoryId: topCategory.id, // e.g., other-printing-specialty-services
          intermediateCategoryId: midCategory.id, // e.g., business-essentials-other
          productSlugId: product.id, // e.g., pvc-nfc-cards
          printingMethod: product.printingMethod,
          image: imagePath,
          price: "Price varies depending on quantity",
          badge: "NEW",
          rating: 4.5,
        });
      });
    });
  }
});


// Data for Business Cards (Matt Lamination & Related)
const businessCardMattLaminationPrices = [
  {
    productName: "Business Card - Matt Lamination 350gsm",
    pricing: [
      {
        productCode: "SB-104",
        specifications: "4 Color, 2 Sides, 9x5.5 cm or Custom Size",
        quantity: 500,
        priceAED: 22,
        turnaround: "1 Business Day",
        notes: "Express available (Online price)",
      },
      {
        productCode: "SB-104",
        specifications: "4 Color, 2 Sides, 9x5.5 cm or Custom Size",
        quantity: 500,
        priceAED: 26,
        turnaround: "1 Business Day",
        notes: "Express available (3 Hours price)",
      },
    ],
  },
  {
    productName: "Business Card - Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "SB-100",
        specifications: "4 Color, 2 Sides, 9x5.5 cm or Custom Size",
        quantity: 500,
        priceAED: 33,
        turnaround: "1 Business Day",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Rounded Corner Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "PB-203",
        specifications: "4 Color, 2 Sides, 9x5.5 cm",
        quantity: 1000,
        priceAED: 49,
        turnaround: "2 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Glossy Lamination 400gsm",
    pricing: [
      {
        productCode: "SB-103",
        specifications: "4 Color, 2 Sides, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 39,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Rounded Corner Glossy Lamination 400gsm",
    pricing: [
      {
        productCode: "PB-202",
        specifications: "4 Color, 2 Sides, 9x5.5 cm",
        quantity: 1000,
        priceAED: 49,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Art Paper (Without Lamination) 400gsm",
    pricing: [
      {
        productCode: "SB-101",
        specifications: "4 Color, 2 Sides, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 22,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Spot UV Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "SB-104/1",
        specifications: "4 Color, 2 Sides, 9 x 5.5 cm",
        quantity: 500,
        priceAED: 75,
        turnaround: "2 Business Days",
        notes: "Larger sizes up to 34.2 x 46 cm",
      },
      {
        productCode: "SB-104/1",
        specifications: "4 Color, 2 Sides, 9 x 5.5 cm",
        quantity: 1000,
        priceAED: 90,
        turnaround: "2 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Rounded Corner Spot UV Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "PB-203/1",
        specifications: "4 Color, 2 Sides, 9x5.5 cm",
        quantity: 1000,
        priceAED: 100,
        turnaround: "2 Business Days",
        notes: "",
      },
    ],
  },
];

// Data for Business Cards (Gold Foil & Spot UV Variants)
const businessCardGoldFoilPrices = [
  {
    productName: "Business Card - Gold Foil Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "PB-213",
        specifications: "4 Color, 2 Sides, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 130,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Rounded Corner Gold Foil Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "PB-213/1",
        specifications: "4 Color, 2 Sides, 9x5.5 cm",
        quantity: 1000,
        priceAED: 141,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Gold Foil Spot UV Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "PB-214",
        specifications: "4 Color, 2 Sides, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 160,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Rounded Corner Gold Foil Spot UV Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "PB-215",
        specifications: "4 Color, 2 Sides, 9x5.5 cm",
        quantity: 1000,
        priceAED: 170,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Business Card - Custom Die Cut Gold Foil Spot UV Matt Lamination 400gsm",
    pricing: [
      {
        productCode: "PB-216",
        specifications: "4 Color, 2 Sides, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 200,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
];

// Data for Stickers
const stickerPrices = [
  {
    productName: "Sticker Without Lamination (8x12 cm)",
    pricing: [
      {
        specifications: "4 color, Size: 8 x 12 cm",
        quantity: 1000,
        priceAED: 55,
        turnaround: "4 Business Days",
        notes: "",
      },
      {
        specifications: "4 color, Size: 8 x 12 cm",
        quantity: 5000,
        priceAED: 165,
        turnaround: "4 Business Days",
        notes: "",
      },
      {
        specifications: "4 color, Size: 8 x 12 cm",
        quantity: 10000,
        priceAED: 385,
        turnaround: "4 Business Days",
        notes: "",
      },
      {
        specifications: "4 color, Size: 8 x 12 cm",
        quantity: 50000,
        priceAED: 1430,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Sticker Without Lamination (23x17 cm)",
    pricing: [
      {
        specifications: "4 color, Size: 23 x 17 cm",
        quantity: 1000,
        priceAED: 138,
        turnaround: "4 Business Days",
        notes: "",
      },
      {
        specifications: "4 color, Size: 23 x 17 cm",
        quantity: 5000,
        priceAED: 473,
        turnaround: "4 Business Days",
        notes: "",
      },
      {
        specifications: "4 color, Size: 23 x 17 cm",
        quantity: 10000,
        priceAED: 1045,
        turnaround: "4 Business Days",
        notes: "",
      },
      {
        specifications: "4 color, Size: 23 x 17 cm",
        quantity: 50000,
        priceAED: 4399,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Sticker Glossy Lamination 80gsm",
    pricing: [
      {
        productCode: "LB-401",
        specifications: "4 Color, 1 Side, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 32,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Custom Die Cut Sticker Glossy Lamination 80gsm",
    pricing: [
      {
        productCode: "LB-402",
        specifications: "4 Color, 1 Side, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 48,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Gold Foil Sticker Glossy Lamination 80gsm",
    pricing: [
      {
        productCode: "LB-420",
        specifications: "4 Color, 1 Side, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 103,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Custom Die Cut Gold Foil Sticker Glossy Lamination 80gsm",
    pricing: [
      {
        productCode: "LB-430",
        specifications: "4 Color, 1 Side, 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 144,
        turnaround: "4 Business Days",
        notes: "",
      },
    ],
  },
];










// A5 (20x14.5 cm)
const flyerEconomySizeA5Prices = [
  {
    productName: "Flyer Economy Size A5",
    pricing: [
      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 1000, priceAED: 39, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 1000, priceAED: 43, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 1000, priceAED: 45, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 1000, priceAED: 37, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 1000, priceAED: 57, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 1000, priceAED: 62, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 1000, priceAED: 64, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 1000, priceAED: 54, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 2000, priceAED: 63, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 2000, priceAED: 66, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 2000, priceAED: 66, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 2000, priceAED: 72, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 2000, priceAED: 89, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 2000, priceAED: 90, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 2000, priceAED: 92, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 2000, priceAED: 87, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 5000, priceAED: 134, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 5000, priceAED: 153, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 5000, priceAED: 166, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 5000, priceAED: 142, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 5000, priceAED: 184, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 5000, priceAED: 206, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 5000, priceAED: 216, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 5000, priceAED: 175, turnaround: "2 Business Days", notes: "" },
    ],
  },
];

// A6 (10x14.5 cm)
const flyerEconomySizeA6Prices = [
  {
    productName: "Flyer Economy Size A6",
    pricing: [
      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 1000, priceAED: 20, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 1000, priceAED: 22, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 1000, priceAED: 23, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 1000, priceAED: 19, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 1000, priceAED: 29, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 1000, priceAED: 31, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 1000, priceAED: 32, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 1000, priceAED: 26, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 2000, priceAED: 32, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 2000, priceAED: 33, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 2000, priceAED: 33, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 2000, priceAED: 32, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 2000, priceAED: 45, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 2000, priceAED: 45, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 2000, priceAED: 46, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 2000, priceAED: 37, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 5000, priceAED: 67, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 5000, priceAED: 77, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 5000, priceAED: 78, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 5000, priceAED: 70, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 5000, priceAED: 92, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 5000, priceAED: 103, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 5000, priceAED: 108, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 5000, priceAED: 87, turnaround: "2 Business Days", notes: "" },
    ],
  },
];

// B4 (34x24 cm)
const flyerEconomySizeB4Prices = [
  {
    productName: "Flyer Economy Size B4",
    pricing: [
      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 1000, priceAED: 88, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 1000, priceAED: 97, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 1000, priceAED: 110, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 1000, priceAED: 119, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 1000, priceAED: 132, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 1000, priceAED: 145, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 1000, priceAED: 154, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 1000, priceAED: 176, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 2000, priceAED: 154, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 2000, priceAED: 150, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 2000, priceAED: 194, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 2000, priceAED: 229, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 2000, priceAED: 202, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 2000, priceAED: 216, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 2000, priceAED: 264, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 2000, priceAED: 308, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 5000, priceAED: 330, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 5000, priceAED: 356, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 5000, priceAED: 387, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 5000, priceAED: 480, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 5000, priceAED: 453, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 5000, priceAED: 480, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 5000, priceAED: 515, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 5000, priceAED: 612, turnaround: "2 Business Days", notes: "" },
    ],
  },
];

// B5 (24x17 cm)
const flyerEconomySizeB5Prices = [
  {
    productName: "Flyer Economy Size B5",
    pricing: [
      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 1000, priceAED: 44, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 1000, priceAED: 48, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 1000, priceAED: 55, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 1000, priceAED: 59, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 1000, priceAED: 66, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 1000, priceAED: 73, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 1000, priceAED: 77, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 1000, priceAED: 88, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 2000, priceAED: 77, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 2000, priceAED: 75, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 2000, priceAED: 97, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 2000, priceAED: 114, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 2000, priceAED: 101, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 2000, priceAED: 108, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 2000, priceAED: 132, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 2000, priceAED: 154, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 5000, priceAED: 165, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 5000, priceAED: 178, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 5000, priceAED: 194, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 5000, priceAED: 240, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 5000, priceAED: 227, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 5000, priceAED: 240, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 5000, priceAED: 257, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 5000, priceAED: 306, turnaround: "2 Business Days", notes: "" },
    ],
  },
];

// B6 (17x12 cm)
const flyerEconomySizeB6Prices = [
  {
    productName: "Flyer Economy Size B6",
    pricing: [
      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 1000, priceAED: 22, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 1000, priceAED: 24, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 1000, priceAED: 28, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 1000, priceAED: 30, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 1000, priceAED: 33, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 1000, priceAED: 36, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 1000, priceAED: 39, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 1000, priceAED: 44, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 2000, priceAED: 39, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 2000, priceAED: 37, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 2000, priceAED: 48, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 2000, priceAED: 57, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 2000, priceAED: 51, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 2000, priceAED: 54, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 2000, priceAED: 66, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 2000, priceAED: 77, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 1 Side, Wood Free 100gsm", quantity: 5000, priceAED: 83, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 115gsm", quantity: 5000, priceAED: 89, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 135gsm", quantity: 5000, priceAED: 97, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 1 Side, Glossy 170gsm", quantity: 5000, priceAED: 120, turnaround: "2 Business Days", notes: "" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 5000, priceAED: 113, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 5000, priceAED: 120, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 5000, priceAED: 129, turnaround: "2 Business Days", notes: "" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 5000, priceAED: 153, turnaround: "2 Business Days", notes: "" },
    ],
  },
];


// A4 (29x20 cm)
const brochureEconomySizeA4Prices = [
  {
    productName: "Brochure Economy Size A4",
    pricing: [
      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 1000, priceAED: 132, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 1000, priceAED: 134, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 1000, priceAED: 138, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 1000, priceAED: 147, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 2000, priceAED: 200, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 2000, priceAED: 202, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 2000, priceAED: 206, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 2000, priceAED: 216, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },

      { specifications: "4 color, 2 Sides, Wood Free 100gsm", quantity: 5000, priceAED: 400, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 115gsm", quantity: 5000, priceAED: 444, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 135gsm", quantity: 5000, priceAED: 464, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
      { specifications: "4 color, 2 Sides, Glossy 170gsm", quantity: 5000, priceAED: 516, turnaround: "2 Business Days", notes: "Include Folding, Cut off 3mm" },
    ],
  },
];


// Data for Menus
const menuPrices = [
  {
    productName: "Menu (Matt Lamination 350gsm)",
    pricing: [
      { specifications: "4 Color, 2 Sides, A3 to A4 (Open 29.7 x 42 cm), Matt Lamination, Creasing and Folding", quantity: 500, priceAED: 418, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A3 to A4 (Open 29.7 x 42 cm), Matt Lamination, Creasing and Folding", quantity: 1000, priceAED: 715, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A3 to A4 (Open 29.7 x 42 cm), Matt Lamination, Creasing and Folding", quantity: 2000, priceAED: 1210, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A3 to A4 (Open 29.7 x 42 cm), Matt Lamination, Creasing and Folding", quantity: 5000, priceAED: 2750, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A4 to A5 (Open 21 x 29.7 cm), Matt Lamination, Creasing and Folding", quantity: 500, priceAED: 209, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A4 to A5 (Open 21 x 29.7 cm), Matt Lamination, Creasing and Folding", quantity: 1000, priceAED: 358, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A4 to A5 (Open 21 x 29.7 cm), Matt Lamination, Creasing and Folding", quantity: 2000, priceAED: 605, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A4 to A5 (Open 21 x 29.7 cm), Matt Lamination, Creasing and Folding", quantity: 5000, priceAED: 1375, turnaround: "3 Business Days", notes: "" },
    ],
  },
  {
    productName: "Menu (Glossy Lamination 350gsm)",
    pricing: [
      { specifications: "4 Color, 2 Sides, A3 to A4 (Open 29.7 x 42 cm), Glossy Lamination, Creasing and Folding", quantity: 500, priceAED: 418, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A3 to A4 (Open 29.7 x 42 cm), Glossy Lamination, Creasing and Folding", quantity: 1000, priceAED: 715, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A3 to A4 (Open 29.7 x 42 cm), Glossy Lamination, Creasing and Folding", quantity: 2000, priceAED: 1210, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A3 to A4 (Open 29.7 x 42 cm), Glossy Lamination, Creasing and Folding", quantity: 5000, priceAED: 2750, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A4 to A5 (Open 21 x 29.7 cm), Glossy Lamination, Creasing and Folding", quantity: 500, priceAED: 209, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A4 to A5 (Open 21 x 29.7 cm), Glossy Lamination, Creasing and Folding", quantity: 1000, priceAED: 358, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A4 to A5 (Open 21 x 29.7 cm), Glossy Lamination, Creasing and Folding", quantity: 2000, priceAED: 605, turnaround: "3 Business Days", notes: "" },
      { specifications: "4 Color, 2 Sides, A4 to A5 (Open 21 x 29.7 cm), Glossy Lamination, Creasing and Folding", quantity: 5000, priceAED: 1375, turnaround: "3 Business Days", notes: "" },
    ],
  },
];


// Data for Letterhead (4 Color, 1 or 2 Sides, Wood Free Paper, Cut off 3mm, Turnaround: 2 Business Days)
const letterheadPrices = [
  {
    productName: "Letterhead (Wood Free paper 100gsm)",
    pricing: [
      { specifications: "A4 (21x29.7 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 500, priceAED: 55, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 500, priceAED: 97, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 1000, priceAED: 72, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 1000, priceAED: 110, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 2000, priceAED: 106, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 2000, priceAED: 157, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 5000, priceAED: 219, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 5000, priceAED: 281, turnaround: "2 Business Days", notes: "" },

      { specifications: "A5 (21x14.8 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 500, priceAED: 28, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 500, priceAED: 41, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 1000, priceAED: 31, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 1000, priceAED: 42, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 2000, priceAED: 48, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 2000, priceAED: 66, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 5000, priceAED: 110, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 5000, priceAED: 141, turnaround: "2 Business Days", notes: "" },

      { specifications: "A6 (10.5x14.8 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 500, priceAED: 14, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 500, priceAED: 20, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 1000, priceAED: 15, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 1000, priceAED: 21, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 2000, priceAED: 24, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 2000, priceAED: 33, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 1 Side, Wood Free 100gsm, Cut off 3mm", quantity: 5000, priceAED: 55, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 2 Sides, Wood Free 100gsm, Cut off 3mm", quantity: 5000, priceAED: 70, turnaround: "2 Business Days", notes: "" },
    ],
  },
  {
    productName: "Letterhead (Wood Free paper 120gsm)",
    pricing: [
      { specifications: "A4 (21x29.7 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 500, priceAED: 61, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 500, priceAED: 102, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 1000, priceAED: 77, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 1000, priceAED: 121, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 2000, priceAED: 128, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 2000, priceAED: 179, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 5000, priceAED: 264, turnaround: "2 Business Days", notes: "" },
      { specifications: "A4 (21x29.7 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 5000, priceAED: 325, turnaround: "2 Business Days", notes: "" },

      { specifications: "A5 (21x14.8 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 500, priceAED: 31, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 500, priceAED: 43, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 1000, priceAED: 33, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 1000, priceAED: 44, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 2000, priceAED: 53, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 2000, priceAED: 68, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 5000, priceAED: 110, turnaround: "2 Business Days", notes: "" },
      { specifications: "A5 (21x14.8 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 5000, priceAED: 145, turnaround: "2 Business Days", notes: "" },

      { specifications: "A6 (10.5x14.8 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 500, priceAED: 15, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 500, priceAED: 21, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 1000, priceAED: 17, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 1000, priceAED: 22, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 2000, priceAED: 26, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 2000, priceAED: 34, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 1 Side, Wood Free 120gsm, Cut off 3mm", quantity: 5000, priceAED: 55, turnaround: "2 Business Days", notes: "" },
      { specifications: "A6 (10.5x14.8 cm), 4 Color, 2 Sides, Wood Free 120gsm, Cut off 3mm", quantity: 5000, priceAED: 73, turnaround: "2 Business Days", notes: "" },
    ],
  },
];


// Data for Envelope (4 Color, 1 Side, Wood Free Paper, Turnaround: 5 Business Days)
const envelopePrices = [
  {
    productName: "Envelope (Wood Free paper 100gsm)",
    pricing: [
      { specifications: "A4 (23x32.3 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 1000, priceAED: 772, turnaround: "5 Business Days", notes: "" },
      { specifications: "A4 (23x32.3 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 2000, priceAED: 1108, turnaround: "5 Business Days", notes: "" },
      { specifications: "A4 (23x32.3 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 5000, priceAED: 2198, turnaround: "5 Business Days", notes: "" },

      { specifications: "A5 (17.7x25.5 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 1000, priceAED: 340, turnaround: "5 Business Days", notes: "" },
      { specifications: "A5 (17.7x25.5 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 2000, priceAED: 462, turnaround: "5 Business Days", notes: "" },
      { specifications: "A5 (17.7x25.5 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 5000, priceAED: 869, turnaround: "5 Business Days", notes: "" },

      { specifications: "DL (22x11 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 1000, priceAED: 235, turnaround: "5 Business Days", notes: "" },
      { specifications: "DL (22x11 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 2000, priceAED: 360, turnaround: "5 Business Days", notes: "" },
      { specifications: "DL (22x11 cm), 4 Color, 1 Side, Wood Free 100gsm", quantity: 5000, priceAED: 756, turnaround: "5 Business Days", notes: "" },
    ],
  },
  {
    productName: "Envelope (Wood Free paper 120gsm)",
    pricing: [
      { specifications: "A4 (23x32.3 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 1000, priceAED: 816, turnaround: "5 Business Days", notes: "" },
      { specifications: "A4 (23x32.3 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 2000, priceAED: 1170, turnaround: "5 Business Days", notes: "" },
      { specifications: "A4 (23x32.3 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 5000, priceAED: 2277, turnaround: "5 Business Days", notes: "" },

      { specifications: "A5 (17.7x25.5 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 1000, priceAED: 360, turnaround: "5 Business Days", notes: "" },
      { specifications: "A5 (17.7x25.5 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 2000, priceAED: 526, turnaround: "5 Business Days", notes: "" },
      { specifications: "A5 (17.7x25.5 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 5000, priceAED: 945, turnaround: "5 Business Days", notes: "" },

      { specifications: "DL (22x11 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 1000, priceAED: 263, turnaround: "5 Business Days", notes: "" },
      { specifications: "DL (22x11 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 2000, priceAED: 415, turnaround: "5 Business Days", notes: "" },
      { specifications: "DL (22x11 cm), 4 Color, 1 Side, Wood Free 120gsm", quantity: 5000, priceAED: 866, turnaround: "5 Business Days", notes: "" },
    ],
  },
];


// Data for Paper Cup (Double Wall, 4oz & 8oz, Delivery in 7 Business Days)
const paperCupPrices = [
  {
    productName: "Paper Cup 8oz (240cc) - Double Wall",
    pricing: [
      { specifications: "Double Wall, 8oz (240cc)", quantity: 1000, priceAED: 350, turnaround: "7 Business Days", notes: "" },
      { specifications: "Double Wall, 8oz (240cc)", quantity: 2000, priceAED: 700, turnaround: "7 Business Days", notes: "" },
      { specifications: "Double Wall, 8oz (240cc)", quantity: 3000, priceAED: 1050, turnaround: "7 Business Days", notes: "" },
      { specifications: "Double Wall, 8oz (240cc)", quantity: 5000, priceAED: 1750, turnaround: "7 Business Days", notes: "" },
      { specifications: "Double Wall, 8oz (240cc)", quantity: 10000, priceAED: 2800, turnaround: "7 Business Days", notes: "" },
    ],
  },
  {
    productName: "Paper Cup 4oz (120cc) - Double Wall",
    pricing: [
      { specifications: "Double Wall, 4oz (120cc)", quantity: 1000, priceAED: 350, turnaround: "7 Business Days", notes: "" },
      { specifications: "Double Wall, 4oz (120cc)", quantity: 2000, priceAED: 700, turnaround: "7 Business Days", notes: "" },
      { specifications: "Double Wall, 4oz (120cc)", quantity: 3000, priceAED: 1050, turnaround: "7 Business Days", notes: "" },
      { specifications: "Double Wall, 4oz (120cc)", quantity: 5000, priceAED: 1750, turnaround: "7 Business Days", notes: "" },
      { specifications: "Double Wall, 4oz (120cc)", quantity: 10000, priceAED: 2800, turnaround: "7 Business Days", notes: "" },
    ],
  },
];

// Data for Business Card Box
const businessCardBoxPrices = [
  {
    productName: "Business Card Box",
    pricing: [
      {
        specifications: "350gsm, 4 Color, 1 Side, Varnish, Size: 9.3x5.8x4.1 cm",
        quantity: 1000,
        priceAED: 299,
        turnaround: "10 Business Days",
        notes: "Suitable for 100 pcs matt lamination cards",
      },
    ],
  },
];

// Data for Door Hangers
const doorHangerPrices = [
  {
    productName: "Door Hanger (Matt Lamination 350gsm)",
    pricing: [
      {
        productCode: "DH-974",
        specifications: "4 Color, 2 Sides, Size: 27 x 10 cm",
        quantity: 1000,
        priceAED: 275,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Door Hanger Butterfly Design (Matt Lamination 350gsm)",
    pricing: [
      {
        productCode: "DH-973",
        specifications: "4 Color, 2 Sides, Size: 27 x 10 cm",
        quantity: 1000,
        priceAED: 275,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Door Hanger Rounded Corner Design (Matt Lamination 350gsm)",
    pricing: [
      {
        productCode: "DH-972",
        specifications: "4 Color, 2 Sides, Size: 27 x 10 cm",
        quantity: 1000,
        priceAED: 275,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Door Hanger Cane Design (Matt Lamination 350gsm)",
    pricing: [
      {
        productCode: "DH-975",
        specifications: "4 Color, 2 Sides, Size: 22.8 x 8 cm",
        quantity: 1000,
        priceAED: 209,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
  {
    productName: "Door Hanger (Glossy 170gsm)",
    pricing: [
      {
        productCode: "DH-971",
        specifications: "4 Color, 2 Sides, Size: 26.3 x 8.1 cm",
        quantity: 1000,
        priceAED: 77,
        turnaround: "3 Business Days",
        notes: "",
      },
      {
        productCode: "DH-971",
        specifications: "4 Color, 2 Sides, Size: 26.3 x 8.1 cm",
        quantity: 2000,
        priceAED: 132,
        turnaround: "3 Business Days",
        notes: "",
      },
      {
        productCode: "DH-971",
        specifications: "4 Color, 2 Sides, Size: 26.3 x 8.1 cm",
        quantity: 5000,
        priceAED: 330,
        turnaround: "3 Business Days",
        notes: "",
      },
    ],
  },
];

// Data for Fridge Magnet
const fridgeMagnetPrices = [
  {
    productName: "Fridge Magnet (Normal & Custom Die Cut)",
    pricing: [
      {
        productCode: "MG-961",
        specifications: "4 Color, 1 Side, Glossy Lamination, Size: 9x5.5 cm or Custom Size",
        quantity: 1000,
        priceAED: 385,
        turnaround: "6 Business Days",
        notes: "",
      },
    ],
  },
];

// Data for Fast Food Boxes
const fastFoodBoxPrices = [
  {
    productName: "Fried Chicken Box (Takeaway) Type1",
    pricing: [
      { productCode: "FB-993", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 21.5 x 12 x 8 cm", quantity: 1000, priceAED: 303, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-993", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 21.5 x 12 x 8 cm", quantity: 2000, priceAED: 528, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-993", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 21.5 x 12 x 8 cm", quantity: 5000, priceAED: 1177, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Pearl Burger Box - S/M/L",
    pricing: [
      { productCode: "FB-991", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 11 x 11 x 7.5 cm", quantity: 1000, priceAED: 219, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-991", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 11 x 11 x 7.5 cm", quantity: 2000, priceAED: 396, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-991", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 11 x 11 x 7.5 cm", quantity: 5000, priceAED: 886, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Simple Burger Box",
    pricing: [
      { productCode: "FB-992", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 12.5 x 12.5 x 8 cm", quantity: 1000, priceAED: 282, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-992", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 12.5 x 12.5 x 8 cm", quantity: 2000, priceAED: 495, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-992", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 12.5 x 12.5 x 8 cm", quantity: 5000, priceAED: 1092, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Fried Chicken Box (Takeaway) Type2",
    pricing: [
      { productCode: "FB-994", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 11 x 10 x 6 cm", quantity: 1000, priceAED: 303, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-994", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 11 x 10 x 6 cm", quantity: 2000, priceAED: 528, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-994", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 11 x 10 x 6 cm", quantity: 5000, priceAED: 1177, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Cone French Fries Box (Takeaway)",
    pricing: [
      { productCode: "FB-995", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 7.5 x 7.5 x 11 cm", quantity: 1000, priceAED: 173, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-995", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 7.5 x 7.5 x 11 cm", quantity: 2000, priceAED: 308, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-995", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 7.5 x 7.5 x 11 cm", quantity: 5000, priceAED: 699, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Fried Chicken Tray (indoor)",
    pricing: [
      { productCode: "FB-997", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 24 x 17 x 5 cm", quantity: 1000, priceAED: 173, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-997", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 24 x 17 x 5 cm", quantity: 2000, priceAED: 308, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-997", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 24 x 17 x 5 cm", quantity: 5000, priceAED: 699, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "French Fries Tray (indoor)",
    pricing: [
      { productCode: "FB-996", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 20 x 10 x 5 cm", quantity: 1000, priceAED: 130, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-996", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 20 x 10 x 5 cm", quantity: 2000, priceAED: 239, turnaround: "6 Business Days", notes: "" },
      { productCode: "FB-996", specifications: "Food Board 250gsm, 4 Color, 1 Side, Varnish, Size: 20 x 10 x 5 cm", quantity: 5000, priceAED: 553, turnaround: "6 Business Days", notes: "" },
    ],
  },
];

// Data for Kraft Shopping Bags (100gsm, Delivery in 6 Business Days)
const kraftShoppingBagPrices = [
  {
    productName: "Kraft Shopping Bag (White)",
    pricing: [
      { productCode: "W59-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 500, priceAED: 490, turnaround: "6 Business Days", notes: "" },
      { productCode: "W59-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 1000, priceAED: 660, turnaround: "6 Business Days", notes: "" },
      { productCode: "W59-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 2000, priceAED: 1177, turnaround: "6 Business Days", notes: "" },
      { productCode: "W59-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 5000, priceAED: 2068, turnaround: "6 Business Days", notes: "" },
      { productCode: "W59-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 10000, priceAED: 3784, turnaround: "6 Business Days", notes: "" },

      { productCode: "W70-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 1000, priceAED: 715, turnaround: "6 Business Days", notes: "" },
      { productCode: "W70-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 2000, priceAED: 1254, turnaround: "6 Business Days", notes: "" },
      { productCode: "W70-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 5000, priceAED: 2409, turnaround: "6 Business Days", notes: "" },
      { productCode: "W70-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 10000, priceAED: 4483, turnaround: "6 Business Days", notes: "" },

      { productCode: "W68-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 500, priceAED: 512, turnaround: "6 Business Days", notes: "" },
      { productCode: "W68-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 1000, priceAED: 715, turnaround: "6 Business Days", notes: "" },
      { productCode: "W68-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 2000, priceAED: 1254, turnaround: "6 Business Days", notes: "" },
      { productCode: "W68-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 5000, priceAED: 2409, turnaround: "6 Business Days", notes: "" },
      { productCode: "W68-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 10000, priceAED: 4483, turnaround: "6 Business Days", notes: "" },

      { productCode: "W90-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 1000, priceAED: 1111, turnaround: "6 Business Days", notes: "" },
      { productCode: "W90-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 2000, priceAED: 1650, turnaround: "6 Business Days", notes: "" },
      { productCode: "W90-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 5000, priceAED: 2849, turnaround: "6 Business Days", notes: "" },
      { productCode: "W90-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 10000, priceAED: 5335, turnaround: "6 Business Days", notes: "" },

      { productCode: "W89-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 500, priceAED: 699, turnaround: "6 Business Days", notes: "" },
      { productCode: "W89-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 1000, priceAED: 1122, turnaround: "6 Business Days", notes: "" },
      { productCode: "W89-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 2000, priceAED: 1661, turnaround: "6 Business Days", notes: "" },
      { productCode: "W89-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 5000, priceAED: 2877, turnaround: "6 Business Days", notes: "" },
      { productCode: "W89-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 10000, priceAED: 5390, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Kraft Shopping Bag (White) Top Fold",
    pricing: [
      { productCode: "W75-1/2", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 500, priceAED: 633, turnaround: "6 Business Days", notes: "" },
      { productCode: "W75-1", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 1000, priceAED: 1045, turnaround: "6 Business Days", notes: "" },
      { productCode: "W75-2", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 2000, priceAED: 1518, turnaround: "6 Business Days", notes: "" },
      { productCode: "W75-5", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 5000, priceAED: 2530, turnaround: "6 Business Days", notes: "" },
      { productCode: "W75-10", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 10000, priceAED: 4730, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Kraft Shopping Bag (Brown Virgin)",
    pricing: [
      { productCode: "B59-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 500, priceAED: 490, turnaround: "6 Business Days", notes: "" },
      { productCode: "B59-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 1000, priceAED: 660, turnaround: "6 Business Days", notes: "" },
      { productCode: "B59-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 2000, priceAED: 1177, turnaround: "6 Business Days", notes: "" },
      { productCode: "B59-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 5000, priceAED: 2068, turnaround: "6 Business Days", notes: "" },
      { productCode: "B59-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 10000, priceAED: 3784, turnaround: "6 Business Days", notes: "" },

      { productCode: "B70-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 1000, priceAED: 715, turnaround: "6 Business Days", notes: "" },
      { productCode: "B70-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 2000, priceAED: 1254, turnaround: "6 Business Days", notes: "" },
      { productCode: "B70-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 5000, priceAED: 2409, turnaround: "6 Business Days", notes: "" },
      { productCode: "B70-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 10000, priceAED: 4483, turnaround: "6 Business Days", notes: "" },

      { productCode: "B68-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 500, priceAED: 512, turnaround: "6 Business Days", notes: "" },
      { productCode: "B68-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 1000, priceAED: 715, turnaround: "6 Business Days", notes: "" },
      { productCode: "B68-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 2000, priceAED: 1254, turnaround: "6 Business Days", notes: "" },
      { productCode: "B68-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 5000, priceAED: 2409, turnaround: "6 Business Days", notes: "" },
      { productCode: "B68-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 10000, priceAED: 4483, turnaround: "6 Business Days", notes: "" },

      { productCode: "B90-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 1000, priceAED: 1111, turnaround: "6 Business Days", notes: "" },
      { productCode: "B90-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 2000, priceAED: 1650, turnaround: "6 Business Days", notes: "" },
      { productCode: "B90-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 5000, priceAED: 2849, turnaround: "6 Business Days", notes: "" },
      { productCode: "B90-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 10000, priceAED: 5335, turnaround: "6 Business Days", notes: "" },

      { productCode: "B89-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 500, priceAED: 699, turnaround: "6 Business Days", notes: "" },
      { productCode: "B89-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 1000, priceAED: 1122, turnaround: "6 Business Days", notes: "" },
      { productCode: "B89-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 2000, priceAED: 1661, turnaround: "6 Business Days", notes: "" },
      { productCode: "B89-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 5000, priceAED: 2877, turnaround: "6 Business Days", notes: "" },
      { productCode: "B89-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 10000, priceAED: 5390, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Kraft Shopping Bag (Brown Virgin) Top Fold",
    pricing: [
      { productCode: "B75-1/2", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 500, priceAED: 633, turnaround: "6 Business Days", notes: "" },
      { productCode: "B75-1", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 1000, priceAED: 1045, turnaround: "6 Business Days", notes: "" },
      { productCode: "B75-2", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 2000, priceAED: 1518, turnaround: "6 Business Days", notes: "" },
      { productCode: "B75-5", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 5000, priceAED: 2530, turnaround: "6 Business Days", notes: "" },
      { productCode: "B75-10", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 10000, priceAED: 4730, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Kraft Shopping Bag (Brown Recycled)",
    pricing: [
      { productCode: "RB59-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 500, priceAED: 468, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB59-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 1000, priceAED: 616, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB59-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 2000, priceAED: 1089, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB59-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 5000, priceAED: 1870, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB59-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)22 x (H)27 x (G)10 cm, Open 67 x 34 cm", quantity: 10000, priceAED: 3410, turnaround: "6 Business Days", notes: "" },

      { productCode: "RB70-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 1000, priceAED: 693, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB70-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 2000, priceAED: 1133, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB70-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 5000, priceAED: 2156, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB70-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)26 x (H)34 x (G)10 cm, Open 75 x 41 cm", quantity: 10000, priceAED: 3938, turnaround: "6 Business Days", notes: "" },

      { productCode: "RB68-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 500, priceAED: 479, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB68-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 1000, priceAED: 693, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB68-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 2000, priceAED: 1133, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB68-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 5000, priceAED: 2156, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB68-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)24 x (H)32 x (G)12 cm, Open 75 x 41 cm", quantity: 10000, priceAED: 3938, turnaround: "6 Business Days", notes: "" },

      { productCode: "RB90-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 1000, priceAED: 1012, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB90-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 2000, priceAED: 1452, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB90-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 5000, priceAED: 2420, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB90-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)35 x (H)43 x (G)12 cm, Open 97 x 51 cm", quantity: 10000, priceAED: 4510, turnaround: "6 Business Days", notes: "" },

      { productCode: "RB89-1/2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 500, priceAED: 649, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB89-1", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 1000, priceAED: 1023, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB89-2", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 2000, priceAED: 1463, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB89-5", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 5000, priceAED: 2453, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB89-10", specifications: "100gsm, Flat or Twisted Handle, Without Top Fold, (W)32.5 x (H)38.5 x (G)17 cm, Open 102 x 50 cm", quantity: 10000, priceAED: 4554, turnaround: "6 Business Days", notes: "" },
    ],
  },
  {
    productName: "Kraft Shopping Bag (Brown Recycled) Top Fold",
    pricing: [
      { productCode: "RB75-1/2", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 500, priceAED: 600, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB75-1", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 1000, priceAED: 979, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB75-2", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 2000, priceAED: 1375, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB75-5", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 5000, priceAED: 2233, turnaround: "6 Business Days", notes: "" },
      { productCode: "RB75-10", specifications: "100gsm, Flat or Twisted Handle, With Top Fold, (W)28 x (H)31.5 x (G)15 cm, Open 89 x 41 cm", quantity: 10000, priceAED: 4136, turnaround: "6 Business Days", notes: "" },
    ],
  },
];

// Data for Table Mats (4 Color/1-2 Color, Cut off 3mm, Turnaround: 2 Business Days)
const tableMatPrices = [
  {
    productName: "Table Mat - 1 or 2 Color (Economy Paper)",
    pricing: [
      { specifications: "1-2 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 500, priceAED: 80, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 94, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 138, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 292, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 457, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 880, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 4 Color (Economy Paper)",
    pricing: [
      { specifications: "4 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 500, priceAED: 94, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 135, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 193, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 385, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 578, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1100, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 1 or 2 Color (Wood free 80gsm)",
    pricing: [
      { specifications: "1-2 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 500, priceAED: 91, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 114, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 166, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 340, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 619, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1190, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 500, priceAED: 98, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 1000, priceAED: 127, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 2000, priceAED: 190, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 5000, priceAED: 399, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 10000, priceAED: 735, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 20000, priceAED: 1422, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 4 Color (Wood free 80gsm)",
    pricing: [
      { specifications: "4 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 500, priceAED: 103, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 121, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 182, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 352, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 692, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1269, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 500, priceAED: 112, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 1000, priceAED: 146, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 2000, priceAED: 218, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 5000, priceAED: 432, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 10000, priceAED: 832, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B3 (48x34 cm)", quantity: 20000, priceAED: 1540, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 1 or 2 Color (Wood free 100gsm)",
    pricing: [
      { specifications: "1-2 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 500, priceAED: 97, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 124, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 185, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 385, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 707, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1367, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 500, priceAED: 107, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 1000, priceAED: 142, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 2000, priceAED: 219, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 5000, priceAED: 470, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 10000, priceAED: 873, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 20000, priceAED: 1698, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 4 Color (Wood free 100gsm)",
    pricing: [
      { specifications: "4 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 500, priceAED: 110, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 143, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 215, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 424, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 803, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1491, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 500, priceAED: 120, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 1000, priceAED: 163, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 2000, priceAED: 246, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 5000, priceAED: 503, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 10000, priceAED: 970, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B3 (48x34 cm)", quantity: 20000, priceAED: 1823, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 1 or 2 Color (Glossy 90gsm)",
    pricing: [
      { specifications: "1-2 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 500, priceAED: 100, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 130, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 196, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 414, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 762, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1477, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 500, priceAED: 108, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 1000, priceAED: 144, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 2000, priceAED: 223, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 5000, priceAED: 477, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 10000, priceAED: 890, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 20000, priceAED: 1733, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 4 Color (Glossy 90gsm)",
    pricing: [
      { specifications: "4 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 500, priceAED: 113, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 149, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 242, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 451, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 859, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1602, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 500, priceAED: 121, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 1000, priceAED: 162, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 2000, priceAED: 251, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 5000, priceAED: 512, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 10000, priceAED: 987, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B3 (48x34 cm)", quantity: 20000, priceAED: 1854, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 1 or 2 Color (Glossy 135gsm)",
    pricing: [
      { specifications: "1-2 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 500, priceAED: 110, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 150, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 233, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 504, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 941, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1557, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 500, priceAED: 120, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 1000, priceAED: 166, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 2000, priceAED: 265, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 5000, priceAED: 582, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 10000, priceAED: 1096, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 20000, priceAED: 2141, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Table Mat - 4 Color (Glossy 135gsm)",
    pricing: [
      { specifications: "4 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 500, priceAED: 124, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 1000, priceAED: 154, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 2000, priceAED: 253, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 5000, priceAED: 537, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 10000, priceAED: 964, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A3 (42x30 cm)", quantity: 20000, priceAED: 1707, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 500, priceAED: 133, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 1000, priceAED: 187, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 2000, priceAED: 293, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 5000, priceAED: 615, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 10000, priceAED: 1192, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B3 (48x34 cm)", quantity: 20000, priceAED: 2265, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
];

// Data for Car Mats (4 Color/1-2 Color, Cut off 3mm, Turnaround: 2 Business Days)
const carMatPrices = [
  {
    productName: "Car Mat - 1 or 2 Color (Economy Paper)",
    pricing: [
      { specifications: "1-2 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 500, priceAED: 161, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 187, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 275, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 583, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 913, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 1760, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 4 Color (Economy Paper)",
    pricing: [
      { specifications: "4 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 500, priceAED: 187, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 270, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 385, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 770, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1155, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Economy 70gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 2200, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 1 or 2 Color (Wood free 80gsm)",
    pricing: [
      { specifications: "1-2 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 500, priceAED: 183, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 229, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 332, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 680, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1239, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 2380, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 500, priceAED: 196, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 1000, priceAED: 253, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 2000, priceAED: 381, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 5000, priceAED: 799, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 10000, priceAED: 1470, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 20000, priceAED: 2845, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 4 Color (Wood free 80gsm)",
    pricing: [
      { specifications: "4 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 500, priceAED: 207, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 264, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 377, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 724, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1384, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 2539, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 500, priceAED: 223, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 1000, priceAED: 293, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 2000, priceAED: 436, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 5000, priceAED: 865, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 10000, priceAED: 1663, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 80gsm, B2 (68x48 cm)", quantity: 20000, priceAED: 3080, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 1 or 2 Color (Wood free 100gsm)",
    pricing: [
      { specifications: "1-2 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 500, priceAED: 194, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 249, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 370, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 770, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1415, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 2735, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 500, priceAED: 213, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 1000, priceAED: 284, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 2000, priceAED: 438, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 5000, priceAED: 939, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 10000, priceAED: 1747, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 20000, priceAED: 3397, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 4 Color (Wood free 100gsm)",
    pricing: [
      { specifications: "4 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 500, priceAED: 220, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 286, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 429, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 847, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1606, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 2981, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 500, priceAED: 240, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 1000, priceAED: 326, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 2000, priceAED: 493, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 5000, priceAED: 1005, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 10000, priceAED: 1940, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Wood Free 100gsm, B2 (68x48 cm)", quantity: 20000, priceAED: 3645, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 1 or 2 Color (Glossy 90gsm)",
    pricing: [
      { specifications: "1-2 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 500, priceAED: 200, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 260, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 392, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 827, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1525, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 2955, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 500, priceAED: 216, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 1000, priceAED: 288, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 2000, priceAED: 447, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 5000, priceAED: 955, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 10000, priceAED: 1780, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 20000, priceAED: 3465, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 4 Color (Glossy 90gsm)",
    pricing: [
      { specifications: "4 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 500, priceAED: 227, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 303, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 484, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 902, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1718, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 3203, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 500, priceAED: 242, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 1000, priceAED: 323, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 2000, priceAED: 502, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 5000, priceAED: 1023, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 10000, priceAED: 1973, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 90gsm, B2 (68x48 cm)", quantity: 20000, priceAED: 3707, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 1 or 2 Color (Glossy 135gsm)",
    pricing: [
      { specifications: "1-2 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 500, priceAED: 220, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 299, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 466, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 1008, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1881, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 3113, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 500, priceAED: 240, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 1000, priceAED: 332, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 2000, priceAED: 530, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 5000, priceAED: 1164, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 10000, priceAED: 2191, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "1-2 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 20000, priceAED: 4281, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
  {
    productName: "Car Mat - 4 Color (Glossy 135gsm)",
    pricing: [
      { specifications: "4 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 500, priceAED: 249, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 1000, priceAED: 308, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 2000, priceAED: 506, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 5000, priceAED: 1074, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 10000, priceAED: 1927, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, A2 (60x42 cm)", quantity: 20000, priceAED: 3414, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 500, priceAED: 266, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 1000, priceAED: 374, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 2000, priceAED: 585, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 5000, priceAED: 1230, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 10000, priceAED: 2385, turnaround: "2 Business Days", notes: "Cut off 3mm" },
      { specifications: "4 Color, Glossy 135gsm, B2 (68x48 cm)", quantity: 20000, priceAED: 4530, turnaround: "2 Business Days", notes: "Cut off 3mm" },
    ],
  },
];

function mapPricesToProducts() {
  const allProductPrices = [
    ...businessCardMattLaminationPrices,
    ...businessCardGoldFoilPrices,
    ...stickerPrices,
    ...menuPrices,
    ...letterheadPrices,
    ...envelopePrices,
    ...paperCupPrices,
    ...businessCardBoxPrices,
    ...doorHangerPrices,
    ...fridgeMagnetPrices,
    ...fastFoodBoxPrices,
    ...kraftShoppingBagPrices,
    ...tableMatPrices,
    ...carMatPrices,
  ];

  allProductPrices.forEach((priceEntry) => {
    const productToUpdate = sampleProducts.find(
      (p) => p.name === priceEntry.productName
    );
    if (productToUpdate) {
      productToUpdate.prices.push(...priceEntry.pricing);
    } else {
      console.warn(
        `Product "${priceEntry.productName}" not found in sampleProducts.`
      );
    }
  });
}

mapPricesToProducts();
