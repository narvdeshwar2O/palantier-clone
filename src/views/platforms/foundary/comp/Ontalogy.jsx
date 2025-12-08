import { ArrowRight } from "lucide-react";
import React from "react";

function Ontalogy() {
  return (
    <div className="w-[95%] mx-auto">
      <p className="py-12 text-8xl">The Foundry Ontology</p>
      <div className="flex gap-16 w-[90%] mx-auto mb-10">
        <div>
          <img
            src="https://www.palantir.com/assets/xrfr7uokpv1b/6ycgtn80LFNqchwVzgMDsT/4ae097a6ab1f14b6ff5785e59807fb44/Ontology_Simple.png?quality=70&width=1600"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-2xl">
            Activate your data and analytics in a dynamic system for closed-loop
            operations.
          </p>
          <p className="text-xl">
            The Foundry Ontology is the heart of Palantir Foundry. It integrates
            the semantic, kinetic, and dynamic elements of your business —
            empowering your teams to harmonize and automate decision-making in
            complex settings.
          </p>
          <p className="flex text-lg items-center border-b">
            Discover the Foundry Ontology <ArrowRight />
          </p>
        </div>
      </div>
      <hr className="w-[95%] mx-auto" />
    </div>
  );
}

export default Ontalogy;
