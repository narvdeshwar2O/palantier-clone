import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import VideoContainer from "@/components/VideoContainer";

export default function HeroSubCompHeader({ items }) {
    const mainRef = useRef(null);
    const { scrollYProgress: mainScrollY } = useScroll({
        target: mainRef,
        offset: ["start start", "end end"],
    });

    const smoothMainScrollY = useSpring(mainScrollY, {
        stiffness: 50,
        damping: 20,
        mass: 0.5,
        restDelta: 0.001,
    });

    const clipPath = useTransform(
        smoothMainScrollY,
        [0, 1],
        [
            items.clipPath?.start || "polygon(50% 20%, 80% 50%, 50% 80%, 20% 50%)",
            items.clipPath?.end || "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
        ]
    );

    // Text opacity fade out as it scrolls up (using main wrapper progress)
    const textOpacity = useTransform(smoothMainScrollY, [0, 0.3], [1, 0]);
    const textY = useTransform(smoothMainScrollY, [0, 0.3], [0, -100]);

    return (
        <div ref={mainRef} className="relative">
            <div className="h-screen sticky top-0 z-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ opacity: textOpacity, y: textY }}
                    className="flex h-full flex-col justify-between"
                >
                    <div className="text-white flex justify-between w-[98%] mx-auto text-2xl pt-10">
                        <p>Software</p>
                        <p>{"{Gotham}"}</p>
                        <p> Get Started</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white grow pb-20">
                        <p className="text-9xl text-center leading-tight">{items.title}</p>
                        <p className="text-center text-2xl mt-6">
                            Operating System for Global Decision-Making
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="relative h-[300vh] z-10">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <motion.div
                        style={{ clipPath, willChange: "clip-path" }}
                        className="absolute inset-0 h-full w-full bg-black"
                    >
                        <VideoContainer videoPath={[items.videoSrc]} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
