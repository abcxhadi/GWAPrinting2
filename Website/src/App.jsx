import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Upload,
  Mail,
  Phone,
  User,
  Send,
  Check,
  Star,
  ArrowRight,
  Package,
  Sparkles,
  Zap,
  Award,
} from "lucide-react";

const categories = [
  {
    id: "cards-stationery",
    name: "Cards & Stationery",
    icon: "📇",
    color: "cyan",
    description: "Hand-stamped business essentials",
    subcategories: [
      "Business Cards",
      "PVC/NFC Cards",
      "Greeting & Invitation Cards",
      "Letterheads",
      "Receipt Vouchers",
    ],
  },
  {
    id: "marketing-signage",
    name: "Marketing & Signage",
    icon: "📢",
    color: "orange",
    description: "Screen-printed statement pieces",
    subcategories: [
      "Stickers & Labels",
      "Flyers & Brochures",
      "Banners & Backdrops",
      "Rollups & Standees",
      "Signboards",
      "Flags",
    ],
  },
  {
    id: "packaging",
    name: "Packaging",
    icon: "📦",
    color: "cyan",
    description: "Tactile packaging experiences",
    subcategories: ["Paper Bags", "Boxes", "Mailers", "Specialty Packaging"],
  },
  {
    id: "branded-apparel",
    name: "Branded Apparel",
    icon: "👕",
    color: "orange",
    description: "Wearable manifestos",
    subcategories: ["T-Shirts", "Uniforms", "Hoodies", "Caps", "Fabric Labels"],
  },
  {
    id: "promotional-gifts",
    name: "Promotional & Gift Items",
    icon: "🎁",
    color: "cyan",
    description: "Objects with soul",
    subcategories: [
      "Drinkware",
      "Pens & Diaries",
      "Lanyards",
      "Desk Items",
      "Tote Bags",
      "Tech Gifts",
    ],
  },
  {
    id: "exhibition-events",
    name: "Exhibition & Events",
    icon: "🎪",
    color: "orange",
    description: "Immersive installations",
    subcategories: ["Booths", "Props", "Foam Boards"],
  },
];

