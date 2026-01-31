import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories, sampleProducts } from "../data/products";

export function ProductsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.selectedCategory || "all"
  );
  // This is a placeholder for future functionality, as the detail page was not implemented
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const handleProductClick = (product) => {
    // Placeholder for navigation to a product detail page
    // For now, it does nothing
    setSelectedProduct(product);
    console.log("Selected Product:", product);
    // navigate(`/products/${product.id}`);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory);
  const currentCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-indie-cream">
      <div className="bg-white border-b-8 border-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/"
            className="font-mono text-black hover:text-cyan-500 transition-colors flex items-center mb-6 font-bold uppercase text-sm"
          >
            <ArrowRight className="rotate-180 mr-2 h-4 w-4" />
            Back to Home
          </Link>
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
                className={`font-mono w-full text-left px-4 py-3 mb-3 transition-all font-bold uppercase text-sm border-2 ${
                  selectedCategory === "all"
                    ? "bg-cyan-400 border-black text-black shadow-[4px_4px_0_rgba(0,0,0,1)]"
                    : "bg-white border-gray-300 text-gray-700 hover:border-black"
                }`}
              >
                All Products
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`font-mono w-full text-left px-4 py-3 mb-3 transition-all font-bold text-sm border-2 ${
                    selectedCategory === cat.id
                      ? "bg-cyan-400 border-black text-black shadow-[4px_4px_0_rgba(0,0,0,1)]"
                      : "bg-white border-gray-300 text-gray-700 hover:border-black"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3 grayscale">{cat.icon}</span>
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
                          className={`text-lg ${
                            i < Math.floor(product.rating)
                              ? "text-orange-500"
                              : "text-gray-300"
                          }`}
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
                      onClick={() => handleProductClick(product)}
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
}
