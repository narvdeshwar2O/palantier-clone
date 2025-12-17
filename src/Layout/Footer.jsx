import { motion } from "framer-motion";
import footerData from "../lib/data/footer-data";

export const FooterList = ({ title, items, className = "", theme }) => (
  <div className="flex flex-col gap-4">
    <h4
      className={`font-semibold text-sm ${
        theme === "light" ? "text-gray-500" : "text-gray-300"
      }`}
    >
      {title}
    </h4>

    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`/${item.slug}`}
            className={`group flex items-center transition-all duration-300
              ${
                theme === "light"
                  ? "text-gray-600 hover:text-black"
                  : "text-gray-300 hover:text-white"
              }
            `}
          >
            <span
              className={`
                inline-block h-px w-0 opacity-0
                transition-all duration-300
                group-hover:w-4 group-hover:opacity-100
                ${theme === "light" ? "bg-gray-500" : "bg-gray-400"}
              `}
            />

            <motion.span
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
              className="ml-2"
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
    <footer className={theme === "light" ? "bg-gray-50" : "bg-[#1E2124]"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT SECTION */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6">
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              ©2025 Palantir Technologies Inc.
              <br />
              All rights reserved.
            </p>

            <p
              className={`text-sm cursor-pointer transition-colors ${
                theme === "light"
                  ? "text-gray-600 hover:text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Cookies Settings
            </p>

            {/* Countries */}
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {footerData.country.map((item) => (
                <span
                  key={item.id}
                  className={`text-sm cursor-pointer transition-colors ${
                    theme === "light"
                      ? "text-gray-600 hover:text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 mt-4">
              {footerData.socialPlatform.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border py-2 text-center transition-all
                    ${
                      theme === "light"
                        ? "border-gray-400 text-gray-700 hover:bg-gray-200"
                        : "border-gray-300 text-gray-300 hover:bg-gray-700"
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <FooterList theme={theme} title="Offerings" items={footerData.offerings} />
            <FooterList theme={theme} title="Impact Studies" items={footerData.impactStudies} />
            <FooterList theme={theme} title="Capabilities" items={footerData.capabilities} />
            <FooterList theme={theme} title="Documents" items={footerData.documents} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
