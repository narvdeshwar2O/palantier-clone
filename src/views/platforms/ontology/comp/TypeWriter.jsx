import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TypewriterText = ({ text, speed = 50, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  return (
    <motion.p
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      <span className="border-r-2 border-white ml-1 animate-pulse"></span>
    </motion.p>
  );
};

export default TypewriterText;
