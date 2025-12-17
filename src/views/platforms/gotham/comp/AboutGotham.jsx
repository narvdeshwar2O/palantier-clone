import React from "react";

export default function AboutGotham() {
  return (
    <section className="bg-[#1F2225] min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-16 text-white text-center gap-6">
      
      {/* Heading */}
      <p className="
        font-light
        text-3xl sm:text-5xl lg:text-8xl
        leading-tight
      ">
        Are you ready?
      </p>

      {/* Big G */}
      <p className="
        font-bold leading-none
        text-6xl sm:text-8xl lg:text-9xl
        select-none
      ">
        G
      </p>

      {/* Subtitle */}
      <p className="
        max-w-3xl
        font-light
        text-base sm:text-xl lg:text-5xl
        leading-relaxed
        opacity-90
      ">
        Help revolutionize technology and accelerate software's future
      </p>

      {/* CTA Button */}
      <button
        className="
          mt-4
          bg-gray-700 hover:bg-[#595959]
          px-6 sm:px-8 py-3
          rounded-md
          text-sm sm:text-base
          transition-colors duration-300
          cursor-pointer
        "
      >
        Join Now
      </button>
    </section>
  );
}
