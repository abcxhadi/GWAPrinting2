import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Settings } from "lucide-react";
import { categories, sampleProducts } from "../data/products";

const normalizeSearchText = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");

const isSubsequence = (query, target) => {
  if (!query || !target) return false;
  let i = 0;
  let j = 0;
  while (i < query.length && j < target.length) {
    if (query[i] === target[j]) i += 1;
    j += 1;
  }
  return i === query.length;
};

export function ProductsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page") || "1", 10);

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const queryCategory = queryParams.get("category");
    // This flatMap logic ensures that all category IDs, subcategory IDs, and product IDs (from nested 'products' arrays)
    // are included in `allKnownCategories` for accurate URL parameter validation.
    const allKnownCategories = categories.flatMap(cat => {
      if (cat.subcategories) {
        return [cat.id, ...cat.subcategories.flatMap(sub => {
          if (sub.products) {
            return [sub.id, ...sub.products.map(p => p.id)];
          }
          return [sub.id];
        })];
      }
      return [cat.id];
    });

    if (allKnownCategories.includes(queryCategory)) {
      return queryCategory;
    }
    return "all"; // Default to "all" if not found
  });
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const productsPerPage = 9;
  // This is a placeholder for future functionality, as the detail page was not implemented
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Effect to synchronize state with URL query parameters
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== "all") {
      params.set("category", selectedCategory);
    }
    if (currentPage !== 1) {
      params.set("page", currentPage.toString());
    }
    navigate({ search: params.toString() }, { replace: true });
  }, [selectedCategory, currentPage, navigate]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleProductClick = (product) => {
    navigate(`/quote?product=${encodeURIComponent(product.name)}`);
  };

  const categoryNameById = useMemo(() => {
    const map = new Map();
    categories.forEach((cat) => {
      map.set(cat.id, cat.name);
      cat.subcategories?.forEach((sub) => {
        map.set(sub.id, sub.name);
        sub.products?.forEach((p) => map.set(p.id, p.name));
      });
    });
    return map;
  }, []);

  const categoryDescriptionById = useMemo(() => {
    const map = new Map();
    categories.forEach((cat) => {
      if (cat.description) map.set(cat.id, cat.description);
      cat.subcategories?.forEach((sub) => {
        if (sub.description) map.set(sub.id, sub.description);
      });
    });
    return map;
  }, []);

  const searchOptions = useMemo(() => {
    const options = [{ id: "all", label: "All Products" }];
    categories.forEach((cat) => {
      options.push({ id: cat.id, label: cat.name.toUpperCase() });
      cat.subcategories?.forEach((sub) => {
        options.push({ id: sub.id, label: `— ${sub.name}` });
      });
    });
    return options;
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return sampleProducts;
    }

    // Check if it's a top-level category (e.g., "offset-printed-products")
    const foundTopCategory = categories.find(cat => cat.id === selectedCategory);
    if (foundTopCategory) {
      if (foundTopCategory.id === "other-printing-specialty-services") {
        const intermediateCategoryIds = foundTopCategory.subcategories.map(sub => sub.id);
        return sampleProducts.filter(p => intermediateCategoryIds.includes(p.intermediateCategoryId));
      } else {
        return sampleProducts.filter(p => p.topCategoryId === selectedCategory);
      }
    }

    let foundIntermediateCategory = null;
    for (const topCat of categories) {
      if (topCat.subcategories) {
        foundIntermediateCategory = topCat.subcategories.find(
          (subCat) => subCat.id === selectedCategory,
        );
        if (foundIntermediateCategory) break;
      }
    }

    if (foundIntermediateCategory) {
      return sampleProducts.filter(p => p.intermediateCategoryId === selectedCategory);
    }

    return sampleProducts.filter(p => p.productSlugId === selectedCategory);
  }, [selectedCategory]);

  const rankedProducts = useMemo(() => {
    const query = normalizeSearchText(searchQuery);
    if (!query) return filteredProducts;
    const queryCompact = query.replace(/\s+/g, "");
    const tokens = query.split(" ").filter(Boolean);

    const scoreProduct = (product) => {
      const name = normalizeSearchText(product.name);
      const slug = normalizeSearchText(product.productSlugId || "");
      const topName = normalizeSearchText(
        categoryNameById.get(product.topCategoryId) || "",
      );
      const subName = normalizeSearchText(
        categoryNameById.get(product.intermediateCategoryId) || "",
      );
      const categoryText = `${topName} ${subName}`.trim();

      let score = 0;
      if (name === query) score += 1000;
      if (name.startsWith(query)) score += 700;
      if (name.includes(query)) score += 500;
      if (slug.includes(query)) score += 300;
      if (categoryText.includes(query)) score += 150;

      tokens.forEach((token) => {
        if (token.length < 2) return;
        if (name.includes(token)) score += 120;
        else if (slug.includes(token)) score += 80;
        else if (categoryText.includes(token)) score += 40;
      });

      const nameCompact = name.replace(/\s+/g, "");
      if (isSubsequence(queryCompact, nameCompact)) score += 120;

      return score;
    };

    const scored = filteredProducts
      .map((product) => ({ product, score: scoreProduct(product) }))
      .filter((item) => item.score > 0)
      .sort(
        (a, b) =>
          b.score - a.score || a.product.name.localeCompare(b.product.name),
      );

    return scored.map((item) => item.product);
  }, [filteredProducts, searchQuery, categoryNameById]);

  const currentCategoryDisplay = useMemo(() => {
    if (selectedCategory === "all") {
      return null;
    }

    // Try to find as a top-level category (e.g., "offset-printed-products")
    const topCat = categories.find(cat => cat.id === selectedCategory);
    if (topCat) {
      return topCat;
    }

    // Try to find as an intermediate category (e.g., "business-cards" or "business-essentials-other")
    let intermediateCat = null;
    for (const cat of categories) {
      if (cat.subcategories) {
        intermediateCat = cat.subcategories.find(sub => sub.id === selectedCategory);
        if (intermediateCat) return intermediateCat;
      }
    }

    // Finally, try to find as a product slug (leaf-level)
    let productSlug = null;
    for (const cat of categories) {
      if (cat.subcategories) {
        for (const sub of cat.subcategories) {
          if (sub.products) {
            productSlug = sub.products.find(p => p.id === selectedCategory);
            if (productSlug) return productSlug;
          }
        }
      }
    }
    return null;
  }, [selectedCategory]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = rankedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(rankedProducts.length / productsPerPage);

  const getTurnaroundLabel = (product) => {
    if (product.topCategoryId !== "offset-printed-products") return null;
    if (product.turnaround) return `Turnaround: ${product.turnaround}`;
    if (!product.prices || product.prices.length === 0) return null;
    const unique = Array.from(
      new Set(product.prices.map((p) => p.turnaround).filter(Boolean)),
    );
    if (unique.length === 0) return null;
    if (unique.length === 1) return `Turnaround: ${unique[0]}`;
    return "Turnaround: varies";
  };

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
              : currentCategoryDisplay?.name.toUpperCase()}
          </h1>
          <p className="font-mono text-gray-700 text-lg">
            {selectedCategory === "all"
              ? "// Explore our comprehensive product catalog"
              : "// " + currentCategoryDisplay?.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block w-72">
            <div className="bg-white border-4 border-black p-6 sticky top-24 shadow-[6px_6px_0_rgba(0,0,0,1)]">
              <h3 className="font-display text-2xl font-bold text-black mb-6 tracking-wide">
                CATEGORIES
              </h3>

              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setCurrentPage(1);
                }}
                className={`font-mono w-full text-left px-4 py-3 mb-3 transition-all font-bold uppercase text-sm border-2 ${
                  selectedCategory === "all"
                    ? "bg-[#14A4E6] border-black text-white shadow-md"
                    : "bg-white border-gray-300 text-gray-700 hover:border-black"
                }`}
              >
                All Products
              </button>

              {categories.map((topCat) => (
                <div key={topCat.id} className="mb-4">
                  <button
                    onClick={() => {
                      setSelectedCategory(topCat.id);
                      setCurrentPage(1);
                    }}
                    className={`font-mono w-full text-left px-4 py-3 mb-3 transition-all font-bold text-sm border-2 ${
                      selectedCategory === topCat.id ||
                      topCat.subcategories?.some(sub =>
                        sub.id === selectedCategory
                      )
                        ? "bg-[#14A4E6] border-black text-white shadow-md"
                        : "bg-white border-gray-300 text-gray-700 hover:border-black"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3 grayscale">{topCat.icon}</span>
                      <div className="text-xs">{topCat.name.toUpperCase()}</div>
                    </div>
                  </button>

                  {/* Render intermediate subcategories for top-level categories */}
                  {(topCat.id === "offset-printed-products" || selectedCategory === topCat.id || topCat.subcategories?.some(sub => sub.id === selectedCategory || sub.products?.some(p => p.id === selectedCategory))) && (
                    <div className="ml-4 border-l-2 border-gray-300 pl-4">
                      {topCat.subcategories?.map((intermediateCat) => (
                        <div key={intermediateCat.id} className="mb-2">
                          <button
                            onClick={() => {
                              setSelectedCategory(intermediateCat.id);
                              setCurrentPage(1);
                            }}
                            className={`font-mono w-full text-left px-4 py-2 transition-all text-xs border-2 ${
                              selectedCategory === intermediateCat.id
                                ? "bg-[#2F67EA] border-black text-white shadow-md"
                                : "bg-white border-gray-200 text-gray-600 hover:border-black"
                            }`}
                          >
                            <div className="flex items-center">
                              {intermediateCat.icon && <span className="text-lg mr-2 grayscale">{intermediateCat.icon}</span>}
                              <span>{intermediateCat.name.toUpperCase()}</span>
                            </div>
                          </button>

                          {/* Leaf-level products are no longer rendered directly in the sidebar */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="bg-white border-4 border-black p-4 mb-8 shadow-[6px_6px_0_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="font-mono flex-1 min-w-0 border-4 border-black p-3 focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowMobileFilters((prev) => !prev)}
                  className="md:hidden border-4 border-black bg-white p-3 hover:bg-cyan-400 transition-colors"
                  aria-label="Toggle category filter"
                >
                  <Settings className="h-5 w-5 text-black" />
                </button>
              </div>
              {showMobileFilters && (
                <div className="mt-4 md:hidden">
                  <label className="font-mono block font-bold text-black mb-3 uppercase text-xs">
                    Categories
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                      setShowMobileFilters(false);
                    }}
                    className="font-mono w-full border-4 border-black p-3 focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    {searchOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white border-4 border-black hover:border-cyan-500 overflow-hidden transition-all duration-300"
                >
                  <div className="relative bg-indie-cream h-56 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full max-w-full block group-hover:scale-110 transition-transform duration-300"
                    />
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
                    {categoryDescriptionById.get(product.intermediateCategoryId) && (
                      <p className="font-mono text-[10px] text-gray-600 mb-2 uppercase tracking-wide">
                        {categoryDescriptionById.get(product.intermediateCategoryId)}
                      </p>
                    )}

                    {product.price && (
                      <p className="font-mono text-xs text-black mb-2">
                        {product.price}
                      </p>
                    )}
                    {getTurnaroundLabel(product) && (
                      <p className="font-mono text-xs text-black mb-2">
                        {getTurnaroundLabel(product)}
                      </p>
                    )}

                    <button
                      onClick={() => handleProductClick(product)}
                      className="font-mono w-full bg-black text-white py-3 font-bold uppercase text-sm hover:bg-cyan-500 hover:text-black transition-colors border-2 border-black flex items-center justify-center"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center mt-12 gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 bg-black text-white font-mono uppercase text-xs md:text-sm font-bold border-2 border-black hover:bg-cyan-500 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-2 font-mono uppercase text-xs md:text-sm font-bold border-2 border-black ${
                      currentPage === index + 1
                        ? "bg-cyan-400 text-black shadow-[4px_4px_0_rgba(0,0,0,1)]"
                        : "bg-white text-gray-700 hover:border-black"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 bg-black text-white font-mono uppercase text-xs md:text-sm font-bold border-2 border-black hover:bg-cyan-500 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
