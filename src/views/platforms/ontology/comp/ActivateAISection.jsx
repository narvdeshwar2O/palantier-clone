import formData from "@/lib/data/formData.json";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import FormFields from "@/components/FormFields";

export default function ActivateAIEnterprise() {
  const countries = useMemo(
    () =>
      countryList()
        .getData()
        .map((c) => c.label),
    []
  );

  return (
    <section className="w-full px-6 lg:px-20 py-20 bg-[#f7f7f9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sticky top-0">
        {/* LEFT TITLE + ANIMATED LINE */}
        <div>
          <h1 className="text-5xl md:text-8xl font-light leading-tight mt-8">
            Activate AI
            <br />
            Across the Enterprise
          </h1>
        </div>

        {/* RIGHT FORM */}
        <form className="space-y-4  bg-white p-10 border rounded-2xl shadow-sm">
          {formData.fields.map((field, index) => (
            <FormFields
              key={index}
              labelName={field.labelName}
              type={field.type}
              placeholder={field.placeholder}
              options={
                field.optionsType === "countries" ? countries : field.options
              }
            />
          ))}

          {/* Checkboxes */}
          <div className="pt-4 space-y-2">
            {formData.checkboxes.map((label, i) => (
              <label key={i} className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-black" />
                {label}
              </label>
            ))}
          </div>

          {/* Submit button */}
          <button className="border border-gray-800 px-8 py-2 text-sm hover:bg-gray-900 hover:text-white rounded-md cursor-pointer transition">
            {formData.submitText}
          </button>
        </form>
      </div>
    </section>
  );
}
