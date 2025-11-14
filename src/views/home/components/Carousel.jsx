import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownLeft, ArrowLeft, ArrowRight } from "lucide-react";
import { carouselData } from "../../../lib/data/carousel-data";

function Carousel() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0.7]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 5000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleNext = () =>
    setActiveIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );

  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );

  const handleButtonClick = (index) => setActiveIndex(index);

  return (
    <section
      ref={ref}
      className="relative min-h-fit md:min-h-[130vh] bg-[#EFEFEF] overflow-hidden flex flex-col items-center justify-start pt-12 shadow border-b-10 border-b-[#EFEFEF]"
    >
  
      <motion.div
        style={{ y, opacity }}
        className="hidden md:flex z-70 flex-wrap gap-4 justify-center w-[98%] mx-auto mb-5 mt-10"
      >
        {carouselData.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => handleButtonClick(index)}
              className={`relative overflow-hidden bg-white px-4 py-2 rounded-sm shadow-md text-[18px] font-medium transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-400 ${
                isActive ? "text-black" : "text-gray-500"
              }`}
            >
              {isActive && (
                <motion.div
                  key={item.id + "-fill"}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute left-0 top-0 h-full bg-gray-300 z-0 rounded-sm"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </button>
          );
        })}
      </motion.div>

      <div className="hidden md:block absolute inset-0 z-50 mt-40 w-[98%] mx-auto h-[90vh] rounded-md overflow-hidden mb-20">
        {carouselData.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.02,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center rounded-md"
              />

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute top-5 left-5 bg-black/50 backdrop-blur-md text-white p-5 rounded-lg max-w-xl border border-white/10"
                >
                  <p className="text-[24px] uppercase text-gray-300 mb-1">
                    {item.earmark || item.title}
                  </p>

                  <a
                    href={item.link || "#"}
                    className="inline-flex items-center text-white text-[22px] font-medium hover:text-gray-300 transition-all"
                  >
                    {item.description}
                    <ArrowDownLeft className="rotate-180 w-5 h-5 ml-1" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {/* DESKTOP CONTROLS */}
        <div className="absolute inset-0 flex justify-between items-center px-6 z-60">
          <button
            onClick={handlePrev}
            className="bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="bg-black/40 hover:bg-black/70 hover:scale-110 text-white p-3 rounded-full backdrop-blur-md"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* DESKTOP OVERLAY */}
      <div className="hidden md:block absolute inset-0 z-40 bg-[#EFEFEF]/10 rounded-md" />

      <div className="md:hidden w-full px-3 mt-12 flex flex-col items-center z-10">

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">
          {carouselData[activeIndex].title}
        </h2>

        {/* Mobile image + tap zones */}
        <div className="relative w-full h-[350px] rounded-md overflow-hidden shadow-md">
          <img
            src={carouselData[activeIndex].src}
            alt={carouselData[activeIndex].title}
            className="w-full h-full object-cover object-center"
          />

          {/* LEFT TAP ZONE */}
          <div
            onClick={handlePrev}
            className="absolute left-0 top-0 h-full w-1/2 z-20 md:hidden"
          />

          {/* RIGHT TAP ZONE */}
          <div
            onClick={handleNext}
            className="absolute right-0 top-0 h-full w-1/2 z-20 md:hidden"
          />
        </div>

        {/* Description */}
        <div className="mt-6 bg-black/60 text-white p-4 rounded-lg backdrop-blur-md w-full">
          <p className="text-[18px] uppercase text-gray-300 mb-1">
            {carouselData[activeIndex].earmark ||
              carouselData[activeIndex].title}
          </p>

          <p className="text-[16px] leading-snug">
            {carouselData[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
