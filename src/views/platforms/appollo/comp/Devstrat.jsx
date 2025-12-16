export default function DevOpsStrategy() {
  return (
    <>
      <section className="w-full bg-white px-6 lg:px-20 py-24">
        <div className="w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-10">
            Your DevOps strategy can make or break your ability to grow →
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-16">
            <div className="max-w-lg">
              <img
                src="https://www.palantir.com/assets/xrfr7uokpv1b/5D1jVUnJAVlgMm7Zomx8IA/6ca3a22f5eab819978fb15d7eca3b56c/shutterstock_2102832148.jpg?quality=70&width=1600"
                alt="Abstract DevOps Visual"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-14 max-w-xl">
            <div className="space-y-4 border-b pb-10">
              <h3 className="text-lg font-600">
                Unlock new markets by deploying your software further.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-cloud, hybrid-cloud, Private SaaS, even airgapped and edge
                — use the same advanced tooling to deploy and operate all your
                applications.
              </p>
            </div>

            <div className="space-y-4 border-b pb-10">
              <h3 className="text-lg font-600">
                Move from manual to fully autonomous deployment — at your own
                pace.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The modern approach to software deployment doesn't require
                brittle CD pipelines. Encode desired SLAs, environments, and
                security policies while Apollo keeps everything healthy.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-600">
                Fortify your software by making security and compliance default.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enforce high standards for security, access, and reliability
                while streamlining collaboration across teams.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 mt-20">
          <p className="text-5xl w-3/4 text-center font-400">
            " We are solving a real hard problem that I am convinced is an
            existential threat to me as individual, and my company  "
          </p>
          <p className="text-sm text-gray-500">
            ↳ Mike Younkers, Senior Director of Engineering, Government
            Solutions at Cisco
          </p>
          <button className="border border-black px-8 py-4 text-sm transition bg-black text-white rounded-md hover:bg-white hover:text-black cursor-pointer">
            Watch the appollo customer Testonomial →
          </button>
        </div>
      </section>
      <hr className="w-[95%] mx-auto" />
    </>
  );
}
