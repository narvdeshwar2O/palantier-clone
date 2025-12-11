// AwardsSection.jsx
import React from "react";

const awards = [
  {
    title:
      "Palantir Named a Leader in AI/ML Platforms by Independent Research Firm",
    description:
      "“Palantir is rooted in building data-driven intelligence applications for complex, high-value government and commercial use cases.”",
    source: "— The Forrester Wave™: AI/ML Platforms, Q3 2022",
    linkText: "View the Full Report",
    linkUrl: "#",
  },
  {
    title:
      "Palantir Ranked No. 1 in Worldwide Artificial Intelligence Software Study in Market Share and Revenue",
    description:
      "“Palantir has demonstrated its clear leadership in AI on a global scale from both a market share and revenue perspective…we’re excited to see how Palantir continues to separate itself from the competition by solving the toughest business challenges out there with their platforms.”",
    source: "— Ritu Jyoti, IDC’s Group VP, AI and Automation",
    linkText: "Read the Press Release",
    linkUrl: "#",
  },
  {
    title:
      "Gartner Names Palantir a Visionary in the Magic Quadrant for Data Integration Tools",
    description: "",
    source: "— Gartner MQ™, Q3 2022",
    linkText: "",
    linkUrl: "",
  },
];

export default function AwardsSection() {
  return (
    <>
      <section className="w-full px-6 lg:px-20 py-16">
        {/* Header */}
        <div className="mb-14 flex items-center gap-3">
          <h2 className="text-5xl md:text-8xl font-light">Awards</h2>
          <span className="text-5xl md:text-6xl font-light -mt-2">→</span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-16 w-[80%] mx-auto">
          {awards.map((item, idx) => (
            <div key={idx} className="space-y-5">
              <h3 className="text-3xl font-400 leading-snug">{item.title}</h3>

              {item.description && (
                <p className="text-gray-600 text-xl leading-relaxed">
                  {item.description}
                </p>
              )}

              <p className="text-gray-800 font-medium">{item.source}</p>

              {item.linkText && (
                <a
                  href={item.linkUrl}
                  className="inline-block text-sm text-black underline underline-offset-4 hover:opacity-60 transition"
                >
                  ↳ {item.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      <hr className="w-[95%] mx-auto" />
      </>
  );
}
