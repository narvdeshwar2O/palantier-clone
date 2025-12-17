import FormFields from "../FormFields";
import { popularSearches } from "../../lib/data/popular-seaches";
import Button from "../Button";
import { List, X } from "lucide-react";
import { motion } from "framer-motion";
import { useCustomNavigate } from "../../hooks/useNavigate";
import LogoSvg from "../LogoSvg";

function SearchComponent() {
  const { goTo } = useCustomNavigate();

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#1E2124] text-white min-h-screen overflow-hidden">
      <div className="fixed top-0 z-50 w-full bg-[#1E2124]">
        <div className="w-full md:w-[95%] mx-auto flex justify-between items-center p-4">
          <LogoSvg />

          {/* Desktop Actions */}
          <div className="hidden md:flex gap-5">
            <Button size="lg">Get started</Button>

            <div className="flex border border-white">
              <Button
                size="icon"
                className="hover:bg-white hover:text-black border-none"
                onClick={() => goTo("/")}
              >
                <X strokeWidth={0.9} />
              </Button>

              <Button
                size="icon"
                className="bg-[#1E2124] text-white hover:bg-white hover:text-black border-none"
                onClick={() => goTo("/menu")}
              >
                <List strokeWidth={0.9} />
              </Button>
            </div>
          </div>

          <Button
            size="icon"
            className="md:hidden bg-white text-black"
            onClick={() => goTo("/")}
          >
            <X />
          </Button>
        </div>
      </div>

      <div className="pt-10 px-4 flex flex-col justify-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
          {/* Search Input */}
          <FormFields
            type="text"
            className="
              text-white
              border
              border-gray-600
              p-4
              focus:border-gray-400
              transition-all
              duration-500
              w-full
              text-lg
              md:text-xl
            "
            placeholder="Start typing to search"
          />

          {/* Popular Searches */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <p className="text-gray-500 text-xs uppercase tracking-wide">
              Popular Searches
            </p>

            <motion.ul
              className="flex flex-wrap gap-3 text-sm md:text-base"
              variants={listVariants}
              initial="hidden"
              animate="show"
            >
              {popularSearches.map((item) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  className="
                    cursor-pointer
                    underline
                    hover:text-gray-400
                    transition
                  "
                >
                  {item.title}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
