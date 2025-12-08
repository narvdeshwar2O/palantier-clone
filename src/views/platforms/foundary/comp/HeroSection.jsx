import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { foundaryMenus } from "../../../../lib/data/foundary-data";

const PalantirFoundry = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <section className="w-full text-gray-900 relative">
      {/* Navbar */}
      <div className="flex w-[80%] justify-around mt-30">
        {foundaryMenus.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer text-xl hover:text-blue-600"
            onClick={() => setActiveMenu(activeMenu === index ? null : index)}
          >
            {item.title}

            {/* Close menu when clicking outside */}
            {activeMenu === index && item.type === "mega" && (
              <div
                className="
            absolute left-8
            mt-4 w-[96%]
            bg-[#1c1c1c] text-white 
            p-10 shadow-xl grid grid-cols-4 gap-10 
            z-50 rounded-xl
          "
              >
                {item.subMenu.map((col, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs text-gray-400 tracking-wider mb-3">
                      {col.category}
                    </h4>
                    <div className="space-y-3">
                      {col.items.map((link, i) => (
                        <div
                          key={i}
                          className="
                      cursor-pointer text-lg border-b 
                      border-gray-700 pb-1 hover:text-blue-400
                    "
                        >
                          {link.title}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeMenu === index && item.type === "capabilities" && (
              <div
                className="
      absolute left-1/2 -translate-x-1/2 mt-4
      w-[96vw]
      bg-[#1c1c1c] text-white p-12 shadow-xl
      z-50 rounded-xl grid grid-cols-2 gap-10
    "
                onClick={(e) => e.stopPropagation()}
              >
                {/* LEFT SECTION */}
                <div className="pr-10 border-r border-gray-700">
                  <h2 className="text-5xl font-light mb-6">
                    {item.subMenu.title}
                  </h2>
                  <p className="text-lg leading-7 text-gray-300">
                    {item.subMenu.description}
                  </p>
                </div>

                {/* RIGHT SECTION - 3 COLUMNS */}
                <div className="grid grid-cols-3 gap-10">
                  {item.subMenu.columns.map((col, idx) => (
                    <div key={idx} className="space-y-4">
                      {col.map((cap, i) => (
                        <div
                          key={i}
                          className="cursor-pointer text-xl border-b border-gray-700 pb-1 hover:text-blue-400"
                        >
                          {cap}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeMenu === index && item.type === "learn" && (
              <div
                className="
      absolute left-1/2 -translate-x-1/2 mt-4
      w-[96vw]
      bg-[#1c1c1c] text-white p-12 shadow-xl
      z-50 rounded-xl grid grid-cols-2 gap-10
    "
                onClick={(e) => e.stopPropagation()}
              >
                {/* LEFT SECTION */}
                <div className="pr-10 border-r border-gray-700">
                  <h2 className="text-6xl font-light mb-6">
                    {item.subMenu.title}
                  </h2>
                  <p className="text-xl leading-8 text-gray-300 max-w-xl">
                    {item.subMenu.description}
                  </p>
                </div>

                {/* RIGHT SECTION */}
                <div className="grid grid-cols-3 gap-10">
                  {item.subMenu.columns.map((col, index) => (
                    <div key={index} className="space-y-4">
                      {col.map((text, i) => (
                        <div
                          key={i}
                          className="cursor-pointer text-lg border-b border-gray-700 pb-1 hover:text-blue-400"
                        >
                          {text}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* HEADER */}
      <div className="mx-auto flex justify-between mt-10 mb-10 w-[96%]">
        <h1 className="text-7xl font-400">Palantir Foundry</h1>
        <p className="text-xl mt-3 font-light max-w-xl">
          The Ontology-Powered Operating System for the Modern Enterprise
        </p>
      </div>

      {/* VIDEO SECTION */}
      <div className="w-full border-gray-200">
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

          <div className="flex mt-20 mb-10">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex justify-around">
              <div className="border-b flex items-center gap-2">
                Get Started with the Ontology <ArrowRight />
              </div>
              <div className="border-b flex items-center gap-2">
                Download Palantir Overview <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-[95%] mx-auto" />
    </section>
  );
};

export default PalantirFoundry;
