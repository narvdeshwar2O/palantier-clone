import { features } from "@/lib/data/realtime";

const OntologySection = () => {
  return (
    <>
      <section className="w-[90%] mx-auto px-6 py-16 bg-white text-slate-900 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl leading-16">
              Step Into Real-Time Collaboration
            </h2>
          </div>
          <div>
            <p className="text-xl md:text-3xl text-slate-800 leading-relaxed">
              Execute faster with universal logic representing the objects,
              actions, and processes of your business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative flex flex-col items-center">
            <img src="https://www.palantir.com/assets/xrfr7uokpv1b/4TF81x78iYQqD1IwhIBdt5/cc9f3506607bd520d73d624538445843/Personas.png?quality=70&width=1600" />
          </div>

          <div className="flex flex-col">
            {features.map((item, index) => (
              <div
                key={index}
                className="border-t border-slate-200 py-8 first:border-t-0 lg:first:border-t"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="w-[95%] mx-auto" />
    </>
  );
};

export default OntologySection;
