import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Sparkles, Zap, ArrowRight } from "lucide-react";
import { categories } from "../data/products";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const galleryItems = [
  { type: "video", src: "/images/gallery/1.mp4" },
  { type: "image", src: "/images/gallery/2.jpeg" },
  { type: "image", src: "/images/gallery/3.jpeg" },
  { type: "image", src: "/images/gallery/4.jpeg" },
  { type: "image", src: "/images/gallery/5.jpeg" },
  { type: "image", src: "/images/gallery/6.jpeg" },
  { type: "image", src: "/images/gallery/7.jpeg" },
  { type: "image", src: "/images/gallery/8.jpeg" },
  { type: "image", src: "/images/gallery/9.jpeg" },
  { type: "image", src: "/images/gallery/10.jpeg" },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.21 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.23 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.23.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.24.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.25.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.26 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.26.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.30 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.30.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.31.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.32 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.32 (2).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.32.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.33 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.34.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.35 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.35 (2).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.36.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.37 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.37.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.38.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.39 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.39.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.40.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.41.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.42.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.43.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.44.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.45.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.48.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.50.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.51 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.51.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.52 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.52.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.53.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.54.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.56.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.57 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.57.jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.58 (1).jpeg",
  },
  {
    type: "image",
    src: "/images/gallery/WhatsApp Image 2026-02-06 at 10.58.58.jpeg",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.20.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.22.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.25.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.26.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.28.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.29.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.30.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.31.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.36.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.38 (1).mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.38.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.40.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.42.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.47.mp4",
  },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2026-02-06 at 10.58.50.mp4",
  },
];
export function HomePage() {
  const navigate = useNavigate();
  const [statsRef, statsVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const handleCategoryClick = (categoryId) => {
    navigate("/products", { state: { selectedCategory: categoryId } });
  };

  return (
    <div className="pt-0 font-sans font-bold">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#14A4E6] to-[#2F67EA]">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-32">
          <div className="inline-flex items-center space-x-3 bg-orange-500/20 border-2 border-purple px-6 py-3 mb-8 backdrop-blur-sm transform -rotate-2">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-xl tracking-wider font-mono">
              19+ YEARS // PRINTING
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-none">
            <span className="text-white block mb-4">TRANSFORM YOUR</span>
            <span className="text-cyan-400 block text-7xl md:text-9xl glitch">
              VISION
            </span>
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
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
              WHAT CAN WE <span className="text-cyan-500 scribble">CREATE</span>
              ?
            </h2>
            <p className="text-gray-700 text-lg font-mono">
              Choose from our extensive range of print services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
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
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
              GALLERY <span className="text-orange-500 scribble">SHOWCASE</span>
            </h2>
            <p className="font-mono text-gray-700 text-lg">
              A glimpse of finished work, materials, and in‑process production
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={`${item.type}-${index}`}
                className="mb-6 break-inside-avoid border-4 border-black bg-indie-cream shadow-[6px_6px_0_rgba(0,0,0,1)]"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt="Gallery item"
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => {
                      e.currentTarget.playbackRate = 2;
                    }}
                    className="w-full h-auto block"
                  />
                )}
              </div>
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
