import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const [badgePop, setBadgePop] = useState(false);

  // Animate badge on count change
  useEffect(() => {
    if (totalItems === 0) return;
    setBadgePop(true);
    const t = setTimeout(() => setBadgePop(false), 300);
    return () => clearTimeout(t);
  }, [totalItems]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const linkClass =
    "font-mono text-sm uppercase tracking-wider text-black hover:text-cyan-500 transition-colors font-bold border-b-2 border-transparent hover:border-cyan-500";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b-4 border-black ${
        scrolled ? "bg-white shadow-2xl" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="group flex items-center space-x-3 transition-all hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Galaxy World Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass}>home</Link>
            <Link to="/products" className={linkClass}>products</Link>
            <Link to="/about" className={linkClass}>about</Link>
            <Link to="/contact" className={linkClass}>contact</Link>
            <Link to="/gallery" className={linkClass}>gallery</Link>

            {/* Cart icon */}
            <button
              onClick={openCart}
              aria-label={`Open cart (${totalItems} items)`}
              className="relative group p-2 border-2 border-black hover:bg-black transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-black group-hover:text-cyan-400 transition-colors" />
              {totalItems > 0 && (
                <span
                  className={`absolute -top-2 -right-2 bg-cyan-400 text-black font-mono text-[10px] font-bold w-5 h-5 flex items-center justify-center border-2 border-black transition-transform ${
                    badgePop ? "scale-125" : "scale-100"
                  }`}
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            {/* Get Quote */}
            <Link
              to="/quote"
              className="stamp bg-orange-500 text-black px-5 py-2 text-sm uppercase tracking-wider font-bold hover:scale-105 transition-transform font-mono border-black"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile: cart + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={openCart}
              aria-label={`Open cart (${totalItems} items)`}
              className="relative p-2 border-2 border-black hover:bg-black transition-colors group"
            >
              <ShoppingCart className="w-5 h-5 text-black group-hover:text-cyan-400 transition-colors" />
              {totalItems > 0 && (
                <span
                  className={`absolute -top-2 -right-2 bg-cyan-400 text-black font-mono text-[10px] font-bold w-5 h-5 flex items-center justify-center border-2 border-black transition-transform ${
                    badgePop ? "scale-125" : "scale-100"
                  }`}
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black"
              aria-label="Toggle menu"
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

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-black">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" onClick={handleLinkClick} className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono">home</Link>
            <Link to="/products" onClick={handleLinkClick} className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono">products</Link>
            <Link to="/about" onClick={handleLinkClick} className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono">about</Link>
            <Link to="/contact" onClick={handleLinkClick} className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono">contact</Link>
            <Link to="/gallery" onClick={handleLinkClick} className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono">gallery</Link>
            <Link
              to="/quote"
              onClick={handleLinkClick}
              className="block w-full text-left py-3 bg-orange-500 text-black font-bold uppercase text-sm border-3 border-black mt-3 font-mono px-3"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
