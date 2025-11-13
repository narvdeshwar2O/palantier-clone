export default function WhatWeDo() {
  return (
    <div className="w-full bg-[#f5f5f5] flex flex-col md:flex-row px-10 py-20 gap-10">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg h-[500px]">
        <img
          src="https://www.palantir.com/assets/xrfr7uokpv1b/dj8Geza5kaQSUopNt1ke2/f7cdef9febbacd9678560fd39aac8777/careers.png"
          alt="Team working"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white rounded-xl shadow-lg h-[500px]">
        <h1 className="text-4xl md:text-5xl font-500 text-gray-900 leading-tight mb-6 text-center">
          There is so much left to build
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed text-center">
          Palantirians deliver mission-critical outcomes for the West's most
          important institutions.
        </p>
        <button className="px-6 py-3 border border-gray-800 rounded-md text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-500 font-medium w-fit cursor-pointer ">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
