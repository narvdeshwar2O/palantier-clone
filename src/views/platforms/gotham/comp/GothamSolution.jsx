import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function GothamSolution() {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 h-full">
        
        {/* LEFT CARD */}
        <div className="w-full lg:w-1/2 bg-gray-50 hover:bg-[#1F2225]
          p-6 sm:p-10 lg:p-16
          flex flex-col justify-between
          rounded-2xl cursor-pointer group
          transition-colors duration-700 shadow-2xl"
        >
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <h2 className="
              text-black group-hover:text-white
              text-2xl sm:text-3xl lg:text-5xl
              font-light leading-tight
              transition-colors
            ">
              Explore Defense Solutions
            </h2>

            <div className="
              shrink-0 rounded-full border
              border-gray-300 group-hover:border-gray-600
              p-2 transition-colors
            ">
              <ArrowUpRight className="
                w-5 h-5 sm:w-6 sm:h-6
                text-black group-hover:text-white
                transition-colors
              " />
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-between my-8 sm:my-12">
            <span className="text-xs sm:text-sm tracking-widest text-gray-500">
              {"{ EXPLORE"}
            </span>

            <div className="
              font-bold select-none leading-none
              text-[100px] sm:text-[140px] lg:text-[200px]
              text-gray-200 group-hover:text-gray-700/50
              transition-colors
            ">
              G
            </div>

            <span className="text-xs sm:text-sm tracking-widest text-gray-500">
              {"NOW }"}
            </span>
          </div>

          {/* Footer Text */}
          <p className="
            text-gray-600 group-hover:text-gray-400
            text-base sm:text-lg lg:text-2xl
            max-w-2xl leading-relaxed
            transition-colors
          ">
            Discover the mission-tested Palantir Solutions that confront the
            world's most complex Defense challenges.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 h-[260px] sm:h-[360px] lg:h-auto relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Defense Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
}
