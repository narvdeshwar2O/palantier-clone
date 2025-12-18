import { ArrowRight } from "lucide-react";
import React from "react";

function Ontalogy() {
  return (
    <div className="w-[95%] lg:w-[96%] mx-auto px-4 sm:px-6">
      {/* Title: Scales from 4xl on mobile to 8xl on large desktops */}
      <h2 className="py-8 md:py-12 lg:py-20 text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
        The Foundry Ontology
      </h2>

      {/* Container: Stacks vertically on mobile/tablet, side-by-side on large screens */}
      <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-16 lg:gap-24 w-full lg:w-[90%] mx-auto mb-16 lg:mb-24">
        
        {/* Image Wrapper */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.palantir.com/assets/xrfr7uokpv1b/6ycgtn80LFNqchwVzgMDsT/4ae097a6ab1f14b6ff5785e59807fb44/Ontology_Simple.png?quality=70&width=1600"
            alt="Foundry Ontology Diagram"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-10">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-snug text-gray-900">
            Activate your data and analytics in a dynamic system for closed-loop
            operations.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
            The Foundry Ontology is the heart of Palantir Foundry. It integrates
            the semantic, kinetic, and dynamic elements of your business —
            empowering your teams to harmonize and automate decision-making in
            complex settings.
          </p>

          {/* Call to Action Link */}
          <div
            className="
              relative w-fit flex items-center gap-2 text-base md:text-lg font-medium 
              cursor-pointer group py-1
            "
          >
            <span>Discover the Foundry Ontology</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            
            {/* Animated Underline */}
            <span className="absolute bottom-0 left-0 h-px w-full bg-black transition-all duration-300 group-hover:w-0 group-hover:right-0 group-hover:left-auto"></span>
          </div>
        </div>
      </div>

      <hr className="w-full border-gray-200" />
    </div>
  );
}

export default Ontalogy;