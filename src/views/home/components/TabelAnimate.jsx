import { motion, AnimatePresence } from "framer-motion";
import steps from "../../../lib/data/table-data";
import { useState } from "react";
import { Link } from "react-router-dom";

function TableAnimate() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="flex flex-col w-[95%] divide-y bg-white divide-gray-300 overflow-hidden pb-24 mx-auto">
      {steps.map((step, index) => (
        <Link key={step.id} to={step.slug} className="block group">
          <div
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
            className={`grid cursor-pointer py-12 px-4 md:px-8 transition-all duration-300 items-center
              grid-cols-1 md:grid-cols-[0.5fr_1.5fr] lg:grid-cols-[0.5fr_1fr_2fr] 
              ${hoveredStep === index ? "bg-gray-100 text-black" : "bg-white"}`}
          >
            {/* 1. TITLE & ID SECTION (Visible on md and up) */}
            <div className="hidden md:flex flex-col justify-center h-fit py-5">
              <motion.div
                animate={hoveredStep === index ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light text-[16px]">
                  /{step.id}
                </p>
              </motion.div>
            </div>

            {/* 2. VIDEO SECTION (ONLY visible on lg and up) */}
            <div className="hidden lg:flex justify-center items-center w-full h-fit overflow-hidden">
              <AnimatePresence mode="wait">
                {hoveredStep === index && (
                  <motion.video
                    key={step.id}
                    src={step.src}
                    className="w-[280px] h-40 object-cover rounded-md shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </AnimatePresence>
            </div>

            {/* 3. DESCRIPTION SECTION (Visible on md and up) */}
            <motion.div
              animate={hoveredStep === index ? { x: 10 } : { x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="hidden md:block text-black text-[clamp(60px,5vw,90px)] leading-tight font-normal md:ml-10"
            >
              {step.description}
            </motion.div>

            {/* 4. MOBILE VIEW ONLY (Hidden on md and up) */}
            <div className="md:hidden w-full flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-400">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light text-sm">/{step.id}</p>
              </div>
              <p className="text-black text-3xl font-bold leading-tight">
                {step.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TableAnimate;
