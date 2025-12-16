import { motion } from "framer-motion";

export default function ExplainBlock({
  title,
  description,
  children, // any image or video
  reverse = false,
}) {
  return (
    <section className="w-full flex justify-center py-20">
      <div
        className={`w-[90%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-semibold">
            {title}
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* RIGHT CONTENT (IMAGE / VIDEO / ANY JSX) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
