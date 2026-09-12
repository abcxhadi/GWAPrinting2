import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, User, Send, Check, ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useCart } from "../context/CartContext";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_a080a5p";
const EMAILJS_TEMPLATE_ID = "template_g9qedug";
const EMAILJS_PUBLIC_KEY = "t1wqjJ33vKZ-iERJy";

emailjs.init(EMAILJS_PUBLIC_KEY);

// WhatsApp recipient number (no + or spaces)
const WHATSAPP_NUMBER = "971567869499";

export function QuotePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, removeFromCart, clearCart } = useCart();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    customProject: "",
  });

  // "custom" tab still available via direct navigation
  const [quoteTab, setQuoteTab] = useState(
    location.state?.initialTab || "standard"
  );

  useEffect(() => {
    if (location.state?.initialTab) {
      setQuoteTab(location.state.initialTab);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build cart summary
    const cartSummary =
      items.length > 0
        ? items.map((i) => `  • ${i.name} (×${i.quantity})`).join("\n")
        : "  (no cart items)";

    const notesText =
      quoteTab === "standard"
        ? formData.notes || "—"
        : formData.customProject || "—";

    // ── WhatsApp message ──
    const waMessage = [
      "🖨️ *GWA PRINTING — QUOTE REQUEST*",
      "",
      "👤 *Name:* " + formData.name,
      "📧 *Email:* " + formData.email,
      "📞 *Phone:* " + formData.phone,
      "",
      "🛒 *Cart Items:*",
      cartSummary,
      "",
      "📝 *Notes:*",
      "  " + notesText,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // ── EmailJS (parallel) ──
    let templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      product_name: cartSummary,
      notes: notesText,
    };

    // Strip empty fields
    for (const key in templateParams) {
      if (templateParams[key] === "" || templateParams[key] === null) {
        delete templateParams[key];
      }
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
      });

    // Mark submitted + clear
    setFormSubmitted(true);
    clearCart();
    setFormData({ name: "", email: "", phone: "", notes: "", customProject: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="pt-20 min-h-screen bg-indie-cream py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
            REQUEST <span className="text-cyan-500 scribble">QUOTE</span>
          </h1>
          <p className="font-mono text-gray-700">// Professional &amp; Timely Service</p>
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

            {/* Tab switcher — Standard / Custom */}
            <div className="flex border-b-4 border-black">
              <button
                type="button"
                onClick={() => setQuoteTab("standard")}
                className={`font-mono flex-1 py-5 font-bold uppercase text-sm transition-colors ${
                  quoteTab === "standard"
                    ? "bg-cyan-400 text-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Cart Request
              </button>
              <button
                type="button"
                onClick={() => setQuoteTab("custom")}
                className={`font-mono flex-1 py-5 font-bold uppercase text-sm transition-colors border-l-4 border-black ${
                  quoteTab === "custom"
                    ? "bg-cyan-400 text-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Custom Project
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-10">

              {quoteTab === "standard" ? (
                <>
                  {/* ── Cart Section ── */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-mono font-bold text-black uppercase text-sm flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Your Cart
                      </label>
                      {items.length > 0 && (
                        <button
                          type="button"
                          onClick={clearCart}
                          className="font-mono text-xs text-gray-400 hover:text-black underline underline-offset-2 transition-colors flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          Clear all
                        </button>
                      )}
                    </div>

                    {items.length === 0 ? (
                      /* Empty cart state */
                      <div className="border-4 border-dashed border-gray-300 p-8 text-center">
                        <ShoppingCart className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                        <p className="font-mono text-gray-400 text-sm mb-4">
                          // Your cart is empty
                        </p>
                        <button
                          type="button"
                          onClick={() => navigate("/products")}
                          className="font-mono text-xs font-bold uppercase border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors flex items-center gap-2 mx-auto"
                        >
                          Browse Products <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      /* Scrollable cart list */
                      <div className="border-4 border-black overflow-hidden">
                        <ul className="divide-y-2 divide-black max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-indie-cream [&::-webkit-scrollbar-thumb]:bg-black">
                          {items.map((item) => (
                            <li
                              key={item.id}
                              className="flex items-center gap-4 p-4 bg-white hover:bg-indie-cream transition-colors"
                            >
                              {/* Thumbnail */}
                              <div className="w-14 h-14 flex-shrink-0 border-2 border-black overflow-hidden bg-gray-50">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              {/* Name + subcat */}
                              <div className="flex-1 min-w-0">
                                <p className="font-mono text-[10px] text-cyan-600 uppercase tracking-widest mb-0.5">
                                  {item.subcategory.replace(/-/g, " ")}
                                </p>
                                <h4 className="font-display text-sm tracking-wide text-black leading-tight line-clamp-2">
                                  {item.name.toUpperCase()}
                                </h4>
                              </div>

                              {/* Quantity badge */}
                              <span className="font-mono text-xs font-bold bg-cyan-400 border-2 border-black px-2 py-1 flex-shrink-0">
                                ×{item.quantity}
                              </span>

                              {/* Remove */}
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-300 hover:text-black transition-colors flex-shrink-0 p-1"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </li>
                          ))}
                        </ul>

                        {/* Cart footer count */}
                        <div className="bg-indie-cream border-t-2 border-black px-4 py-2 flex items-center justify-between">
                          <span className="font-mono text-xs text-gray-500">
                            {items.reduce((s, i) => s + i.quantity, 0)} item(s) — we'll quote each one
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Notes Section ── */}
                  <div className="mb-6">
                    <label className="font-mono block font-bold text-black mb-3 uppercase text-sm">
                      Notes
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="font-mono w-full border-4 border-black p-4 h-32 focus:border-cyan-500 focus:outline-none transition-colors text-sm resize-none"
                      placeholder="Quantity, size, materials, timeline, special requirements..."
                    />
                  </div>
                </>
              ) : (
                /* Custom project tab */
                <div className="mb-6">
                  <label className="font-mono block font-bold text-black mb-3 uppercase text-sm">
                    Describe Your Project
                  </label>
                  <textarea
                    value={formData.customProject}
                    onChange={(e) =>
                      setFormData({ ...formData, customProject: e.target.value })
                    }
                    className="font-mono w-full border-4 border-black p-4 h-40 focus:border-cyan-500 focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us about your custom project..."
                    required
                  />
                </div>
              )}

              {/* ── Your Info ── */}
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
                className="font-mono w-full bg-cyan-400 text-black py-4 text-base font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1 flex items-center justify-center"
              >
                <Send className="inline mr-2 h-5 w-5" />
                {quoteTab === "standard" ? "Send Quote Request" : "Send Inquiry"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
