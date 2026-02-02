import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/products";

export function Footer() {
  return (
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
              printing
              <br />
              for independent minds
            </p>
          </div>

          <div>
            <h4 className="font-mono font-bold text-white mb-6 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link
                to="/"
                className="font-mono block text-gray-400 hover:text-cyan-400 transition-colors uppercase text-sm"
              >
                home
              </Link>
              <Link
                to="/products"
                className="font-mono block text-gray-400 hover:text-cyan-400 transition-colors uppercase text-sm"
              >
                products
              </Link>
              <Link
                to="/about"
                className="font-mono block text-gray-400 hover:text-cyan-400 transition-colors uppercase text-sm"
              >
                about
              </Link>
              <Link
                to="/contact"
                className="font-mono block text-gray-400 hover:text-cyan-400 transition-colors uppercase text-sm"
              >
                contact
              </Link>
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
            <Link
              to="/quote"
              className="font-mono bg-orange-500 text-black px-6 py-3 font-bold uppercase text-sm hover:scale-105 transition-transform inline-flex items-center border-2 border-black transform -rotate-2"
            >
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
}
