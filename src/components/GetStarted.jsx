import React from "react";

export default function GetStarted({ onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-[2px] z-[9998]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="
          fixed top-0 right-0 h-screen
          w-full md:w-1/2
          bg-white
          shadow-2xl
          z-[9999]
          overflow-y-auto
          transition-transform duration-300
        "
        role="dialog"
      >
        <div className="ptcom-design__inner__mmx7eq p-6">
          {/* Close Button */}
          <button
            className="ptcom-design__close__msyp35 ptcom-design__close__mmx7eq mb-4"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 17"
              width="18"
              height="18"
            >
              <title>Close Drawer</title>
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M1.526 1.148l14.999 14.999M.819 16.145L15.818 1.147"
              ></path>
            </svg>
          </button>

          {/* Header Text */}
          <div className="ptcom-design__content__mmx7eq">
            <div className="ptcom-design__content__1dw1vg2">
              <header className="ptcom-design__header__1dw1vg2">
                <div className="ptcom-design__earmark__1dw1vg2 text-sm text-gray-500">
                  CONTACT / DEMO REQUEST + PARTNERSHIP INQUIRY
                </div>
              </header>

              <h2 className="ptcom-design__title__1dw1vg2 mt-4 text-2xl font-semibold">
                Interested in solving your problems with Palantir software?
              </h2>

              {/* FORM */}
              <div className="ptcom-design__formWrapper__5qadw9 ptcom-design__formWrapperPlain__5qadw9 mt-6">
                <form
                  className="space-y-5"
                  id="getStartedForm"
                  noValidate
                >
                  {/* FIRST NAME */}
                  <div>
                    <label className="block mb-1 font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>

                  {/* LAST NAME */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>

                  {/* JOB TITLE */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Company / Institution <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>

                  {/* COUNTRY */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    >
                      <option value="">Select…</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>

                  {/* PROJECT CONTEXT */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded p-2"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800"
                  >
                    Submit
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Please see our{" "}
                    <a href="/privacy-and-security" className="underline">
                      Privacy Policy
                    </a>{" "}
                    regarding how we will handle this information.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* END CONTENT */}
        </div>
      </div>
    </>
  );
}
