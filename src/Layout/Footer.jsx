import { motion } from "framer-motion";
import footerData from "../lib/data/footer-data";

export const FooterList = ({ title, items, theme }) => (
  <div className="flex flex-col gap-4">
    <h4 className={`font-semibold text-xs uppercase tracking-widest ${
      theme === "light" ? "text-gray-400" : "text-gray-500"
    }`}>
      {title}
    </h4>
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`/${item.slug}`}
            className={`group flex items-center transition-all duration-300 ${
              theme === "light" ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
            }`}
          >
            <span className={`h-px w-0 opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100 ${
              theme === "light" ? "bg-gray-400" : "bg-gray-500"
            }`} />
            <motion.span whileHover={{ x: 4 }} className="ml-0 group-hover:ml-2 text-sm">
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
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* flex-col for mobile (stacking)
            md:flex-row for tablet and up (side-by-side) 
        */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-8">
          
          {/* LEFT SIDEBAR SECTION */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-8">
            <div className="space-y-1">
              <p className={`text-sm font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                ©2025 Palantir Technologies Inc.
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">All rights reserved.</p>
            </div>

            <button className={`text-sm text-left hover:underline w-fit ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              Cookies Settings
            </button>

            {/* Countries List */}
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {footerData.country.map((item) => (
                <span key={item.id} className="text-[11px] uppercase cursor-pointer hover:text-blue-500 transition-colors text-gray-500">
                  {item.title}
                </span>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col gap-2 w-full max-w-[200px]">
              {footerData.socialPlatform.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className={`text-[12px] font-bold py-2 px-4 border rounded-full text-center transition-all ${
                    theme === "light" 
                    ? "border-gray-300 hover:bg-black hover:text-white" 
                    : "border-gray-700 hover:bg-white hover:text-black text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT GRID SECTION */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              <FooterList theme={theme} title="Offerings" items={footerData.offerings} />
              <FooterList theme={theme} title="Impact Studies" items={footerData.impactStudies} />
              <FooterList theme={theme} title="Capabilities" items={footerData.capabilities} />
              <FooterList theme={theme} title="Documents" items={footerData.documents} />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;