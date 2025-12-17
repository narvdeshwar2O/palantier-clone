export default function GothamQuote() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-10 py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

        {/* LEFT CARD */}
        <div className="
          w-full lg:w-2/3
          bg-[#1F2225] text-white
          p-6 sm:p-10 lg:p-20
          rounded-2xl
          flex flex-col justify-between
        ">
          <p className="
            font-light leading-tight
            text-lg sm:text-2xl md:text-4xl lg:text-5xl
            text-gray-300
          ">
            <span className="text-gray-500">“</span>
            [Palantir] came up with ground breaking technologies that help us make
            better decisions in combat zones. You are giving us advantages right
            now that we need.
            <span className="text-gray-500">” —</span>
          </p>

          <div className="mt-8">
            <p className="text-base sm:text-lg font-medium text-white">
              General James N. Mattis
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Fmr. US Secretary of Defense
            </p>
          </div>
        </div>

        {/* RIGHT LABELS */}
        <div className="
          w-full lg:w-1/3
          flex lg:flex-col justify-between
          items-center lg:items-start
          gap-4
        ">
          <span className="text-xs font-bold tracking-widest text-gray-500">
            {"{ REAL PEOPLE"}
          </span>
          <span className="text-xs font-bold tracking-widest text-gray-500">
            {"REAL RESULTS }"}
          </span>
        </div>
      </div>
    </section>
  );
}