const sampleProducts = [
  {
    id: 1,
    name: "Letterpress Business Cards",
    category: "cards-stationery",
    subcategory: "Business Cards",
    image: "🃏",
    price: "From $50",
    badge: "CULT FAV",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Risograph Posters",
    category: "marketing-signage",
    subcategory: "Banners & Backdrops",
    image: "🖼️",
    price: "From $120",
    badge: "UNDERGROUND",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Screen-Printed Tees",
    category: "branded-apparel",
    subcategory: "T-Shirts",
    image: "👕",
    price: "From $15",
    badge: "DIY SPIRIT",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Hand-Stamped Mugs",
    category: "promotional-gifts",
    subcategory: "Drinkware",
    image: "☕",
    price: "From $8",
    badge: "ZINE VIBES",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Recycled Kraft Boxes",
    category: "packaging",
    subcategory: "Boxes",
    image: "📦",
    price: "From $2",
    badge: "ECO PUNK",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Brutalist Booth Design",
    category: "exhibition-events",
    subcategory: "Booths",
    image: "🎪",
    price: "Custom Quote",
    badge: "ANTI-CORP",
    rating: 5.0,
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteTab, setQuoteTab] = useState("standard");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!statsVisible) return;
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, [statsVisible, end, duration]);
    return <span className="flip-number">{count}</span>;
  };

  const Navbar = () => (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b-4 border-black ${scrolled ? "bg-white shadow-2xl" : "bg-white/95 backdrop-blur-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <button
            onClick={() => {
              setCurrentPage("home");
              setMobileMenuOpen(false);
            }}
            className="group flex items-center space-x-3 transition-all hover:scale-105"
          >
            <div className="text-4xl transform group-hover:rotate-12 transition-transform">
              🌌
            </div>
            <div>
              <div className="font-display text-2xl text-black tracking-wider">
                GALAXY WORLD
              </div>
              <div className="font-mono text-[10px] text-gray-600 tracking-widest -mt-1">
                // PRINT STUDIO
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "products", "about", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className="font-mono text-sm uppercase tracking-wider text-black hover:text-cyan-500 transition-colors font-bold border-b-2 border-transparent hover:border-cyan-500"
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => {
                setCurrentPage("quote");
                setQuoteTab("standard");
              }}
              className="stamp bg-orange-500 text-black px-5 py-2 text-sm uppercase tracking-wider font-bold hover:scale-105 transition-transform font-mono border-black"
            >
              Get Quote
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-black">
          <div className="px-4 py-4 space-y-3">
            {["home", "products", "about", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono"
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage("quote");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 bg-orange-500 text-black font-bold uppercase text-sm border-3 border-black mt-3 font-mono"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="pt-0">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indie-ink via-purple-900 to-indie-ink">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-32">
          <div className="inline-flex items-center space-x-3 bg-orange-500/20 border-2 border-orange-500/50 px-6 py-3 mb-8 backdrop-blur-sm transform -rotate-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500 font-bold text-sm tracking-wider font-mono">
              15+ YEARS // DIY SPIRIT
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-none">
            <span className="text-white block mb-4">TRANSFORM YOUR</span>
            <span className="text-cyan-400 block text-7xl md:text-9xl glitch">
              VISION
            </span>
            <span className="text-white block text-5xl md:text-7xl mt-4">
              INTO <span className="text-orange-500 scribble">REALITY</span>
            </span>
          </h1>

          <p className="font-mono text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            From xeroxed zines to exhibition booths—
            <br />
            <span className="text-cyan-400">
              we bring underground energy to every project
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setCurrentPage("products")}
              className="relative bg-cyan-400 text-black px-8 py-4 text-lg font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1 font-mono"
            >
              Explore Catalog
            </button>

            <button
              onClick={() => {
                setCurrentPage("quote");
                setQuoteTab("custom");
              }}
              className="font-bold text-lg uppercase tracking-wider bg-transparent border-3 border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 transform hover:rotate-1 font-mono"
            >
              <Zap className="inline mr-2 h-5 w-5" />
              Custom Job
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-orange-500 text-xs tracking-wider mb-2 font-mono">
            SCROLL
          </div>
          <ChevronDown className="w-8 h-8 text-orange-500 mx-auto" />
        </div>
      </div>

      <div className="bg-indie-cream py-24 border-t-8 border-black relative torn-edge">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
              WHAT CAN WE <span className="text-cyan-500 scribble">CREATE</span>
              ?
            </h2>
            <p className="text-gray-700 text-lg font-mono">
              Choose from our underground print arsenal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentPage("products");
                }}
                className="group bg-white p-8 border-4 border-black hover:border-cyan-500 transition-all duration-300 shadow-[6px_6px_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_rgba(0,217,255,1)] hover:-translate-y-1"
                style={{
                  transform:
                    index % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)",
                }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0">
                  {cat.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-black mb-3 group-hover:text-cyan-500 transition-colors tracking-wide">
                  {cat.name.toUpperCase()}
                </h3>
                <p className="font-mono text-gray-600 text-sm mb-4">
                  {cat.description}
                </p>
                <div className="font-mono flex items-center text-sm text-gray-500 group-hover:text-cyan-500 transition-colors">
                  <span className="font-bold">
                    {cat.subcategories.length} OPTIONS
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-24 border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
              THE <span className="text-orange-500 scribble">PROCESS</span>
            </h2>
            <p className="font-mono text-gray-700 text-lg">
              Three steps to printed perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: 1,
                icon: "📦",
                title: "FIND",
                desc: "Browse our catalog of underground print services",
              },
              {
                num: 2,
                icon: "✏️",
                title: "CREATE",
                desc: "Upload your design or collaborate with our team",
              },
              {
                num: 3,
                icon: "✨",
                title: "RECEIVE",
                desc: "Get professionally crafted prints delivered",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-indie-cream border-4 border-black p-8 shadow-[6px_6px_0_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform relative tape"
              >
                <div className="text-7xl mb-6 text-center grayscale">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="font-display inline-block w-12 h-12 bg-black text-cyan-400 border-2 border-cyan-400 text-2xl mb-6 flex items-center justify-center transform rotate-3">
                    {step.num}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-black mb-4 tracking-wider">
                    {step.title}
                  </h3>
                  <p className="font-mono text-gray-700 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-indie-cream py-24 border-t-8 border-black"
        onMouseEnter={() => setStatsVisible(true)}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { value: 15, suffix: "+", label: "YEARS", icon: "🏆" },
              { value: 5000, suffix: "+", label: "PROJECTS", icon: "✓" },
              { value: 98, suffix: "%", label: "SATISFACTION", icon: "★" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4 grayscale">{stat.icon}</div>
                <div className="font-display text-7xl font-bold text-cyan-500 mb-3">
                  {statsVisible ? <AnimatedCounter end={stat.value} /> : "0"}
                  {stat.suffix}
                </div>
                <p className="font-mono text-black font-bold tracking-widest text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black py-20 border-t-8 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            READY TO <span className="text-cyan-400">PRINT</span>?
          </h2>
          <p className="font-mono text-gray-400 text-lg mb-10 leading-relaxed">
            Join the underground printing revolution
            <br />
            <span className="text-orange-500">
              // No corporate vibes allowed
            </span>
          </p>
          <button
            onClick={() => {
              setCurrentPage("quote");
              setQuoteTab("standard");
            }}
            className="bg-cyan-400 text-black px-8 py-4 text-lg font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1 font-mono"
          >
            START PROJECT
          </button>
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => {
    const filteredProducts =
      selectedCategory === "all"
        ? sampleProducts
        : sampleProducts.filter((p) => p.category === selectedCategory);
    const currentCategory = categories.find((c) => c.id === selectedCategory);

    return (
      <div className="pt-20 min-h-screen bg-indie-cream">
        <div className="bg-white border-b-8 border-black py-16">
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => setCurrentPage("home")}
              className="font-mono text-black hover:text-cyan-500 transition-colors flex items-center mb-6 font-bold uppercase text-sm"
            >
              <ArrowRight className="rotate-180 mr-2 h-4 w-4" />
              Back
            </button>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
              {selectedCategory === "all"
                ? "ALL PRODUCTS"
                : currentCategory?.name.toUpperCase()}
            </h1>
            <p className="font-mono text-gray-700 text-lg">
              {selectedCategory === "all"
                ? "// Browse the complete underground catalog"
                : "// " + currentCategory?.description}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex gap-8">
            <div className="hidden md:block w-72">
              <div className="bg-white border-4 border-black p-6 sticky top-24 shadow-[6px_6px_0_rgba(0,0,0,1)]">
                <h3 className="font-display text-2xl font-bold text-black mb-6 tracking-wide">
                  CATEGORIES
                </h3>

                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`font-mono w-full text-left px-4 py-3 mb-3 transition-all font-bold uppercase text-sm border-2 ${selectedCategory === "all" ? "bg-cyan-400 border-black text-black shadow-[4px_4px_0_rgba(0,0,0,1)]" : "bg-white border-gray-300 text-gray-700 hover:border-black"}`}
                >
                  All Products
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`font-mono w-full text-left px-4 py-3 mb-3 transition-all font-bold text-sm border-2 ${selectedCategory === cat.id ? "bg-cyan-400 border-black text-black shadow-[4px_4px_0_rgba(0,0,0,1)]" : "bg-white border-gray-300 text-gray-700 hover:border-black"}`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3 grayscale">
                        {cat.icon}
                      </span>
                      <div className="text-xs">{cat.name.toUpperCase()}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white border-4 border-black hover:border-cyan-500 overflow-hidden transition-all duration-300 shadow-[6px_6px_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_rgba(0,217,255,1)] hover:-translate-y-1"
                    style={{
                      transform:
                        index % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)",
                    }}
                  >
                    <div className="relative bg-indie-cream h-56 flex items-center justify-center">
                      <div className="text-7xl group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0">
                        {product.image}
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="font-mono bg-orange-500 text-black px-3 py-1 text-xs font-bold border-2 border-black transform -rotate-2">
                          {product.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${i < Math.floor(product.rating) ? "text-orange-500" : "text-gray-300"}`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="font-mono ml-2 text-sm text-gray-600">
                          ({product.rating})
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-black mb-2 group-hover:text-cyan-500 transition-colors tracking-wide">
                        {product.name.toUpperCase()}
                      </h3>
                      <p className="font-mono text-gray-600 text-xs mb-4 uppercase">
                        {product.subcategory}
                      </p>

                      <div className="flex items-center justify-between mb-6">
                        <span className="font-display text-2xl font-bold text-cyan-500">
                          {product.price}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setCurrentPage("product-detail");
                        }}
                        className="font-mono w-full bg-black text-white py-3 font-bold uppercase text-sm hover:bg-cyan-500 hover:text-black transition-colors border-2 border-black flex items-center justify-center"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const QuotePage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      product: "",
      notes: "",
      customProject: "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          notes: "",
          customProject: "",
        });
      }, 3000);
    };

    return (
      <div className="pt-20 min-h-screen bg-indie-cream py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
              REQUEST <span className="text-cyan-500 scribble">QUOTE</span>
            </h1>
            <p className="font-mono text-gray-700">
              We'll respond within 24hrs // No corporate BS
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-white border-4 border-cyan-500 p-12 text-center shadow-[8px_8px_0_rgba(0,217,255,1)]">
              <div className="w-20 h-20 bg-cyan-400 border-4 border-black flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                <Check className="w-12 h-12 text-black" />
              </div>
              <h2 className="font-display text-3xl font-bold text-black mb-3 tracking-wide">
                QUOTE SENT!
              </h2>
              <p className="font-mono text-gray-700">
                We'll review and get back to you ASAP
              </p>
            </div>
          ) : (
            <div className="bg-white border-4 border-black overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <div className="flex border-b-4 border-black">
                <button
                  onClick={() => setQuoteTab("standard")}
                  className={`font-mono flex-1 py-5 font-bold uppercase text-sm transition-colors ${quoteTab === "standard" ? "bg-cyan-400 text-black" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                >
                  Standard Product
                </button>
                <button
                  onClick={() => setQuoteTab("custom")}
                  className={`font-mono flex-1 py-5 font-bold uppercase text-sm transition-colors border-l-4 border-black ${quoteTab === "custom" ? "bg-cyan-400 text-black" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                >
                  Custom Project
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-10">
                {quoteTab === "standard" ? (
                  <>
                    <div className="mb-6">
                      <label className="font-mono block font-bold text-black mb-3 uppercase text-sm">
                        Select Product
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) =>
                          setFormData({ ...formData, product: e.target.value })
                        }
                        className="font-mono w-full border-4 border-black p-3 focus:border-cyan-500 focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Choose...</option>
                        {sampleProducts.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="font-mono block font-bold text-black mb-3 uppercase text-sm">
                        Notes
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="font-mono w-full border-4 border-black p-4 h-32 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                        placeholder="Quantity, size, materials, timeline..."
                      />
                    </div>
                  </>
                ) : (
                  <div className="mb-6">
                    <label className="font-mono block font-bold text-black mb-3 uppercase text-sm">
                      Describe Your Project
                    </label>
                    <textarea
                      value={formData.customProject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customProject: e.target.value,
                        })
                      }
                      className="font-mono w-full border-4 border-black p-4 h-40 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                      placeholder="Tell us about your custom project..."
                      required
                    />
                  </div>
                )}

                <div className="bg-indie-cream border-4 border-black p-6 mb-8">
                  <h3 className="font-mono font-bold text-black mb-6 uppercase text-sm tracking-wider">
                    Your Info
                  </h3>

                  <div className="mb-5">
                    <label className="font-mono block font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">
                      <User className="inline mr-2 h-4 w-4" /> Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="font-mono w-full border-2 border-black p-3 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label className="font-mono block font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">
                      <Mail className="inline mr-2 h-4 w-4" /> Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="font-mono w-full border-2 border-black p-3 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-mono block font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">
                      <Phone className="inline mr-2 h-4 w-4" /> Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="font-mono w-full border-2 border-black p-3 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="+971 XX XXX XXXX"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="font-mono w-full bg-cyan-400 text-black py-4 text-base font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1"
                >
                  <Send className="inline mr-2 h-5 w-5" />
                  {quoteTab === "standard" ? "Send Request" : "Send Inquiry"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  };

  const AboutPage = () => (
    <div className="pt-20 min-h-screen bg-indie-cream">
      <div className="bg-white border-b-8 border-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
            ABOUT <span className="text-cyan-500 scribble">GALAXY WORLD</span>
          </h1>
          <p className="font-mono text-gray-700 text-lg">
            15+ years of underground print excellence
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white border-4 border-black p-10 shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <p className="font-mono text-gray-700 leading-relaxed mb-8 text-base">
            For over 15 years, Galaxy World has been the underground's printing
            partner. We're not just a print shop—we're your collaborators in
            bringing raw, authentic visions to life with precision and soul.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-cyan-400/10 border-4 border-cyan-500 p-6 relative tape">
              <Award className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="font-display text-2xl font-bold text-black mb-3 tracking-wide">
                OUR MISSION
              </h3>
              <p className="font-mono text-gray-700 text-sm leading-relaxed">
                Deliver exceptional printing that rejects corporate polish and
                embraces authentic, handcrafted excellence.
              </p>
            </div>

            <div className="bg-orange-500/10 border-4 border-orange-500 p-6 relative tape">
              <Sparkles className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="font-display text-2xl font-bold text-black mb-3 tracking-wide">
                OUR APPROACH
              </h3>
              <p className="font-mono text-gray-700 text-sm leading-relaxed">
                Combining analog craftsmanship with modern technology—every
                project gets the attention it deserves.
              </p>
            </div>
          </div>

          <p className="font-mono text-gray-700 leading-relaxed text-base">
            Our commitment to authenticity, combined with state-of-the-art
            equipment and a team of dedicated craftspeople, ensures every
            project becomes a testament to independent creativity and
            innovation.
          </p>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-20 min-h-screen bg-indie-cream">
      <div className="bg-white border-b-8 border-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
            GET IN <span className="text-orange-500 scribble">TOUCH</span>
          </h1>
          <p className="font-mono text-gray-700 text-lg">
            Let's collaborate on your next project
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white border-4 border-black overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <div className="grid md:grid-cols-2">
            <div className="bg-black p-10 text-white border-r-4 border-black">
              <h2 className="font-display text-3xl font-bold mb-8 tracking-wide">
                CONTACT INFO
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-cyan-400 p-3 border-2 border-white mr-5 transform -rotate-2">
                    <Mail className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono font-bold mb-2 uppercase text-sm">
                      Email
                    </p>
                    <p className="font-mono text-gray-300 text-sm">
                      info@galaxyworld.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-500 p-3 border-2 border-white mr-5 transform rotate-2">
                    <Phone className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono font-bold mb-2 uppercase text-sm">
                      Phone
                    </p>
                    <p className="font-mono text-gray-300 text-sm">
                      +971 XX XXX XXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10">
              <h2 className="font-display text-3xl font-bold text-black mb-8 tracking-wide">
                STUDIO HOURS
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b-2 border-black">
                  <span className="font-mono text-black font-bold uppercase text-sm">
                    Mon - Fri
                  </span>
                  <span className="font-mono text-cyan-500 font-bold">
                    9AM - 6PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b-2 border-black">
                  <span className="font-mono text-black font-bold uppercase text-sm">
                    Saturday
                  </span>
                  <span className="font-mono text-cyan-500 font-bold">
                    10AM - 4PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-mono text-black font-bold uppercase text-sm">
                    Sunday
                  </span>
                  <span className="font-mono text-gray-500 font-bold">
                    CLOSED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-black border-t-8 border-cyan-500 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl">🌌</div>
              <div className="font-display text-xl text-white tracking-wide">
                GALAXY WORLD
              </div>
            </div>
            <p className="font-mono text-gray-400 text-sm leading-relaxed">
              Underground printing
              <br />
              for independent minds
            </p>
          </div>

          <div>
            <h4 className="font-mono font-bold text-white mb-6 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["home", "products", "about", "contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className="font-mono block text-gray-400 hover:text-cyan-400 transition-colors uppercase text-sm"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold text-white mb-6 uppercase text-sm tracking-wider">
              Categories
            </h4>
            <div className="font-mono space-y-3 text-gray-400 text-sm">
              {categories.slice(0, 4).map((cat) => (
                <div
                  key={cat.id}
                  className="hover:text-cyan-400 transition-colors cursor-pointer uppercase"
                >
                  {cat.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold text-white mb-6 uppercase text-sm tracking-wider">
              Start Project
            </h4>
            <button
              onClick={() => {
                setCurrentPage("quote");
                setQuoteTab("standard");
              }}
              className="font-mono bg-orange-500 text-black px-6 py-3 font-bold uppercase text-sm hover:scale-105 transition-transform inline-flex items-center border-2 border-black transform -rotate-2"
            >
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="font-mono border-t-2 border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">
            © 2026 Galaxy World // All Rights Reserved
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 transition-colors uppercase"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 transition-colors uppercase"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-indie-cream">
      <Navbar />
      {currentPage === "home" && <HomePage />}
      {currentPage === "products" && <ProductsPage />}
      {currentPage === "quote" && <QuotePage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "contact" && <ContactPage />}
      <Footer />
    </div>
  );
}
