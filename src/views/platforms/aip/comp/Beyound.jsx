import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { V4 } from "../../../../assets/videos";

function CardDesign({ title, count }) {
  return (
    <div className="border p-2 rounded-md border-white w-42 h-fit">
      <p className="text-white">{title}</p>
      <p className="text-white/50">{count}</p>
    </div>
  );
}

function Beyound() {
  const refA = useRef(null);
  const refB = useRef(null);
  const refC = useRef(null);
  const containerRef = useRef(null);

  const isA = useInView(refA, { once: true, margin: "-100px" });
  const isB = useInView(refB, { once: true, margin: "-100px" });
  const isC = useInView(refC, { once: true, margin: "-100px" });

  /* ======================================
     🧭 START CONTAINER AT TOP
     ====================================== */
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0; // reset scroll inside Beyound
    }
  }, []);

  /* ==================================================
     🚫 LOCK CONTAINER SCROLL UNTIL SECTION C IS SEEN
     ================================================== */
  useEffect(() => {
    if (containerRef.current) {
      if (!isC) {
        containerRef.current.style.overflowY = "auto"; // allow scroll inside Beyound
      } else {
        containerRef.current.style.overflowY = "visible"; // unlock after C visible
      }
    }
  }, [isC]);

  /* =============================
     🎬 ANIMATION VARIANTS
     ============================= */
  const boxVariants = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#1D1F2B] pb-10">
      {/* ====================== HEADER ====================== */}
      <div className="flex justify-between w-[95%] mx-auto">
        <div className="mt-28">
          <p className="text-5xl text-white">Beyound Chat</p>
          <p className="text-[#424662] text-3xl">Explore AIP</p>
        </div>

        <div className="mt-28 flex gap-2">
          <CardDesign title="AI App" count={1} />
          <CardDesign title="Action-Driven Logic" count={2} />
          <CardDesign title="Automation" count={3} />
        </div>
      </div>

      {/* ================ MAIN SNAP-SCROLL CONTAINER ================= */}
      <div
        ref={containerRef}
        className="border-[0.5px] border-white/20 w-[90%] mx-auto mt-2 rounded-md h-screen flex overflow-y-auto snap-y snap-mandatory"
      >
        <div className="w-12 h-full border-r border-white/20"></div>

        <div className="w-full flex flex-col">
          <div className="h-12 border-b border-white/20"></div>

          <div className="flex-1 relative">
            <video src={V4} className="w-full h-full object-cover" autoPlay muted loop />

            {/* ========== SECTION A ========== */}
            <motion.div
              ref={refA}
              variants={boxVariants}
              initial="hidden"
              animate={isA ? "show" : "hidden"}
              className="absolute z-20 bg-white/10 w-[620px] top-26 right-0 h-64 snap-start"
            />
            <motion.span
              variants={badgeVariants}
              initial="hidden"
              animate={isA ? "show" : "hidden"}
              className="absolute size-8 bg-white/50 text-black top-46 left-1/2 rounded-full flex items-center justify-center snap-start"
            >
              A
            </motion.span>

            {/* ========== SECTION B ========== */}
            <motion.div
              ref={refB}
              variants={boxVariants}
              initial="hidden"
              animate={isB ? "show" : "hidden"}
              className="absolute z-20 bg-yellow-400/10 w-[620px] top-[362px] right-0 h-[360px] snap-start"
            />
            <motion.span
              variants={badgeVariants}
              initial="hidden"
              animate={isB ? "show" : "hidden"}
              className="absolute size-8 bg-white/50 text-black top-1/2 left-1/2 rounded-full flex items-center justify-center snap-start"
            >
              B
            </motion.span>

            {/* ========== SECTION C ========== */}
            <motion.div
              ref={refC}
              variants={boxVariants}
              initial="hidden"
              animate={isC ? "show" : "hidden"}
              className="absolute z-20 bg-red-400/10 w-[140px] top-[362px] right-0 h-14 snap-start"
            />
            <motion.span
              variants={badgeVariants}
              initial="hidden"
              animate={isC ? "show" : "hidden"}
              className="absolute size-8 bg-white/50 text-black rounded-full top-1/2 right-0 flex items-center justify-center snap-start"
            >
              C
            </motion.span>
          </div>
        </div>

        <div className="w-12 h-full border-l border-white/20"></div>
      </div>
    </div>
  );
}

export default Beyound;
