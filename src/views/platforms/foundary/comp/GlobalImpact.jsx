import { sections } from "@/lib/data/section-global";

const GlobalImpact = () => {
  return (
    <>
      <div className="bg-white text-gray-900 py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="w-full lg:w-[95%] mx-auto">
          {/* Main Heading: Fluid font sizing from mobile to desktop */}
          <div className="mb-12 md:mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-gray-900 leading-[1.1]">
              One Platform.<br className="sm:hidden" /> Global Impact.
            </h1>
          </div>

          {/* Rows Container */}
          <div className="space-y-16 md:space-y-24">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-t border-gray-100 pt-8"
              >
                {/* Left Column: Category Title 
                    Sticky behavior is disabled on mobile for better flow
                */}
                <div className="w-full lg:w-1/4 shrink-0">
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 lg:sticky lg:top-10">
                    {section.category}
                  </h2>
                </div>

                {/* Right Column: Grid of Cards 
                    Responsive Grid: 1 col (base), 2 col (sm), 3 col (md), 4 col (lg)
                */}
                <div className="w-full lg:w-3/4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-12">
                    {section.cards.map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className="group flex flex-col items-start cursor-pointer"
                      >
                        {/* Card title - font-black for 900 weight */}
                        <p className="text-[11px] md:text-[12px] text-gray-800 leading-tight mb-3 font-black uppercase tracking-wider">
                          {card.title}
                        </p>
                        
                        {/* Card Image Wrapper with Fixed Aspect Ratio */}
                        <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-md">
                          <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90 rounded-md"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="space-y-2">
                          <p className="text-sm md:text-[15px] text-black leading-relaxed font-light">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-[95%] mx-auto border-gray-200" />
    </>
  );
};

export default GlobalImpact;