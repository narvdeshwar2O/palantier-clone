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
      <section className="bg-white py-16 px-6 md:px-12 lg:px-4">
        <div className="w-[98%] mx-auto flex flex-col lg:flex-row gap-3 lg:gap-3">
          {/* Left Column: Heading */}
          <div className="w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif font-normal leading-[1.1] text-gray-900 tracking-tight">
              Ontology-powered Operations Across Industries
            </h2>
          </div>

          {/* Right Column: Content & Links */}
          <div className="w-full lg:w-1/2">
            {/* Description Text */}
            <div className="space-y-6 text-xl text-gray-500 mb-16 font-sans">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              {offerings.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-gray-400 py-4 text-lg text-gray-800 hover:text-gray-600 transition-colors duration-200"
                >
                  <span>{item.label}</span>
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
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
      <hr className="w-[95%] mx-auto" />
    </>
  );
};

export default OntologyOperations;
