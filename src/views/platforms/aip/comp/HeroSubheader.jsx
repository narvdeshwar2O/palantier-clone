import { useEffect, useState } from "react";
import { ArrowDownFromLine } from "lucide-react";
import { motion } from "framer-motion";

function HeroSubheader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight / 2;

      // smooth scroll progress
      const value = Math.min(1, Math.max(0, (window.scrollY - mid) / 400));

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "Go beyond Chat.";

  // total characters
  const count = text.length;

  // How many chars should be visible based on progress
  const visibleChars = Math.floor(progress * count);

  const bgColor = progress === 0 ? "#1D1F2B" : "#ffffff";

  return (
    <motion.div
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="h-screen"
    >
      <div className="flex flex-col justify-between h-full w-[90%] mx-auto p-4">
        {/* TOP SECTION */}
        <div className="flex justify-between w-full mt-24">
          <p
            className="text-xl uppercase"
            style={{ color: progress === 0 ? "white" : "black" }}
          >
            Software
          </p>
          <p
            className="text-xl uppercase"
            style={{ color: progress === 0 ? "white" : "black" }}
          >
            Aip
          </p>
          <button
            className="cursor-pointer text-xl uppercase"
            style={{ color: progress === 0 ? "white" : "black" }}
          >
            Get Started
          </button>
        </div>

        {/* CENTER TEXT SECTION */}
        <div className="text-[80px] flex flex-col items-center text-center h-[250px] overflow-hidden">
          {/* First line — Characters reveal based on scroll  */}
          <motion.div className="flex h-[90px]">
            {"Go beyond Chat.".split("").map((char, i) => {
              const revealStart = i * 0.04; // when each char starts
              const revealEnd = revealStart + 0.15; // when each char fully visible

              // Clamp reveal progress between 0 → 1
              const charProgress = Math.min(
                1,
                Math.max(
                  0,
                  (progress - revealStart) / (revealEnd - revealStart)
                )
              );

              return (
                <motion.span
                  key={i}
                  style={{
                    opacity: charProgress,
                    transform: `translateY(${20 - charProgress * 20}px)`,
                    display: "inline-block",
                    transition: "opacity 0.1s linear, transform 0.1s ease-out",
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Second line — fades in after first line completes */}
          <motion.p
            style={{
              opacity: progress >= 0.85 ? 1 : 0,
              transform:
                progress >= 0.85 ? "translateY(0px)" : "translateY(15px)",
              transition: "all 0.4s ease-out",
              color: progress === 0 ? "white" : "black",
            }}
          >
            Enterprize Autonomy
          </motion.p>
        </div>

        {/* BOTTOM SECTION */}
        <motion.div
          animate={{
            opacity: progress > 0.8 ? 1 : 0,
            y: progress > 0.8 ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 pb-6"
        >
          <div className="text-center">
            <p className="text-gray-600">Turn AI in your Applications</p>
            <p className="text-black">into Agents and Automations</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <ArrowDownFromLine color="black" />
            <p className="text-[11px] text-black">Scroll to Explore</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSubheader;
