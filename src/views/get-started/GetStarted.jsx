import { useState } from "react";
import FormFields from "../../components/FormFields";
import Footer from "../../Layout/Footer"

export default function GetStarted() {
  const countries = [
    "India",
    "United States",
    "Germany",
    "United Kingdom",
    "Australia",
    "Singapore",
  ];

  const [form, setForm] = useState({
    productUpdates: false,
    salesOutreach: false,
    futureEvents: false,
    eduResources: false,
  });

  const handleCheckbox = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM DATA:", form);
  };

  return (
    <>
      <div className="min-h-screen bg-white text-[#111] px-3 py-20">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between w-[98%] mx-auto gap-10 mt-10">
          <h1 className="text-[100px] leading-none font-light tracking-tight">
            Get Started
          </h1>

          <p className="text-2xl max-w-sm leading-snug text-[#333]">
            Interested in solving your problems with Palantir software?
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-24 w-[98%] mx-auto space-y-6"
        >
          <FormFields labelName="FIRST NAME" placeholder="Enter first name" />
          <FormFields labelName="LAST NAME" placeholder="Enter last name" />
          <FormFields
            labelName="BUSINESS EMAIL ADDRESS"
            type="email"
            placeholder="Enter business email"
          />
          <FormFields
            labelName="PHONE NUMBER"
            type="number"
            placeholder="Enter phone number"
          />
          <FormFields labelName="JOB TITLE" placeholder="Enter job title" />
          <FormFields
            labelName="COMPANY / INSTITUTION"
            placeholder="Enter company name"
          />

          {/* COUNTRY */}
          <FormFields labelName="COUNTRY" type="select" options={countries} />

          {/* TEXTAREA */}
          <FormFields labelName="TELL US ABOUT YOUR PROJECT" type="textarea" />

          {/* CHECKBOXES */}
          <Checkbox
            name="productUpdates"
            text="OPT-IN TO RECEIVE PALANTIR PRODUCT UPDATES"
            checked={form.productUpdates}
            onChange={handleCheckbox}
          />
          <Checkbox
            name="salesOutreach"
            text="OPT-IN TO PERSONALIZED SALES OUTREACH"
            checked={form.salesOutreach}
            onChange={handleCheckbox}
          />
          <Checkbox
            name="futureEvents"
            text="OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS"
            checked={form.futureEvents}
            onChange={handleCheckbox}
          />
          <Checkbox
            name="eduResources"
            text="OPT-IN TO RECEIVE EDUCATIONAL RESOURCES"
            checked={form.eduResources}
            onChange={handleCheckbox}
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="px-10 py-3 border border-[#333] rounded-sm hover:bg-[#111] hover:text-white  cursor-pointer transition-all duration-500"
          >
            Submit
          </button>

          {/* FOOTER TEXT */}
          <p className="text-sm text-[#666] pt-10">
            Please see our{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>{" "}
            regarding how we will handle this information.
          </p>
        </form>
      </div>
      <Footer/>
    </>
  );
}

/* CHECKBOX COMPONENT */
function Checkbox({ text, ...props }) {
  return (
    <label className="flex items-center gap-3 text-xs tracking-widest text-[#333]">
      <input
        type="checkbox"
        {...props}
        className="h-4 w-4 border border-[#999]"
      />
      {text}:
    </label>
  );
}
