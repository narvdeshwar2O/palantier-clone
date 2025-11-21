import { motion } from "framer-motion";
import OverlayTransition from "./OverlayTransition";

export default function PageTransition({ children }) {
  return (
    <>
      {/* PAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.55,
          ease: [0.76, 0, 0.24, 1], // premium cubic-bezier
        }}
      >
        {children}
      </motion.div>

      {/* REVEAL OVERLAY */}
      <OverlayTransition />
    </>
  );
}
