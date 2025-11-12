import { motion } from "framer-motion";
import footerData from "../lib/data/footer-data";

const FooterList = ({ title, items }) => (
  <div className="flex flex-col gap-3">
    <h4 className="font-semibold text-gray-400">{title}</h4>
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item.id} className="flex items-center">
          <a
            href={`/${item.slug}`}
            className="group relative flex items-center text-gray-600 hover:text-black transition-all duration-300 ease-in-out"
          >
            <span
              className="
                inline-block 
                h-px
                bg-gray-400
                shrink-0 
                rounded-sm 
                w-0 
                transition-all 
                duration-300 
                ease-in-out 
                group-hover:w-4 
                group-hover:opacity-100 
                opacity-0
              "
            ></span>

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hover:text-gray-400"
            >
              {item.title}
            </motion.span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

function Footer() {
  return (
    <div className="bg-gray-50">
      <div className="flex w-[98%] py-16 mx-auto gap-10 text-gray-800">
        {/* --- LEFT COLUMN --- */}
        <div className="w-[25%]">
          <div className="flex flex-col gap-6 divide-y divide-gray-300 w-[80%]">
            <div className="flex flex-col gap-5">
              <p className="text-sm text-gray-600 border-b border-gray-300 pb-5">
                ©2025 Palantir Technologies Inc. <br /> All rights reserved.
              </p>
              <p className="text-sm text-gray-600 cursor-pointer pb-5 hover:text-gray-400">
                Cookies Settings
              </p>
            </div>

            {/* Country List */}
            <div className="flex flex-wrap gap-y-2 pb-5">
              {footerData.country.map((item) => (
                <span
                  key={item.id}
                  className="px-2 text-[16px] text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {item.title}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              {footerData.socialPlatform.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-400 rounded-full py-2 w-[80%] text-center hover:bg-gray-300 cursor-pointer transition-all duration-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="w-[75%] grid grid-cols-4 gap-8">
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
