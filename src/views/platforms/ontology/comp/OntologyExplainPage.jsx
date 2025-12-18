import { explain } from "@/lib/data/explain-ontology";

export default function OntologyExplainPage() {
  return (
    <div className="px-4 md:px-10 py-10 md:py-16 w-full max-w-[1440px] mx-auto space-y-16 md:space-y-32">
      {explain.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        >
          {/* LEFT SIDE – TITLE */}

          <div className="static md:sticky top-10 md:top-28 h-fit">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              {section.header}
            </h1>
          </div>

          {/* RIGHT SIDE – BIG CARD */}
          <div className="w-full">
            <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl border border shadow-sm bg-white space-y-8 md:space-y-12">
              {/* SUBHEADER */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {section.subheader}
              </p>

              <hr className="border-gray-200" />

              {/* CONTENT BLOCKS */}
              {section.content.map((item, idx) => (
                <div key={item.id} className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto rounded-xl mt-4 bg-gray-50"
                    />
                  )}

                  {item.video && (
                    <video
                      src={item.video}
                      controls
                      playsInline
                      className="w-full h-auto rounded-xl mt-4 bg-black"
                    />
                  )}

                  {/* Divider */}
                  {idx !== section.content.length - 1 && (
                    <hr className="border-gray-100 my-6 md:my-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
