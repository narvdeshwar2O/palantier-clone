export default function ExploreSolutions() {
  const leftSolutions = [
    "Multi-cloud, Multi-prem, Private SaaS, and Single Tenant Deployment",
    "Airgapped + Highside SaaS",
    "Microservice Orchestration",
  ];

  const rightSolutions = [
    "Continuous Security & Compliance",
    "Digital Transformation and DORA Metrics",
    "Apollo for Edge",
  ];

  return (
    <>
      <section className="w-full bg-white">
        {/* Explore Apollo Solutions */}
        <div className="px-6 lg:px-20 py-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* LEFT TITLE */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
              Explore Apollo Solutions
            </h2>

            {/* RIGHT SOLUTIONS */}
            <div className="space-y-10 md:space-y-16 w-full max-w-3xl">
              <div className="space-y-6 md:space-y-10">
                {leftSolutions.map((item, i) => (
                  <SolutionRow key={i} label={item} />
                ))}
              </div>

              <div className="space-y-6 md:space-y-10">
                {rightSolutions.map((item, i) => (
                  <SolutionRow key={i} label={item} />
                ))}
              </div>

              {/* Demo Button */}
              <div className="pt-6 md:pt-10 text-center md:text-right">
                <button className="w-full md:w-auto border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                  Watch the Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Federal CTA */}
        <div className="px-6 lg:px-20 py-20 md:py-32 text-center bg-gray-50/50">
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-light mb-8 md:mb-10 max-w-4xl mx-auto leading-tight">
            Looking to Deploy Software to the Federal Government?
          </h3>
          <button className="w-full md:w-auto bg-black text-white px-10 py-4 text-sm font-medium hover:bg-gray-800 transition-all duration-300 rounded-sm">
            FedStart →
          </button>
        </div>
      </section>
      <hr className="w-[90%] md:w-[95%] mx-auto border-gray-200" />
    </>
  );
}

function SolutionRow({ label }) {
  return (
    <div className="group flex items-center justify-between border-b border-gray-200 pb-4 md:pb-6 cursor-pointer hover:border-black transition-colors">
      <span className="text-base md:text-lg lg:text-xl font-light pr-4 group-hover:translate-x-1 transition-transform">
        {label}
      </span>
      <span className="text-xl md:text-2xl font-light group-hover:translate-x-2 transition-transform">
        →
      </span>
    </div>
  );
}