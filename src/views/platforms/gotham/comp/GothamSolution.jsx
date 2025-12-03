import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function GothamSolution() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full p-10 gap-10">
      {/* Left Column */}
      <div className="w-full md:w-1/2 bg-gray-50 hover:bg-[#1F2225] p-8 md:p-16 flex flex-col justify-between relative rounded-xl cursor-pointer group transition-colors duration-700 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h2 className="text-black group-hover:text-white text-3xl md:text-5xl font-light tracking-tight transition-colors duration-300">
            Explore Defense Solutions
          </h2>
          <div className="rounded-full border border-gray-300 group-hover:border-gray-600 p-2 group-hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <ArrowUpRight className="text-black group-hover:text-white w-6 h-6 transition-colors duration-300" />
          </div>
        </div>

        {/* Center Logo Area */}
        <div className="flex items-center justify-between w-full my-10">
          <span className="text-gray-500 group-hover:text-gray-400 text-sm tracking-widest transition-colors duration-300">
            {"{ EXPLORE"}
          </span>

          {/* Placeholder for "G" Logo */}
          <div className="text-[200px] font-bold text-gray-200 group-hover:text-gray-700/50 leading-none select-none transition-colors duration-300">
            G
          </div>

          <span className="text-gray-500 group-hover:text-gray-400 text-sm tracking-widest transition-colors duration-300">
            {"NOW }"}
          </span>
        </div>

        {/* Footer Text */}
        <div>
          <p className="text-gray-600 group-hover:text-gray-400 text-xl md:text-3xl font-light leading-snug max-w-2xl transition-colors duration-300">
            Discover the mission-tested Palantir Solutions that confront the
            world's most complex Defense challenges.
          </p>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full md:w-1/2 h-full relative rounded-xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Defense Solutions Laptop"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
}
