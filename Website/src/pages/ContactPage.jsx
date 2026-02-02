import React from "react";
import { Mail, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-indie-cream">
      <div className="bg-white border-b-8 border-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
            GET IN <span className="text-orange-500 scribble">TOUCH</span>
          </h1>
          <p className="font-mono text-gray-700 text-lg">
            Let's collaborate on your next project
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white border-4 border-black overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <div className="grid md:grid-cols-2">
            <div className="bg-black p-10 text-white border-r-4 border-black">
              <h2 className="font-display text-3xl font-bold mb-8 tracking-wide">
                CONTACT INFO
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-cyan-400 p-3 border-2 border-white mr-5 transform -rotate-2">
                    <Mail className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono font-bold mb-2 uppercase text-sm">
                      Email
                    </p>
                    <p className="font-mono text-gray-300 text-sm">
                      gw.advt@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-500 p-3 border-2 border-white mr-5 transform rotate-2">
                    <Phone className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono font-bold mb-2 uppercase text-sm">
                      Phone
                    </p>
                    <p className="font-mono text-gray-300 text-sm">
                      +971 55 532 5496
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10">
              <h2 className="font-display text-3xl font-bold text-black mb-8 tracking-wide">
                STUDIO HOURS
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b-2 border-black">
                  <span className="font-mono text-black font-bold uppercase text-sm">
                    Mon - Fri
                  </span>
                  <span className="font-mono text-cyan-500 font-bold">
                    9AM - 6PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b-2 border-black">
                  <span className="font-mono text-black font-bold uppercase text-sm">
                    Saturday
                  </span>
                  <span className="font-mono text-cyan-500 font-bold">
                    10AM - 4PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-mono text-black font-bold uppercase text-sm">
                    Sunday
                  </span>
                  <span className="font-mono text-gray-500 font-bold">
                    CLOSED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
