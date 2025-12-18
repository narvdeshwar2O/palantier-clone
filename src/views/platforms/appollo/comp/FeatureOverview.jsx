import { appolloFeatures } from "@/lib/data/appollo-features";

export function FeatureOverview() {
  return (
    <>
      <section className="w-full bg-white px-6 md:px-10 lg:px-20 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16 md:mb-24">
          <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed max-w-xl">
            With today’s customer, security, and regulatory demands, software
            deployment is becoming more complex.
          </p>

          <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed max-w-xl">
            Apollo brings years of R&D across advanced deployments into an
            intelligent platform that is flexible and extensible to you — and
            your customers’ — particular needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 md:gap-16">
          <div className="hidden lg:block"></div>
          {appolloFeatures.map((feature, index) => (
            <div key={index} className="space-y-4 md:space-y-6">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-sm">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-5 h-5 md:w-6 md:h-6 object-contain"
                />
              </div>

              <h3 className="text-base md:text-lg font-medium text-gray-900 leading-snug">
                {feature.title}
              </h3>

              <span className="inline-block text-xs md:text-sm text-gray-600 border-b border-gray-300 pb-1">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end mt-16 md:mt-24">
          <button className="w-full md:w-auto border border-black px-8 py-4 text-sm transition hover:bg-black hover:text-white cursor-pointer uppercase tracking-wider font-medium">
            Download the Whitepaper →
          </button>
        </div>
      </section>
      <hr className="w-[90%] md:w-[95%] mx-auto border-gray-200" />
    </>
  );
}