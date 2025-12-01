import { ArrowBigRight, ArrowRight } from "lucide-react";
import { solution } from "@/lib/data/solution";
import { builtAIP } from "../../../../lib/data/solution";

function Solving() {
  return (
    <div className="bg-[#1D1F2B] pb-30 space-y-10">
      <div className="w-[90%] grid grid-cols-[0.7fr_1.3fr] mx-auto gap-5 pt-24">
        {/* left side */}
        <div className="space-y-4 p-5">
          <p className="text-4xl text-white">
            Solving complex problems across all industries in days, not years.
          </p>
          <button className="flex border px-3 py-1 rounded-md border-white text-white cursor-pointer hover:bg-[#474a5c] text-xl transition-all duration-500">
            Explore AIP Now <ArrowRight />
          </button>
        </div>

        {/* right side */}
        <div>
          {solution.map((item, index) => (
            <div
              className="border-t border-[#474a5c] flex gap-5 text-4xl p-5 py-8 cursor-pointer text-[#474a5c]"
              key={index}
            >
              <p className="text-lg">{index + 1}</p>

              <div className="w-full group">
                <p className="transition-all duration-500 uppercase text-5xl relative group-hover:text-white z-5">
                  {item.title}
                  {/* IMAGE ON HOVER */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-82 absolute 
                      opacity-0 scale-90 
                      group-hover:opacity-100 group-hover:scale-100 
                      -top-5 left-1/2 -translate-x-1/2
                      transition-all duration-700 ease-out
                      rounded-md shadow-xl z-1000
                    "
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-white text-7xl pt-12">
        Build now with AIP
      </p>
      <div className="flex w-[80%] gap-10 mx-auto justify-center">
        {builtAIP.map((item) => (
          <div className="border border-white/30 p-6 space-y-5  w-1/3 rounded-xl shadow-md cursor-pointer hover:border-white transition-all duration-700 group hover:scale-105">
            <p className="text-white text-2xl flex justify-between items-baseline">
              {item.title} <ArrowRight className="rotate-45 group-hover:rotate-0 transition-all duration-700"/>
            </p>
            <div className="flex flex-col justify-around space-y-5">
              <video
                src={item.videoSrc}
                autoPlay
                loop
                playsInline
                className="aspect-video size-36"
              ></video>
              <p className="text-white/80 text-xl">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solving;
