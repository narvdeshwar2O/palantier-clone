import Button from "../Button";
import { Search, X, CornerDownRight } from "lucide-react";
import { useCustomNavigate } from "../../hooks/useNavigate";
import { menuItem, menuNavItem, newsItem } from "../../lib/data/menu-item";
import { Link } from "react-router-dom";
import AnimatedButton from "../AnimatedButton";
import { FooterList } from "../../Layout/Footer";
import FadeUp from "../animations/FadeUp";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import GetStarted from "../GetStarted";
import LogoSvg from "../LogoSvg";

function Menu() {
  const { goTo } = useCustomNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1E2124] text-white min-h-screen overflow-y-auto">
        <FadeUp delay={0.1}>
          <div className="fixed top-0 z-50 w-full bg-[#1E2124]">
            <div className="w-full md:w-[95%] mx-auto flex justify-between items-center p-4">
              {/* Logo */}
              <LogoSvg />

              {/* Desktop Actions */}
              <div className="hidden md:flex gap-4">
                <Button
                  size="md"
                  className="border border-white bg-transparent text-white hover:bg-white hover:text-black transition"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  Get started
                </Button>

                <div className="flex border border-white">
                  <Button
                    size="icon"
                    className="bg-transparent text-white hover:bg-white hover:text-black"
                    onClick={() => goTo("/search")}
                  >
                    <Search strokeWidth={0.9} />
                  </Button>

                  <Button
                    size="icon"
                    className="bg-white text-black hover:bg-gray-200"
                    onClick={() => goTo("/")}
                  >
                    <X strokeWidth={0.9} />
                  </Button>
                </div>
              </div>

              {/* Mobile Close */}
              <Button
                size="icon"
                className="md:hidden bg-white text-black"
                onClick={() => goTo("/")}
              >
                <X />
              </Button>
            </div>
          </div>
        </FadeUp>

        {/* ================= CONTENT ================= */}
        <div className="pt-24 pb-10">
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
            w-full
            md:w-[95%]
            mx-auto
            px-4
          "
          >
            {/* ================= LEFT NAV ================= */}
            <ul className="flex flex-col gap-4">
              <p className="border-t border-gray-600 uppercase text-sm pt-4">
                Navigation
              </p>

              {menuItem.map((item, i) => (
                <FadeUp key={item.id} delay={0.15 + i * 0.1}>
                  <li>
                    <span className="block text-xl md:text-2xl lg:text-3xl font-medium hover:text-gray-400 cursor-pointer">
                      {item.title}
                    </span>

                    {item.submenu && (
                      <ul className="mt-3 ml-2 flex flex-col gap-3 text-gray-400">
                        {item.submenu.map((sub, j) => (
                          <FadeUp key={sub.id} delay={0.2 + i * 0.1 + j * 0.05}>
                            <li className="flex gap-2 text-lg md:text-xl hover:text-gray-300 cursor-pointer">
                              <CornerDownRight size={18} />
                              {sub.title}
                            </li>
                          </FadeUp>
                        ))}
                      </ul>
                    )}
                  </li>
                </FadeUp>
              ))}
            </ul>

            {/* ================= MIDDLE NEWS ================= */}
            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between mb-4">
                <p className="text-gray-400 text-sm">Latest news</p>
                <p className="text-xs uppercase">News Room</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {newsItem.slice(0, 2).map((item, i) => (
                  <FadeUp key={i} delay={0.3 + i * 0.15}>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">{item.from}</p>
                      <img
                        src={item.src}
                        alt={item.from}
                        className="w-full rounded"
                      />
                      <Link to="#" className="block">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-300">
                          {item.description}
                        </p>
                      </Link>
                      <AnimatedButton title={item.forward} />
                    </div>
                  </FadeUp>
                ))}
              </div>

              <hr className="my-6 border-gray-600" />

              {/* Impact */}
              <div>
                <div className="flex justify-between mb-4">
                  <p className="text-gray-400 text-sm">Latest Impact</p>
                  <p className="text-xs underline cursor-pointer">View All ↗</p>
                </div>

                {newsItem.slice(2).map((item, i) => (
                  <FadeUp key={i} delay={0.45 + i * 0.15}>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-gray-400">{item.from}</p>
                      <img
                        src={item.src}
                        alt={item.from}
                        className="w-full rounded"
                      />
                      <Link to="#">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-300">
                          {item.description}
                        </p>
                      </Link>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* ================= RIGHT OFFERINGS ================= */}
            <div className="border-t border-gray-600 pt-4">
              <FadeUp delay={0.6}>
                <div className="flex justify-between mb-4">
                  <p className="text-gray-400 text-sm">Offerings</p>
                  <p className="text-xs underline cursor-pointer">View All ↗</p>
                </div>
              </FadeUp>

              <FadeUp delay={0.75}>
                <div className="flex flex-col gap-4 text-sm md:text-base">
                  <p>
                    Our platforms are used across public, private and non-profit
                    sectors to help organizations operate intelligently at
                    scale.
                  </p>

                  <AnimatedButton title="Learn more about AIP" />

                  <hr className="border-gray-600" />

                  <FooterList
                    title="About Palantir"
                    items={menuNavItem}
                    className="text-white"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isDrawerOpen && <GetStarted onClose={() => setIsDrawerOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export default Menu;
