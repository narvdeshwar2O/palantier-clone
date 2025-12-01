import { motion } from "framer-motion";
import footerData from "../lib/data/footer-data";

export const FooterList = ({ title, items, className = "", theme }) => (
  <div className="flex flex-col gap-3 text-center md:text-left">
    <h4
      className={`font-semibold ${
        theme === "light" ? "text-gray-500" : "text-gray-300"
      } ${className}`}
    >
      {title}
    </h4>

    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-center md:justify-start"
        >
          <a
            href={`/${item.slug}`}
            className={`group relative flex items-center justify-center md:justify-start transition-all duration-300 ease-in-out
              ${
                theme === "light"
                  ? "text-gray-600 hover:text-black"
                  : "text-gray-300 hover:text-white"
              }
            `}
          >
            <span
              className={`
                inline-block h-px rounded-sm w-0 shrink-0 opacity-0
                transition-all duration-300 ease-in-out
                group-hover:w-4 group-hover:opacity-100
                ${theme === "light" ? "bg-gray-500" : "bg-gray-400"}
              `}
            ></span>

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`ml-2 ${className}`}
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
    <div className={`${theme === "light" ? "bg-gray-50" : "bg-[#1E2124]"}`}>
      <div
        className="
          w-[95%] mx-auto py-12 gap-10 mt-5 md:mt-0
          flex flex-col lg:flex-row
        "
      >
        {/* Left Section */}
        <div className="lg:w-1/4 w-full">
          <div className="flex flex-col gap-6 divide-y divide-gray-500 w-full">
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <p
                className={`text-sm border-b pb-5 ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                ©2025 Palantir Technologies Inc. <br /> All rights reserved.
              </p>

              <p
                className={`text-sm cursor-pointer pb-5 transition-colors duration-300 ${
                  theme === "light"
                    ? "text-gray-600 hover:text-black"
                    : "text-gray-300 hover:text-white"
                }`}
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
                    px-2 text-[16px] transition-colors duration-200 cursor-pointer
                    ${
                      theme === "light"
                        ? "text-gray-600 hover:text-black"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {item.title}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 pb-5 items-center lg:items-start">
              {footerData.socialPlatform.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block border rounded-full py-2 w-[80%] md:w-[70%] text-center cursor-pointer transition-all duration-500
                    ${
                      theme === "light"
                        ? "border-gray-400 hover:bg-gray-200 text-gray-700"
                        : "border-gray-300 text-gray-300 hover:bg-gray-700"
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="
            lg:w-3/4 w-full
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-8 mt-10 lg:mt-0
            items-center text-center lg:items-start lg:text-left
          "
        >
          <FooterList theme={theme} title="Offerings" items={footerData.offerings} />
          <FooterList theme={theme} title="Impact Studies" items={footerData.impactStudies} />
          <FooterList theme={theme} title="Capabilities" items={footerData.capabilities} />
          <FooterList theme={theme} title="Documents" items={footerData.documents} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
