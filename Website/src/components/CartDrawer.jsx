import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { X, Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const { items, isOpen, totalItems, removeFromCart, updateQty, clearCart, closeCart } =
    useCart();
  const navigate = useNavigate();
  const drawerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, closeCart]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") closeCart(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeCart]);

  const handleRequestQuote = () => {
    const cartSummary = items
      .map((i) => `• ${i.name} (×${i.quantity})`)
      .join("\n");
    closeCart();
    navigate("/quote", {
      state: {
        initialTab: "standard",
        cartItems: items,
        cartNotes: `Items from my cart:\n${cartSummary}`,
      },
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-lg z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-white border-l-4 border-black flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ── Header ── */}
        <div className="bg-black px-6 py-5 flex items-center justify-between border-b-4 border-black flex-shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-cyan-400" />
            <h2 className="font-display text-2xl tracking-widest text-white">
              YOUR CART
            </h2>
            {totalItems > 0 && (
              <span className="bg-cyan-400 text-black font-mono text-xs font-bold px-2 py-0.5 border-2 border-black">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-white hover:text-cyan-400 transition-colors border-2 border-white/20 hover:border-cyan-400 p-1.5"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <div className="font-display text-8xl text-gray-200 mb-4 select-none">
                EMPTY
              </div>
              <div className="w-16 h-1 bg-black mb-6" />
              <p className="font-mono text-gray-500 text-sm leading-relaxed">
                // No items added yet.
                <br />
                Browse our products and add<br />
                items to request a quote.
              </p>
              <button
                onClick={() => { closeCart(); navigate("/products"); }}
                className="mt-8 font-mono bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-cyan-500 hover:text-black transition-colors flex items-center gap-2"
              >
                Browse Products
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Item list */
            <ul className="divide-y-4 divide-black">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 p-5 group hover:bg-indie-cream transition-colors">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 border-2 border-black overflow-hidden bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-cyan-600 uppercase tracking-widest mb-0.5">
                      {item.subcategory.replace(/-/g, " ")}
                    </p>
                    <h4 className="font-display text-base tracking-wide text-black leading-tight line-clamp-2">
                      {item.name.toUpperCase()}
                    </h4>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors font-bold"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-sm font-bold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 border-2 border-black flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 transition-colors font-bold"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start text-gray-300 hover:text-black transition-colors mt-1 p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── Footer (only when items exist) ── */}
        {items.length > 0 && (
          <div className="border-t-4 border-black p-5 flex-shrink-0 bg-white">
            {/* Item count summary */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                {totalItems} item{totalItems !== 1 ? "s" : ""} in cart
              </span>
              <button
                onClick={clearCart}
                className="font-mono text-xs text-gray-400 hover:text-black underline underline-offset-2 transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                Clear all
              </button>
            </div>

            {/* Separator note */}
            <p className="font-mono text-[10px] text-gray-400 mb-4 leading-relaxed">
              // No payment required — we'll send you a personalised quote
              based on your selection.
            </p>

            {/* CTA */}
            <button
              onClick={handleRequestQuote}
              className="w-full bg-orange-500 text-black font-mono font-bold uppercase text-sm py-4 border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Request Quote for All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
