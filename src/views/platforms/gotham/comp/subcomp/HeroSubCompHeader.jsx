import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import VideoContainer from "@/components/VideoContainer";

export default function HeroSubCompHeader({ items }) {
  const mainRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  const clipPath = useTransform(
    smoothScroll,
    [0, 1],
    [
      items.clipPath?.start ||
        "polygon(50% 20%, 80% 50%, 50% 80%, 20% 50%)",
      items.clipPath?.end ||
        "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ]
  );

  const textOpacity = useTransform(smoothScroll, [0, 0.3], [1, 0]);
  const textY = useTransform(smoothScroll, [0, 0.3], [0, -80]);

  return (
    <div ref={mainRef} className="relative">
      {/* HERO TEXT */}
      <div className="h-screen sticky top-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity: textOpacity, y: textY }}
          className="flex h-full flex-col"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 pt-6 text-white text-sm sm:text-base">
            <p>Software</p>
            <p className="opacity-70">{"{Gotham}"}</p>
            <p className="cursor-pointer hover:underline">Get Started</p>
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center justify-center grow px-4 text-white text-center">
            <h1
              className="
                font-light
                text-4xl sm:text-6xl md:text-7xl lg:text-9xl
                leading-tight
                max-w-6xl
              "
            >
              {items.title}
            </h1>

            <p
              className="
                mt-4 sm:mt-6
                text-sm sm:text-lg md:text-xl
                max-w-2xl
                opacity-80
              "
            >
              Operating System for Global Decision-Making
            </p>
          </div>
        </motion.div>
      </div>

      {/* VIDEO SCROLL SECTION */}
      <div className="relative h-[250vh] sm:h-[300vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ clipPath, willChange: "clip-path" }}
            className="absolute inset-0 bg-black"
          >
            <VideoContainer videoPath={[items.videoSrc]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
