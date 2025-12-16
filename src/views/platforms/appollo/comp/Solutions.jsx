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
        <div className="px-6 lg:px-20 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* LEFT TITLE */}
            <h2 className="text-5xl lg:text-7xl font-light leading-tight">
              Explore Apollo Solutions
            </h2>

            {/* RIGHT SOLUTIONS ONLY */}
            <div className="space-y-16 max-w-3xl">
              <div className="space-y-10">
                {leftSolutions.map((item, i) => (
                  <SolutionRow key={i} label={item} />
                ))}
              </div>

              <div className="space-y-10">
                {rightSolutions.map((item, i) => (
                  <SolutionRow key={i} label={item} />
                ))}
              </div>

              {/* Demo Button */}
              <div className="pt-10 text-right">
                <button className="border px-8 py-3 text-sm hover:bg-black hover:text-white transition">
                  Watch the Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Federal CTA */}
        <div className="px-6 lg:px-20 py-32 text-center">
          <h3 className="text-4xl lg:text-6xl font-light mb-10 max-w-4xl mx-auto">
            Looking to Deploy Software to the Federal Government?
          </h3>
          <button className="bg-black text-white px-10 py-4 text-sm hover:opacity-90 transition">
            FedStart →
          </button>
        </div>
      </section>
      <hr className="w-[95%] mx-auto" />
    </>
  );
}

function SolutionRow({ label }) {
  return (
    <div className="flex items-center justify-between border-b pb-6 text-lg">
      <span>{label}</span>
      <span className="text-xl">→</span>
    </div>
  );
}
