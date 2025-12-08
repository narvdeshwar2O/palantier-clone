import React from "react";

const sections = [
  {
    category: "Asset Management",
    cards: [
      {
        title: "Energy Major",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
        description:
          "Optimizing production across 30+ assets, reducing downtime by 20% and saving millions in operational costs annually.",
      },
      {
        title: "Renewables Integration",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400",
        description:
          "Connecting data from solar plants in Spain to central operations, enabling real-time yield optimization.",
      },
      {
        title: "Utility Grid",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400",
        description:
          "Creating a digital twin of the national grid to predict load balancing needs and prevent outages during peak demand.",
      },
      {
        title: "Global Insurance",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400",
        description:
          "Underwriting risk modeling for complex assets, reducing claim processing time by 40%.",
      },
    ],
  },
  {
    category: "Ecosystems",
    cards: [
      {
        title: "Skywise",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400",
        description:
          "Connecting the aviation industry to improve reliability, connecting 100+ airlines and 15k+ aircraft.",
      },
      {
        title: "Automotive Hub",
        img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=400",
        description:
          "Industry-wide collaboration for supply chain carbon footprint tracking and parts availability.",
      },
      {
        title: "Smart Cities",
        img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=400",
        description:
          "Municipal data integration for traffic management, emergency response, and public utility planning.",
      },
      {
        title: "Research Network",
        img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=400",
        description:
          "Facilitating secure data sharing between 50+ research institutions to accelerate drug discovery.",
      },
    ],
  },
  {
    category: "Supply Chain",
    cards: [
      {
        title: "Healthcare Supply",
        img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400",
        description:
          "Coordinating distribution of critical medical supplies across national networks during crisis response.",
      },
      {
        title: "Retail Logistics",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400",
        description:
          "End-to-end visibility for a global retailer, predicting stockouts and optimizing inventory placement.",
      },
      {
        title: "Food Distribution",
        img: "https://images.unsplash.com/photo-1595246140625-573b715d1128?auto=format&fit=crop&q=80&w=400",
        description:
          "Ensuring freshness and reducing waste by tracking perishable goods from farm to fork.",
      },
    ],
  },
  {
    category: "Engineering & Manufacturing",
    cards: [
      {
        title: "Auto Manufacturer",
        img: "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=400",
        description:
          "Streamlining the design-to-production loop, identifying quality defects before they leave the factory floor.",
      },
      {
        title: "Heavy Machinery",
        img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=400",
        description:
          "Predictive maintenance models for industrial equipment, extending lifecycle and safety.",
      },
    ],
  },
];

const GlobalImpact = () => {
  return (
    <>
      <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="mb-20">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-gray-900">
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
                  <h2 className="text-2xl font-medium text-gray-800 sticky top-8">
                    {section.category}
                  </h2>
                </div>

                {/* Right Column: Grid of Cards */}
                <div className="w-full lg:w-3/4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {section.cards.map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className="group flex flex-col items-start cursor-pointer"
                      >
                        {/* Card Image */}
                        <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                          <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="space-y-2">
                          {/* Use this if you have specific small tags like in the image */}
                          {/* <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Case Study</span> */}

                          <h3 className="text-sm font-bold text-gray-900 leading-tight">
                            {card.title}
                          </h3>
                          <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">
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
    </>
  );
};

export default GlobalImpact;
