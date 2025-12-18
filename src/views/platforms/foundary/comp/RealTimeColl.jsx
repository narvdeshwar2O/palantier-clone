import { features } from "@/lib/data/realtime";

const OntologySection = () => {
  return (
    <>
      <section className="w-full lg:w-[90%] mx-auto px-4 sm:px-8 py-12 md:py-16 lg:py-24 bg-white text-slate-900 font-sans">
        
        {/* TOP SECTION: Title and Sub-description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:leading-[1.2] tracking-tight">
              Step Into Real-Time Collaboration
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 leading-snug md:leading-relaxed font-light">
              Execute faster with universal logic representing the objects,
              actions, and processes of your business.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION: Image and Features List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* IMAGE CONTAINER */}
          <div className="relative w-full flex flex-col items-center overflow-hidden rounded-xl">
            <img 
              src="https://www.palantir.com/assets/xrfr7uokpv1b/4TF81x78iYQqD1IwhIBdt5/cc9f3506607bd520d73d624538445843/Personas.png?quality=70&width=1600" 
              alt="Real-time collaboration visualization"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* FEATURES LIST */}
          <div className="flex flex-col">
            {features.map((item, index) => (
              <div
                key={index}
                className="
                  border-t border-slate-200 py-6 md:py-8 
                  first:border-t-0 lg:first:border-t
                  hover:bg-slate-50 transition-colors duration-300 px-2
                "
              >
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <hr className="w-[95%] mx-auto border-slate-200" />
    </>
  );
};

export default OntologySection;