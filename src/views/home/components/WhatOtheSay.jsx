import { ArrowRight } from "lucide-react";
import whatOtherSayAbout from "../../../lib/data/whatothersay";
import { Link } from "react-router-dom";
export default function WhatOtherSay() {
  const triplicatedData = [
    ...whatOtherSayAbout,
    ...whatOtherSayAbout,
    ...whatOtherSayAbout,
  ];

  return (
    <div className="bg-white p-10">
      <div className="w-full overflow-hidden">
        <span className="border-t w-full h-5 inline-block text-gray-300"></span>
        <p className="text-[30px] font-medium mb-6">
          What our partners say about us
        </p>

        {/* Main scroll wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Scrolling row */}
          <div className="scroll-container gap-5">
            {triplicatedData.map((item, index) => (
              <div
                key={index}
                className="
                  bg-gray-200 w-76 h-96 p-5 
                  shrink-0
                  [clip-path:polygon(0_0,80%_0,100%_20%,100%_100%,0_100%)] 
                  rounded-md relative overflow-hidden 
                  group/item
                "
              >
                {/* Company */}
                <p className="text-black px-1 font-500 text-2xl">
                  {item.company}
                </p>

                {/* Quote */}
                <p
                  className="
                    absolute left-5 right-5 
                    text-gray-500 text-md text-wrap group-hover/item:text-black
                    transition-all duration-300 ease-in-out 
                    bottom-5 group-hover/item:bottom-1/2 
                    group-hover/item:translate-y-1/2
                  "
                >
                  "{item.quote}"
                </p>

                {/* Author */}
                <div
                  className="
                    absolute bottom-5 left-5 right-5 
                    opacity-0 group-hover/item:opacity-100
                    transition-opacity duration-300 ease-in-out
                  "
                >
                  <p className="font-semibold text-gray-900">
                    {item.author_name}
                  </p>
                  <p className="text-xs text-gray-600">{item.author_title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="border-t w-full h-5 inline-block text-gray-300 mt-10"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-32">
        {/* LEFT BUTTON */}
        <Link to="/get-started" className="bg-[#c6c6c6] px-5 py-3 rounded-md cursor-pointer">
          <div
            className="flex justify-between  transition-all duration-300 ease-out hover:scale-[0.97]"
          >
            <button className="text-3xl">Request a Demo</button>
            <ArrowRight />
          </div>
        </Link>

        {/* RIGHT BUTTON */}
        <div className="bg-[#1e1f2b] text-white px-5 py-3 rounded-md cursor-pointer">
          <div
            className="flex justify-between  transition-all duration-300 ease-out
      hover:scale-[0.97]"
          >
            <button className="text-3xl">Start Building</button>
            <ArrowRight className="align-baseline"/>
          </div>
        </div>
      </div>
    </div>
  );
}
