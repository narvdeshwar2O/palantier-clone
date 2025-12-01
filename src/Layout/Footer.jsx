import { motion } from "framer-motion";
import footerData from "../lib/data/footer-data";

export const FooterList = ({ title, items, className = "" }) => (
  <div className="flex flex-col gap-3 text-center md:text-left">
    <h4 className={`font-semibold text-gray-400 ${className}`}>{title}</h4>
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-center md:justify-start"
        >
          <a
            href={`/${item.slug}`}
            className="group relative flex items-center justify-center md:justify-start text-gray-600 hover:text-black transition-all duration-300 ease-in-out"
          >
            <span
              className="
                inline-block h-px bg-gray-400 shrink-0 rounded-sm w-0
                transition-all duration-300 ease-in-out
                group-hover:w-4 group-hover:opacity-100 opacity-0
              "
            ></span>

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`hover:text-gray-400 ml-2 ${className}`}
            >
              {item.title}
            </motion.span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

function Footer({ theme = "light" }) {
  return (
    <div className={`${theme == "light" ? "bg-gray-50" : "bg-[#1E2124]"}`}>
      <div
        className="
          w-[95%] mx-auto py-12 gap-10 text-gray-800 mt-5 md:mt-0
          flex flex-col lg:flex-row
        "
      >
        <div className="lg:w-1/4 w-full">
          <div className="flex flex-col gap-6 divide-y divide-gray-300 w-full">
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <p
                className={`text-sm ${
                  theme == "light" ? "text-gray-600" : "text-white"
                } border-b border-gray-300 pb-5`}
              >
                ©2025 Palantir Technologies Inc. <br /> All rights reserved.
              </p>

              <p
                className={`text-sm ${
                  theme == "light" ? "text-gray-600" : "text-white"
                } cursor-pointer pb-5 hover:text-gray-400`}
              >
                Cookies Settings
              </p>
            </div>

            {/* Country List */}
            <div
              className="
                flex flex-wrap gap-y-2 pb-5 justify-center text-center
                lg:justify-start lg:text-left
              "
            >
              {footerData.country.map((item) => (
                <span
                  key={item.id}
                  className={`
                    px-2 text-[16px] ${
                      theme == "light"
                        ? "text-gray-600 hover:text-black"
                        : "text-white hover:text-gray-600"
                    } 
                    transition-colors duration-200 cursor-pointer
                  `}
                >
                  {item.title}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div
              className="
                flex flex-col gap-3 pb-5 items-center
                lg:items-start
              "
            >
              {footerData.socialPlatform.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block border ${theme = "light"
                      ? "border-gray-400 hover:bg-gray-300"
                      : "border-white text-white"} rounded-full py-2 
                    w-[80%] md:w-[70%] text-center 
                     cursor-pointer 
                    transition-all duration-500
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
            lg:w-3/4 w-full 
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-8 mt-10 lg:mt-0 
            items-center text-center 
            lg:items-start lg:text-left
          "
        >
          <FooterList title="Offerings" items={footerData.offerings} />
          <FooterList title="Impact Studies" items={footerData.impactStudies} />
          <FooterList title="Capabilities" items={footerData.capabilities} />
          <FooterList title="Documents" items={footerData.documents} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
