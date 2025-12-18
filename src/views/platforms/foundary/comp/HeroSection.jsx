import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { foundaryMenus } from "../../../../lib/data/foundary-data";

const PalantirFoundry = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to check if item has content
  const hasSubMenu = (item) => item.subMenu && Object.keys(item.subMenu).length > 0;

  return (
    <section className="w-full text-gray-900 relative">
      {/* MOBILE/TABLET HEADER - Visible up to 1024px (lg) */}
      <div className="flex lg:hidden justify-between items-center p-6 border-b bg-white sticky top-0 z-[100] mt-20">
        <span className="font-bold tracking-tighter text-xl uppercase">Palantir</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* DESKTOP NAVBAR - Only visible from 1024px (lg) and up */}
      <nav className="hidden lg:flex max-w-7xl mx-auto justify-around mt-10 px-4">
        {foundaryMenus.map((item, index) => (
          <div
            key={index}
            className="relative py-2 group"
          >
            <button
              className={`cursor-pointer text-lg xl:text-xl transition-colors hover:text-blue-600 font-normal ${
                activeMenu === index ? "text-blue-600" : "text-gray-900"
              }`}
              onClick={() => hasSubMenu(item) && setActiveMenu(activeMenu === index ? null : index)}
            >
              {item.title}
            </button>

            {/* Submenu Dropdown */}
            {activeMenu === index && hasSubMenu(item) && (
              <div 
                className="fixed left-1/2 -translate-x-1/2 mt-6 w-[95vw] max-w-7xl bg-[#1c1c1c] text-white p-10 shadow-2xl z-50 rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Type Mega */}
                {item.type === "mega" && (
                  <div className="grid grid-cols-4 gap-8">
                    {item.subMenu.map((col, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold">{col.category}</h4>
                        <div className="flex flex-col gap-3">
                          {col.items?.map((link, i) => (
                            <div key={i} className="cursor-pointer text-base border-b border-gray-800 pb-1 hover:text-blue-400 transition-all hover:border-blue-400">
                              {link.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Type Capabilities/Learn */}
                {(item.type === "capabilities" || item.type === "learn") && (
                  <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-5 pr-10 border-r border-gray-800">
                      <h2 className="text-5xl font-light mb-6 leading-tight">{item.subMenu.title}</h2>
                      <p className="text-lg text-gray-400 leading-relaxed">{item.subMenu.description}</p>
                    </div>
                    <div className="col-span-7 grid grid-cols-3 gap-6">
                      {item.subMenu.columns?.map((col, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                          {col.map((cap, i) => (
                            <div key={i} className="cursor-pointer text-base border-b border-gray-800 pb-1 hover:text-blue-400 transition-all hover:border-blue-400">
                              {cap}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* MOBILE/TABLET SIDEBAR MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[77px] bg-[#1c1c1c] text-white z-[90] overflow-y-auto animate-in slide-in-from-right duration-300 mt-20">
          <div className="p-6 flex flex-col gap-4">
            {foundaryMenus.map((item, index) => (
              <div key={index} className="border-b border-gray-800 pb-4">
                <button 
                  className="w-full flex justify-between items-center text-2xl font-light py-2"
                  onClick={() => hasSubMenu(item) && setActiveMenu(activeMenu === index ? null : index)}
                >
                  {item.title}
                  {hasSubMenu(item) && (
                    <span className={`transform transition-transform ${activeMenu === index ? "rotate-45" : ""}`}>
                      <X size={20} className={activeMenu === index ? "" : "rotate-45"} />
                    </span>
                  )}
                </button>
                
                {activeMenu === index && hasSubMenu(item) && (
                  <div className="mt-4 space-y-8 pl-4 animate-in fade-in zoom-in-95">
                    {item.type === "mega" ? (
                      item.subMenu.map((col, idx) => (
                        <div key={idx}>
                          <h4 className="text-blue-500 text-xs uppercase mb-3 tracking-widest">{col.category}</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {col.items.map((link, i) => (
                              <div key={i} className="text-lg text-gray-300">{link.title}</div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="space-y-6">
                        <p className="text-gray-400 italic text-sm">{item.subMenu.description}</p>
                        <div className="grid grid-cols-1 gap-4">
                          {item.subMenu.columns?.flat().map((cap, i) => (
                            <div key={i} className="text-lg text-gray-200 border-l-2 border-gray-800 pl-4">{cap}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <div className="mx-auto flex flex-col md:flex-row justify-between mt-12 lg:mt-24 mb-10 w-[90%] md:w-[94%] max-w-7xl gap-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">Palantir Foundry</h1>
        <div className="max-w-xl">
          <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-600 leading-relaxed">
            The Ontology-Powered Operating System for the Modern Enterprise
          </p>
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
            <video
              src="https://www.palantir.com/assets/xrfr7uokpv1b/6wPXo22rIy9sWfuTM9ALSe/6c00236051d5e314adb17d399ad502c0/Hydrate_Ontology_General_V3.mp4"
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row mt-10 md:mt-20 mb-16 gap-8">
            <div className="hidden md:block md:w-1/2"></div>
            <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-end gap-6 sm:gap-12">
              <button className="relative w-fit flex items-center gap-2 group font-medium text-sm md:text-base">
                Get Started with the Ontology <ArrowRight size={18} />
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-black group-hover:w-0 transition-all duration-300"></span>
              </button>
              <button className="relative w-fit flex items-center gap-2 group font-medium text-sm md:text-base">
                Download Overview <ArrowRight size={18} />
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-black group-hover:w-0 transition-all duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="max-w-7xl mx-auto border-gray-200" />
    </section>
  );
};

export default PalantirFoundry;