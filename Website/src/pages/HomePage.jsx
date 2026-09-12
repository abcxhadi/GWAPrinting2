import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Sparkles, Zap, ArrowRight, Camera, ShoppingCart, Check } from "lucide-react";
import { categories } from "../data/products";
import { galleryItems } from "../data/gallery";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useCart } from "../context/CartContext";

// Hand-picked preview images (indices into galleryItems — images only, no videos)
const previewIndices = [0, 1, 2, 3, 4, 5, 6, 7];
const previewItems = previewIndices
  .map((i) => galleryItems[i])
  .filter((item) => item && item.type === "image");

export function HomePage() {
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();
  // Per-card "Added!" flash: { [cardId]: boolean }
  const [addedMap, setAddedMap] = useState({});

  const handleAddToCart = useCallback((card) => {
    // Build a minimal product-like object for the cart
    addToCart({ id: card.id, name: card.name, image: card.image, intermediateCategoryId: card.subcat });
    setAddedMap((prev) => ({ ...prev, [card.id]: true }));
    setTimeout(() => setAddedMap((prev) => ({ ...prev, [card.id]: false })), 1500);
  }, [addToCart]);

  const [statsRef, statsVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });
  const [galleryRef, galleryVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const handleCategoryClick = (categoryId) => {
    navigate("/products", { state: { selectedCategory: categoryId } });
  };

  return (
    <div className="pt-0 font-sans font-bold">
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-32">
          <div className="inline-flex items-center space-x-3 bg-orange-500/20 border-2 border-purple px-6 py-3 mb-8 backdrop-blur-sm transform -rotate-2">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-xl tracking-wider font-mono">
              19+ YEARS // PRINTING
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-none">
            <span className="text-white block mb-4">TRANSFORM YOUR VISION</span>
            <span className="text-white block text-5xl md:text-7xl mt-4">
              INTO <span className="text-cyan-400 scribble">REALITY</span>
            </span>
          </h1>

          <p
            className="font-mono text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto 
│    leading-relaxed"
          >
            From everyday prints to large-scale exhibition
            <br />
            <span className="text-white">
              we deliver print solutions that stand out.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/products"
              className="relative bg-cyan-400 text-black px-8 py-4 text-lg font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1 font-mono"
            >
              Explore Catalog
            </Link>

            <Link
              to="/quote"
              state={{ initialTab: "custom" }}
              className="font-bold text-lg uppercase tracking-wider bg-transparent border-3 border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 transform hover:rotate-1 font-mono"
            >
              <Zap className="inline mr-2 h-5 w-5" />
              Custom Job
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-xs tracking-wider mb-2 font-mono">
            SCROLL
          </div>
          <ChevronDown className="w-8 h-8 text-orange-500 mx-auto" />
        </div>
      </div>

      <div className="bg-indie-cream py-24 border-t-8 border-black relative torn-edge">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border-2 border-cyan-500 px-4 py-1.5 mb-4 transform -rotate-1">
                <span className="font-mono text-cyan-600 text-xs font-bold uppercase tracking-wider">
                  Our Catalog
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-black tracking-wide leading-none">
                PROD<span className="text-cyan-500 scribble">UCTS</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_rgba(0,217,255,1)] hover:shadow-[2px_2px_0_rgba(0,217,255,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 self-start sm:self-auto"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── Offset Printed Products Sub-section ── */}
          <div className="mb-16">
            {/* Sub-section header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🖨️</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-black tracking-wide">
                    OFFSET PRINTED PRODUCTS
                  </h3>
                  <p className="font-mono text-gray-500 text-xs mt-0.5">
                    High-quality traditional offset printing
                  </p>
                </div>
              </div>
              <Link
                to="/products?category=offset-printed-products"
                className="group hidden sm:inline-flex items-center gap-2 font-mono text-sm font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-cyan-400 transition-all duration-200 shadow-[3px_3px_0_rgba(0,0,0,1)] hover:shadow-[1px_1px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
              >
                Explore All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Product cards — horizontal scroll on mobile, 4-col grid on desktop */}
            <div
              className="flex gap-5 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-4 sm:overflow-visible snap-x snap-mandatory sm:snap-none
                            [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-black/10 [&::-webkit-scrollbar-thumb]:bg-black/40"
            >
              {[
                {
                  id: "matt-lamination-350gsm",
                  name: "Business Card – Matt Lamination",
                  subcat: "Business Cards",
                  image:
                    "/images/offsetPrinting/Business Cards/matt-lamination-350gsm.png",
                  badge: "🖨️",
                },
                {
                  id: "brochure-b4-(glossy-paper-170gsm)",
                  name: "Brochure B4 – Glossy 170gsm",
                  subcat: "Brochures",
                  image:
                    "/images/offsetPrinting/Brochures/brochure-b4-(glossy-paper-170gsm).png",
                  badge: "📰",
                },
                {
                  id: "flyer-real-size-(glossy-paper-170gsm)",
                  name: "Flyer Real Size – Glossy 170gsm",
                  subcat: "Flyers",
                  image:
                    "/images/offsetPrinting/Flyers/flyer-real-size-(glossy-paper-170gsm).png",
                  badge: "🪶",
                },
                {
                  id: "spot-uv-matt-lamination-400gsm",
                  name: "Premium BC – Spot UV Matt Lam.",
                  subcat: "Premium Business Cards",
                  image:
                    "/images/offsetPrinting/Premium Business Cards/spot-uv-matt-lamination-400gsm.png",
                  badge: "💎",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="group flex-shrink-0 w-56 sm:w-auto bg-white border-4 border-black hover:border-cyan-500 overflow-hidden transition-all duration-300 snap-start"
                >
                  <div className="relative bg-indie-cream h-56 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="object-cover w-full h-full max-w-full block group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-black mb-2 group-hover:text-cyan-500 transition-colors tracking-wide">
                      {product.name.toUpperCase()}
                    </h3>
                    <p className="font-mono text-[10px] text-gray-600 mb-4 uppercase tracking-wide">
                      {product.subcat}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`font-mono w-full py-3 font-bold uppercase text-sm border-2 border-black flex items-center justify-center transition-all duration-200 ${
                        addedMap[product.id]
                          ? "bg-cyan-400 text-black border-cyan-400"
                          : "bg-white text-black hover:bg-cyan-400 hover:border-cyan-400"
                      }`}
                    >
                      {addedMap[product.id] ? (
                        <><Check className="mr-2 h-4 w-4" /> Added!</>
                      ) : (
                        <><ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart</>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile-only explore link */}
            <div className="mt-4 sm:hidden">
              <Link
                to="/products?category=offset-printed-products"
                className="inline-flex items-center gap-2 font-mono text-sm font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-cyan-400 transition-all duration-200"
              >
                Explore All Offset Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── Other Printing & Specialty Services Sub-section ── */}
          <div>
            {/* Sub-section header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">✨</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-black tracking-wide">
                    OTHER PRINTING & SPECIALTY
                  </h3>
                  <p className="font-mono text-gray-500 text-xs mt-0.5">
                    Apparel, signage, gifts & more
                  </p>
                </div>
              </div>
              <Link
                to="/products?category=other-printing-specialty-services"
                className="group hidden sm:inline-flex items-center gap-2 font-mono text-sm font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-orange-400 transition-all duration-200 shadow-[3px_3px_0_rgba(0,0,0,1)] hover:shadow-[1px_1px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
              >
                Explore All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Product cards — horizontal scroll on mobile, 4-col grid on desktop */}
            <div
              className="flex gap-5 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-4 sm:overflow-visible snap-x snap-mandatory sm:snap-none
                            [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-black/10 [&::-webkit-scrollbar-thumb]:bg-black/40"
            >
              {[
                {
                  id: "t-shirts",
                  name: "T-Shirts",
                  subcat: "Apparel & Accessories",
                  image: "/images/t-shirts.jpg",
                  badge: "👚",
                },
                {
                  id: "flags",
                  name: "Flags",
                  subcat: "Signage & Event Displays",
                  image: "/images/flags.jpg",
                  badge: "📍",
                },
                {
                  id: "calendars",
                  name: "Calendars",
                  subcat: "Gifts & Promotional",
                  image: "/images/calendars.jpg",
                  badge: "🎁",
                },
                {
                  id: "flex-printing",
                  name: "Flex Printing",
                  subcat: "Marketing Materials",
                  image: "/images/flex-printing.jpg",
                  badge: "📈",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="group flex-shrink-0 w-56 sm:w-auto bg-white border-4 border-black hover:border-cyan-500 overflow-hidden transition-all duration-300 snap-start"
                >
                  <div className="relative bg-indie-cream h-56 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="object-cover w-full h-full max-w-full block group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-black mb-2 group-hover:text-cyan-500 transition-colors tracking-wide">
                      {product.name.toUpperCase()}
                    </h3>
                    <p className="font-mono text-[10px] text-gray-600 mb-4 uppercase tracking-wide">
                      {product.subcat}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`font-mono w-full py-3 font-bold uppercase text-sm border-2 border-black flex items-center justify-center transition-all duration-200 ${
                        addedMap[product.id]
                          ? "bg-cyan-400 text-black border-cyan-400"
                          : "bg-white text-black hover:bg-cyan-400 hover:border-cyan-400"
                      }`}
                    >
                      {addedMap[product.id] ? (
                        <><Check className="mr-2 h-4 w-4" /> Added!</>
                      ) : (
                        <><ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart</>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile-only explore link */}
            <div className="mt-4 sm:hidden">
              <Link
                to="/products?category=other-printing-specialty-services"
                className="inline-flex items-center gap-2 font-mono text-sm font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-orange-400 transition-all duration-200"
              >
                Explore All Specialty Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Preview */}
      <div
        className="bg-white py-24 border-t-8 border-black overflow-hidden"
        ref={galleryRef}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border-2 border-orange-500 px-4 py-2 mb-6 transform rotate-1">
              <Camera className="w-4 h-4 text-orange-500" />
              <span className="font-mono text-orange-500 text-sm font-bold uppercase tracking-wider">
                Sneak Peek
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
              GALLERY <span className="text-orange-500 scribble">SHOWCASE</span>
            </h2>
            <p className="font-mono text-gray-700 text-lg">
              A glimpse of finished work, materials, and in‑process production
            </p>
          </div>

          {/* Preview Grid — 2 rows, asymmetric bento layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {previewItems.slice(0, 8).map((item, index) => {
              // Make first and last items span 2 columns on desktop for visual interest
              const isFeature = index === 0 || index === 5;
              return (
                <div
                  key={`preview-${index}`}
                  className={`group relative overflow-hidden border-3 border-black bg-white shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,217,255,1)] hover:-translate-y-1 transition-all duration-500 ${
                    isFeature ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  style={{
                    opacity: galleryVisible ? 1 : 0,
                    transform: galleryVisible
                      ? `rotate(${index % 2 === 0 ? -0.3 : 0.3}deg) translateY(0)`
                      : `rotate(0deg) translateY(30px)`,
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`,
                  }}
                >
                  <img
                    src={item.src}
                    alt="Gallery preview"
                    loading="lazy"
                    className={`w-full h-full object-cover block transition-transform duration-700 group-hover:scale-110 ${
                      isFeature ? "aspect-square" : "aspect-[4/3]"
                    }`}
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-14">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 bg-black text-white px-10 py-5 font-mono text-lg font-bold uppercase tracking-wider border-3 border-black shadow-[5px_5px_0_rgba(0,217,255,1)] hover:shadow-[3px_3px_0_rgba(0,217,255,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              <span>View Full Gallery</span>
              <span className="inline-flex items-center justify-center w-8 h-8 bg-cyan-400 text-black text-sm font-bold border-2 border-black">
                {galleryItems.length}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <p className="font-mono text-gray-500 text-sm mt-4">
              {galleryItems.filter((i) => i.type === "image").length} photos
              &amp; {galleryItems.filter((i) => i.type === "video").length}{" "}
              videos
            </p>
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
                desc: "Browse our catalog of print services",
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
        ref={statsRef}
        className="bg-indie-cream py-24 border-t-8 border-black"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { value: 19, suffix: "+", label: "YEARS", icon: "🏆" },
              { value: 5000, suffix: "+", label: "PROJECTS", icon: "✓" },
              { value: 98, suffix: "%", label: "SATISFACTION", icon: "★" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4 grayscale">{stat.icon}</div>
                <div className="font-display text-7xl font-bold text-cyan-500 mb-3">
                  <AnimatedCounter end={stat.value} visible={statsVisible} />
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
            join our journey!!
            <br />
            <span className="text-orange-500">
              // Dedicated to Creative Excellence
            </span>
          </p>
          <Link
            to="/quote"
            className="bg-cyan-400 text-black px-8 py-4 text-lg font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1 font-mono"
          >
            START PROJECT
          </Link>
        </div>
      </div>
    </div>
  );
}
