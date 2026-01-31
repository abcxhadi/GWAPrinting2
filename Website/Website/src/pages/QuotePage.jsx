import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone, User, Send, Check } from "lucide-react";
import { sampleProducts } from "../data/products";

export function QuotePage() {
  const location = useLocation();
  const [quoteTab, setQuoteTab] = useState(
    location.state?.initialTab || "standard"
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    notes: "",
    customProject: "",
  });

  useEffect(() => {
    if (location.state?.initialTab) {
      setQuoteTab(location.state.initialTab);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        notes: "",
        customProject: "",
      });
    }, 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-indie-cream py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
            REQUEST <span className="text-cyan-500 scribble">QUOTE</span>
          </h1>
          <p className="font-mono text-gray-700">
            We'll respond within 24hrs // No corporate BS
          </p>
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
            <div className="flex border-b-4 border-black">
              <button
                onClick={() => setQuoteTab("standard")}
                className={`font-mono flex-1 py-5 font-bold uppercase text-sm transition-colors ${
                  quoteTab === "standard"
                    ? "bg-cyan-400 text-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Standard Product
              </button>
              <button
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
                  <div className="mb-6">
                    <label className="font-mono block font-bold text-black mb-3 uppercase text-sm">
                      Select Product
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({ ...formData, product: e.target.value })
                      }
                      className="font-mono w-full border-4 border-black p-3 focus:border-cyan-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Choose...</option>
                      {sampleProducts.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="font-mono block font-bold text-black mb-3 uppercase text-sm">
                      Notes
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="font-mono w-full border-4 border-black p-4 h-32 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                      placeholder="Quantity, size, materials, timeline..."
                    />
                  </div>
                </>
              ) : (
                <div className="mb-6">
                  <label className="font-mono block font-bold text-black mb-3 uppercase text-sm">
                    Describe Your Project
                  </label>
                  <textarea
                    value={formData.customProject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customProject: e.target.value,
                      })
                    }
                    className="font-mono w-full border-4 border-black p-4 h-40 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                    placeholder="Tell us about your custom project..."
                    required
                  />
                </div>
              )}

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
                className="font-mono w-full bg-cyan-400 text-black py-4 text-base font-bold uppercase tracking-wider border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1"
              >
                <Send className="inline mr-2 h-5 w-5" />
                {quoteTab === "standard" ? "Send Request" : "Send Inquiry"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
