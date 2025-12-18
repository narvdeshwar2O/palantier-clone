export default function DevOpsStrategy() {
  return (
    <>
      <section className="w-full bg-white px-6 lg:px-20 py-16 md:py-24">
        {/* HEADER */}
        <div className="w-full lg:w-2/3 mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight">
            Your DevOps strategy can make or break your ability to grow →
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT CONTENT (Image) */}
          <div className="w-full">
            <img
              src="https://www.palantir.com/assets/xrfr7uokpv1b/5D1jVUnJAVlgMm7Zomx8IA/6ca3a22f5eab819978fb15d7eca3b56c/shutterstock_2102832148.jpg?quality=70&width=1600"
              alt="Abstract DevOps Visual"
              className="w-full rounded-xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT (Features) */}
          <div className="space-y-10 md:space-y-14 w-full">
            <div className="space-y-4 border-b pb-8 md:pb-10 border-gray-100">
              <h3 className="text-lg md:text-xl font-semibold">
                Unlock new markets by deploying your software further.
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Multi-cloud, hybrid-cloud, Private SaaS, even airgapped and edge
                — use the same advanced tooling to deploy and operate all your
                applications.
              </p>
            </div>

            <div className="space-y-4 border-b pb-8 md:pb-10 border-gray-100">
              <h3 className="text-lg md:text-xl font-semibold">
                Move from manual to fully autonomous deployment — at your own
                pace.
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                The modern approach to software deployment doesn't require
                brittle CD pipelines. Encode desired SLAs, environments, and
                security policies while Apollo keeps everything healthy.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Fortify your software by making security and compliance default.
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Enforce high standards for security, access, and reliability
                while streamlining collaboration across teams.
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL SECTION */}
        <div className="flex flex-col justify-center items-center gap-6 md:gap-10 mt-20 md:mt-32">
          <p className="text-2xl sm:text-3xl md:text-5xl w-full lg:w-4/5 text-center font-normal leading-tight italic">
            " We are solving a real hard problem that I am convinced is an
            existential threat to me as individual, and my company "
          </p>
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-500 font-medium">
              ↳ Mike Younkers
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              Senior Director of Engineering, Government Solutions at Cisco
            </p>
          </div>
          <button className="w-full sm:w-auto border border-black px-8 py-4 text-sm transition bg-black text-white rounded-md hover:bg-white hover:text-black cursor-pointer font-medium">
            Watch the Apollo Customer Testimonial →
          </button>
        </div>
      </section>
      <hr className="w-[90%] md:w-[95%] mx-auto border-gray-200" />
    </>
  );
}