import { motion, AnimatePresence } from "framer-motion";
import steps from "../../../lib/data/table-data";
import { useState } from "react";

function TableAnimate() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="flex flex-col w-full divide-y bg-white divide-gray-300 overflow-hidden">
      {steps.map((step, index) => (
        <div
          key={step.id}
          onMouseEnter={() => setHoveredStep(index)}
          onMouseLeave={() => setHoveredStep(null)}
          className={`grid grid-cols-1 md:grid-cols-[0.5fr_1fr_2fr] items-center cursor-pointer py-10 px-4 md:px-8 transition-all duration-300 ${
            hoveredStep === index ? "bg-gray-100 text-black" : "bg-white"
          }`}
        >
          {/* === LEFT COLUMN === */}
          <motion.div
            animate={hoveredStep === index ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-rows-[1fr,1fr,2fr] w-full h-full"
          >
            <h3 className="text-lg md:text-xl font-400 text-gray-900 tracking-tight">
              {step.title}
            </h3>
            <p className="text-gray-400 font-300 text-[16px] align-text-bottom hover:text-black">
              /{step.id}
            </p>
          </motion.div>

          {/* === MIDDLE COLUMN === */}

          {/* === RIGHT COLUMN (Centered Image with Left-to-Right Slide) === */}
          <div className="flex justify-center items-center mt-2 md:mt-0 w-full h-full overflow-hidden">
            <AnimatePresence>
              {hoveredStep === index && (
                <motion.video
                  key={step.id}
                  src={step.src}
                  className="w-[300px] h-[200px] object-cover rounded-md shadow-md"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </AnimatePresence>
          </div>
          <motion.div
            animate={hoveredStep === index ? { x: 10 } : { x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-black text-[140px] leading-relaxed mt-4 md:mt-0 md:ml-10 overflow-hidden"
          >
            {step.description}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default TableAnimate;
