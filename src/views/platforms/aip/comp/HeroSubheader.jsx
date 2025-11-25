import { useEffect, useState } from "react";
import { ArrowDownFromLine } from "lucide-react";
import { motion } from "framer-motion";
const modernGradientColor = (p) => {
  p = Math.max(0, Math.min(1, p)); // clamp

  // Modern gradient palette:
  const colors = [
    [186, 127, 25], // soft purple
    [80, 158, 255], // electric blue
    [100, 210, 200], // aqua teal
  ];

  const index = Math.floor(p * (colors.length - 1));
  const next = Math.min(index + 1, colors.length - 1);
  const t = p * (colors.length - 1) - index;

  const c = [
    colors[index][0] + (colors[next][0] - colors[index][0]) * t,
    colors[index][1] + (colors[next][1] - colors[index][1]) * t,
    colors[index][2] + (colors[next][2] - colors[index][2]) * t,
  ];

  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
};

function HeroSubheader() {
  const [progress, setProgress] = useState(0);
  // Glow strength
  const glow = (progress * 35).toFixed(0);

  // 3D depth amount
  const depth = progress * 6;

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

  const bgColor = progress === 0 ? "#1D1F2B" : "#ffffff";

  return (
    <motion.div
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
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

          <motion.p
            className="modern-gradient-text font-semibold"
            animate={{
              opacity: progress >= 0.85 ? 1 : 0,
              y: progress >= 0.85 ? 0 : 15,
              backgroundPosition: `${progress * 40}% 50%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
