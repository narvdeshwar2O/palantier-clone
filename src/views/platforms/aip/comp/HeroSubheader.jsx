import { useEffect, useState } from "react";
import { ArrowDownFromLine } from "lucide-react";
import { motion } from "framer-motion";

const modernGradientColor = (p) => {
  p = Math.max(0, Math.min(1, p)); // clamp

  const colors = [
    [186, 127, 25],
    [80, 158, 255],
    [100, 210, 200],
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

function HeroSubheader({ onOpen }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight / 2;
      const value = Math.min(1, Math.max(0, (window.scrollY - mid) / 400));
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = progress === 0 ? "#1D1F2B" : "#ffffff";

  return (
    <motion.div
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="h-screen"
    >
      <div className="flex flex-col justify-between h-full w-full md:w-[90%] mx-auto p-4">
        {/* TOP SECTION */}
        <div className="flex justify-between w-full pt-10 sm:mt-20">
          {["Software", "AIP", "Get Started"].map((text, i) => (
            <button
              key={i}
              onClick={text === "Get Started" ? onOpen : undefined}
              className="uppercase text-xs sm:text-base md:text-xl transition-colors"
              style={{ color: progress === 0 ? "white" : "black" }}
            >
              {text}
            </button>
          ))}
        </div>

        {/* CENTER TEXT SECTION */}
        <div
          className="flex flex-col items-center text-center overflow-hidden 
            text-[36px] sm:text-[60px] md:text-[80px] lg:text-[100px] space-y-4 font-semibold h-40 sm:h-[230px] md:h-[260px]"
        >
          {/* Line reveal */}
          <motion.div className="flex h-[50px] sm:h-[70px] md:h-[90px]">
            {"Go beyond Chat.".split("").map((char, i) => {
              const revealStart = i * 0.04;
              const revealEnd = revealStart + 0.15;

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
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="modern-gradient-text font-semibold text-[clamp(20px,5vw,50px)]"
            animate={{
              opacity: progress >= 0.85 ? 1 : 0,
              y: progress >= 0.85 ? 0 : 15,
              backgroundPosition: `${progress * 40}% 50%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Enterprise Autonomy
          </motion.p>
        </div>

        {/* BOTTOM SECTION */}
        <motion.div
          animate={{
            opacity: progress > 0.8 ? 1 : 0,
            y: progress > 0.8 ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 pb-6 text-sm sm:text-base"
        >
          <div className="text-center">
            <p className="text-gray-600">Turn AI in your Applications</p>
            <p className="text-black font-semibold">
              into Agents and Automations
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <ArrowDownFromLine color="black" size={20} />
            <p className="text-[10px] text-black">Scroll to Explore</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSubheader;
