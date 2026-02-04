import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b-4 border-black ${
        scrolled ? "bg-white shadow-2xl" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
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

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-mono text-sm uppercase tracking-wider text-black hover:text-cyan-500 transition-colors font-bold border-b-2 border-transparent hover:border-cyan-500"
            >
              home
            </Link>
            <Link
              to="/products"
              className="font-mono text-sm uppercase tracking-wider text-black hover:text-cyan-500 transition-colors font-bold border-b-2 border-transparent hover:border-cyan-500"
            >
              products
            </Link>
            <Link
              to="/about"
              className="font-mono text-sm uppercase tracking-wider text-black hover:text-cyan-500 transition-colors font-bold border-b-2 border-transparent hover:border-cyan-500"
            >
              about
            </Link>
            <Link
              to="/contact"
              className="font-mono text-sm uppercase tracking-wider text-black hover:text-cyan-500 transition-colors font-bold border-b-2 border-transparent hover:border-cyan-500"
            >
              contact
            </Link>

            <Link
              to="/quote"
              className="stamp bg-orange-500 text-black px-5 py-2 text-sm uppercase tracking-wider font-bold hover:scale-105 transition-transform font-mono border-black"
            >
              Get Quote
            </Link>
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
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono"
            >
              home
            </Link>
            <Link
              to="/products"
              onClick={handleLinkClick}
              className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono"
            >
              products
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono"
            >
              about
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block w-full text-left py-2 text-black font-bold uppercase text-sm hover:text-cyan-500 font-mono"
            >
              contact
            </Link>
            <Link
              to="/quote"
              onClick={handleLinkClick}
              className="block w-full text-left py-3 bg-orange-500 text-black font-bold uppercase text-sm border-3 border-black mt-3 font-mono"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
