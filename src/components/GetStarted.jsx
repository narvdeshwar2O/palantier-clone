import {  ArrowRight } from "lucide-react";
import FormFields from "./FormFields";
import { formFields } from "../lib/data/form-fields";
import Button from "./Button";

export default function GetStarted({ onClose }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[3px] z-9998"
        onClick={onClose}
      />
      <div
        className="fixed top-0 right-0 h-screen w-full md:w-1/2 bg-white shadow-2xl z-9999 overflow-y-auto transition-transform duration-500"
        role="dialog"
      >
        <button
          className="cursor-pointer size-8 hover:bg-gray-800 font-600 hover:text-white transition-all duration-300 mt-5"
          onClick={onClose}
        >
          X
        </button>
        {/* content section */}
        <div className="">
          <div className="flex justify-between px-3 text-gray-400">
            <p className="text-sm mt-2">
              CONTACT / DEMO REQUEST + PARTNERSHIP INQUIRY
            </p>

            <div className="group border-t-2 hover:text-gray-600 cursor-pointer transition-all duration-300 flex items-center">
              <span>Investor Relations</span>
              <ArrowRight
                className="transition-transform duration-300 ease-in-out group-hover:-rotate-45"
                size={18}
              />
            </div>
          </div>
          <p className="w-[60%] text-4xl mt-10 px-3 font-600 font-sans">
            Interested in solving your problems with Palantir software?
          </p>
          <div className="p-3">
            <form action="">
              {formFields.map((item) => (
                <FormFields labelName={item.labelName} type={item.type} />
              ))}
              <div className="w-1/2">
                <Button variant="default" size="md" className="m-3 w-full">
                  Submit
                </Button>
              </div>
            </form>
            <p>
              Please see our <span className="underline">Privacy Policy</span> regarding how we will handle this
              information.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
}
