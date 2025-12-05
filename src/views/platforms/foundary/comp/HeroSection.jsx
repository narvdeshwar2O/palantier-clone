import React from "react";

const PalantirFoundry = () => {
  return (
    <section className="w-full  text-gray-900">
      {/* HEADER */}
      <div className="mx-auto flex justify-around mt-40 mb-10 bg-red-400">
        <h1 className="text-5xl font-bold">Palantir Foundry</h1>
        <p className="text-xl mt-3 font-light max-w-xl">
          The Ontology-Powered Operating System for the Modern Enterprise
        </p>
      </div>

      {/* VIDEO SECTION */}
      <div className="w-full  border-gray-200">
        <div className="w-[95%] mx-auto">
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-300">
            <video
              src="https://www.palantir.com/assets/xrfr7uokpv1b/6wPXo22rIy9sWfuTM9ALSe/6c00236051d5e314adb17d399ad502c0/Hydrate_Ontology_General_V3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* BOTTOM TEXT */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Hydrate the Ontology</h2>
            <p className="text-gray-600 text-sm">
              Integration with purpose: combine, govern, and contextualize your
              data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalantirFoundry;
