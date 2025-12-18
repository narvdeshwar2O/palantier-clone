import React from "react";

const awards = [
  {
    title: "Palantir Named a Leader in AI/ML Platforms by Independent Research Firm",
    description: "“Palantir is rooted in building data-driven intelligence applications for complex, high-value government and commercial use cases.”",
    source: "— The Forrester Wave™: AI/ML Platforms, Q3 2022",
    linkText: "View the Full Report",
    linkUrl: "#",
  },
  {
    title: "Palantir Ranked No. 1 in Worldwide Artificial Intelligence Software Study in Market Share and Revenue",
    description: "“Palantir has demonstrated its clear leadership in AI on a global scale from both a market share and revenue perspective…we’re excited to see how Palantir continues to separate itself from the competition by solving the toughest business challenges out there with their platforms.”",
    source: "— Ritu Jyoti, IDC’s Group VP, AI and Automation",
    linkText: "Read the Press Release",
    linkUrl: "#",
  },
  {
    title: "Gartner Names Palantir a Visionary in the Magic Quadrant for Data Integration Tools",
    description: "",
    source: "— Gartner MQ™, Q3 2022",
    linkText: "",
    linkUrl: "",
  },
];

export default function AwardsSection() {
  return (
    <>
      <section className="w-full px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        {/* Header: Fixed scaling for mobile */}
        <div className="mb-14 flex items-center gap-3">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight">Awards</h2>
          <span className="text-4xl sm:text-6xl font-light -mt-2">→</span>
        </div>

        {/* Cards Grid: 
            - 1 column on mobile
            - 2 columns on tablet (md)
            - 3 columns on desktop (lg)
            - w-full for mobile, w-[90%] for larger screens
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 w-full lg:w-[90%] mx-auto">
          {awards.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-5">
              <h3 className="text-2xl md:text-3xl font-normal leading-snug">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed flex-grow">
                  {item.description}
                </p>
              )}

              <div className="pt-4 space-y-3">
                <p className="text-gray-800 font-medium text-sm md:text-base">
                  {item.source}
                </p>

                {item.linkText && (
                  <a
                    href={item.linkUrl}
                    className="inline-flex items-center text-sm text-black underline underline-offset-4 hover:opacity-60 transition-opacity font-medium"
                  >
                    <span className="mr-1">↳</span> {item.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="w-[95%] mx-auto border-gray-200" />
    </>
  );
}