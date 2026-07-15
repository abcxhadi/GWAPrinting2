import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Play, Image, Film, Grid3X3 } from "lucide-react";
import { galleryItems } from "../data/gallery";

const ITEMS_PER_BATCH = 12;

export function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
  const [lightbox, setLightbox] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const sentinelRef = useRef(null);

  const filtered = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.type === filter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Infinite scroll
  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount((c) => Math.min(c + ITEMS_PER_BATCH, filtered.length));
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, filtered.length]);

  // Reset count on filter change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH);
  }, [filter]);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightbox, filtered.length]);

  const handleImageLoad = useCallback((src) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  }, []);

  const filterButtons = [
    { key: "all", label: "ALL", icon: <Grid3X3 className="w-4 h-4" /> },
    { key: "image", label: "PHOTOS", icon: <Image className="w-4 h-4" /> },
    { key: "video", label: "VIDEOS", icon: <Film className="w-4 h-4" /> },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-indie-cream">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm font-bold text-gray-600 hover:text-black transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          BACK TO HOME
        </Link>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-black tracking-wide mb-3">
              OUR <span className="text-cyan-500 scribble">GALLERY</span>
            </h1>
            <p className="font-mono text-gray-600 text-lg">
              {filtered.length} pieces of work — prints, materials \u0026 production
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key)}
                className={`inline-flex items-center gap-2 px-5 py-3 font-mono text-sm font-bold uppercase border-3 border-black transition-all duration-200 ${
                  filter === btn.key
                    ? "bg-black text-cyan-400 shadow-[3px_3px_0_rgba(0,217,255,1)]"
                    : "bg-white text-black hover:bg-gray-100 shadow-[3px_3px_0_rgba(0,0,0,1)]"
                }`}
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
          {visible.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="mb-5 break-inside-avoid group cursor-pointer"
              onClick={() => setLightbox(index)}
            >
              <div
                className="relative overflow-hidden border-3 border-black bg-white shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,217,255,1)] hover:-translate-y-1 transition-all duration-300"
                style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
              >
                {item.type === "image" ? (
                  <>
                    {!loadedImages.has(item.src) && (
                      <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse flex items-center justify-center">
                        <Image className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <img
                      src={item.src}
                      alt="Gallery work"
                      loading="lazy"
                      onLoad={() => handleImageLoad(item.src)}
                      className={`w-full h-auto block transition-all duration-500 group-hover:scale-105 ${
                        loadedImages.has(item.src) ? "opacity-100" : "opacity-0 absolute"
                      }`}
                    />
                  </>
                ) : (
                  <div className="relative">
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-auto block transition-all duration-500 group-hover:scale-105"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-14 h-14 bg-black/70 backdrop-blur-sm border-2 border-cyan-400 flex items-center justify-center">
                        <Play className="w-6 h-6 text-cyan-400 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-3 left-3">
                    <span className="font-mono text-white text-xs font-bold uppercase bg-black/50 px-2 py-1 backdrop-blur-sm border border-white/20">
                      {item.type === "image" ? "📸 Photo" : "🎬 Video"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite scroll sentinel */}
        {hasMore && (
          <div ref={sentinelRef} className="flex justify-center py-12">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 animate-pulse border border-black"></div>
              <span className="font-mono text-sm font-bold text-gray-500 uppercase tracking-wider">
                Loading more...
              </span>
              <div className="w-3 h-3 bg-orange-500 animate-pulse border border-black" style={{ animationDelay: "0.3s" }}></div>
            </div>
          </div>
        )}

        {!hasMore && filtered.length > 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-gray-400 text-sm font-bold uppercase tracking-wider">
              — That's everything —
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + filtered.length) % filtered.length); }}
            className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % filtered.length); }}
            className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {filtered[lightbox]?.type === "image" ? (
              <img
                src={filtered[lightbox].src}
                alt="Gallery full view"
                className="max-w-full max-h-[85vh] object-contain border-4 border-white/20"
              />
            ) : (
              <video
                src={filtered[lightbox]?.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="max-w-full max-h-[85vh] object-contain border-4 border-white/20"
              />
            )}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="font-mono text-white/60 text-sm font-bold">
              {lightbox + 1} / {filtered.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
