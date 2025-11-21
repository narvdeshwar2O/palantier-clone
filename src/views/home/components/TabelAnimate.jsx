import { motion, AnimatePresence } from "framer-motion";
import steps from "../../../lib/data/table-data";
import { useState } from "react";
import { Link } from "react-router-dom";

function TableAnimate() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <>
      <div className="flex flex-col w-full divide-y bg-white divide-gray-300 overflow-hidden pb-24">
        {steps.map((step, index) => (
          <Link to={step.slug}>
            <div
              key={step.id}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`grid 
              grid-cols-1 
              md:grid-cols-[0.5fr_1fr_2fr] 
              items-center cursor-pointer py-10 px-4 md:px-8 
              transition-all duration-300 
              ${hoveredStep === index ? "bg-gray-100 text-black" : "bg-white"}`}
            >
              <div className="md:hidden w-full flex flex-col gap-2">
                <p className="text-gray-400 font-300 text-[16px] text-right -mt-5">
                  /{step.id}
                </p>
                <p className="text-black text-[38px] font-semibold">
                  {step.description}
                </p>

                <h3 className="text-[20px] font-medium text-gray-400">
                  {step.title}
                </h3>
              </div>

              <div className="hidden md:grid grid-rows-[1fr,1fr,2fr] w-full h-[200px]">
                <motion.div
                  animate={hoveredStep === index ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="text-lg md:text-xl font-400 text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-300 text-[16px]">
                    /{step.id}
                  </p>
                </motion.div>
              </div>

              <div className="hidden md:flex justify-center items-center mt-2 md:mt-0 w-full h-full overflow-hidden">
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
                className="hidden md:block text-black text-[clamp(40px,5vw,150px)] leading-relaxed mt-4 md:mt-0 md:ml-10 overflow-hidden"
              >
                {step.description}
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default TableAnimate;
