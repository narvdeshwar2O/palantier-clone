import React from "react";

const offerings = [
  { label: "AI + ML", href: "#" },
  { label: "Anti Money Laundering", href: "#" },
  { label: "Edge AI", href: "#" },
  { label: "Energy", href: "#" },
  { label: "Healthcare R&D", href: "#" },
  { label: "Supply Chain", href: "#" },
  { label: "Retail", href: "#" },
  { label: "More Offerings", href: "#" },
];

const OntologyOperations = () => {
  return (
    <>
      <section className="bg-white py-12 md:py-20 lg:py-24 px-6 md:px-12 lg:px-8">
        {/* Container: Stacks vertically, shifts to row at LG breakpoint */}
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Heading */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.1] text-gray-900 tracking-tight">
              Ontology-powered Operations Across Industries
            </h2>
          </div>

          {/* Right Column: Content & Links */}
          <div className="w-full lg:w-1/2">
            {/* Description Text */}
            <div className="space-y-6 text-lg md:text-xl text-gray-500 mb-10 md:mb-16 font-sans leading-relaxed">
              <p>
                For more than a decade, we’ve embedded alongside our customers
                to build Foundry backwards, starting from the most critical
                operational decisions. We’ve encoded this tradecraft into our
                product.
              </p>
              <p>
                Today, some of the world’s most important institutions use
                Foundry to build safer cars, secure global supply chains,
                accelerate cancer research, and more.
              </p>
            </div>

            {/* Links Grid: 1 col on mobile, 2 cols on tablet/desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12">
              {offerings.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-gray-300 py-4 md:py-5 text-base md:text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className="w-[92%] md:w-[95%] mx-auto border-gray-200" />
    </>
  );
};

export default OntologyOperations;