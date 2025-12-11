import { sections } from "@/lib/data/section-global";

const GlobalImpact = () => {
  return (
    <>
      <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="w-[95%] mx-auto">
          {/* Main Heading */}
          <div className="mb-20">
            <h1 className="text-4xl md:text-8xl font-normal tracking-tight text-gray-900">
              One Platform. Global Impact.
            </h1>
          </div>

          {/* Rows Container */}
          <div className="space-y-24">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-t border-transparent pt-4"
              >
                {/* Left Column: Category Title */}
                <div className="w-full lg:w-1/4 shrink-0">
                  <h2 className="text-4xl font-medium text-gray-900 sticky top-20">
                    {section.category}
                  </h2>
                </div>

                {/* Right Column: Grid of Cards */}
                <div className="w-full lg:w-3/4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
                    {section.cards.map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className="group flex flex-col items-start cursor-pointer"
                      >
                        <p className="text-[12px] text-gray-800 leading-tight mb-3 font-900">
                          {card.title}
                        </p>
                        {/* Card Image */}
                        <div className="w-full aspect-4/3 overflow-hidden bg-gray-100 mb-4 rounded-md">
                          <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-105 hover:opacity-80 rounded-md"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="space-y-2">
                          {/* Use this if you have specific small tags like in the image */}
                          {/* <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Case Study</span> */}

                          <p className="text-sm text-black leading-relaxed">
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
       <hr className="w-[95%] mx-auto" />
    </>
  );
};

export default GlobalImpact;
