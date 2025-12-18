import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FormFields from "./FormFields";
import { formFields } from "@/lib/data/form-fields";
import Button from "./Button";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function GetStarted({ onClose }) {
  return (
    <>
      {/* BACKDROP */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      />

      {/* DRAWER */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-full lg:w-1/2 bg-white shadow-2xl z-1000 overflow-y-auto"
        role="dialog"
        variants={drawerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="m-5 size-8 hover:bg-black hover:text-white transition cursor-pointer"
          onClick={onClose}
        >
          X
        </button>

        <div className="px-4 pb-10">
          <div className="flex justify-between text-gray-400">
            <p className="text-sm">
              CONTACT / DEMO REQUEST + PARTNERSHIP INQUIRY
            </p>

            <div className="group flex items-center gap-1 cursor-pointer">
              <span>Investor Relations</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:-rotate-45"
              />
            </div>
          </div>

          <p className="text-4xl mt-8 font-semibold w-full ">
            Interested in solving your problems with Palantir software?
          </p>

          <form className="mt-8 space-y-4">
            {formFields.map((item) => (
              <FormFields
                key={item.labelName}
                labelName={item.labelName}
                type={item.type}
              />
            ))}

            <Button className="w-full md:w-1/2 mt-4">
              Submit
            </Button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
