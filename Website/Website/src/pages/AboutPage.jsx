import React from "react";
import { Award, Sparkles } from "lucide-react";

export function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-indie-cream">
      <div className="bg-white border-b-8 border-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">
            ABOUT <span className="text-cyan-500 scribble">GALAXY WORLD</span>
          </h1>
          <p className="font-mono text-gray-700 text-lg">
            15+ years of underground print excellence
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white border-4 border-black p-10 shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <p className="font-mono text-gray-700 leading-relaxed mb-8 text-base">
            For over 15 years, Galaxy World has been the underground's printing
            partner. We're not just a print shop—we're your collaborators in
            bringing raw, authentic visions to life with precision and soul.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-cyan-400/10 border-4 border-cyan-500 p-6 relative tape">
              <Award className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="font-display text-2xl font-bold text-black mb-3 tracking-wide">
                OUR MISSION
              </h3>
              <p className="font-mono text-gray-700 text-sm leading-relaxed">
                Deliver exceptional printing that rejects corporate polish and
                embraces authentic, handcrafted excellence.
              </p>
            </div>

            <div className="bg-orange-500/10 border-4 border-orange-500 p-6 relative tape">
              <Sparkles className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="font-display text-2xl font-bold text-black mb-3 tracking-wide">
                OUR APPROACH
              </h3>
              <p className="font-mono text-gray-700 text-sm leading-relaxed">
                Combining analog craftsmanship with modern technology—every
                project gets the attention it deserves.
              </p>
            </div>
          </div>

          <p className="font-mono text-gray-700 leading-relaxed text-base">
            Our commitment to authenticity, combined with state-of-the-art
            equipment, and a team of dedicated craftspeople, ensures every
            project becomes a testament to independent creativity and
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
