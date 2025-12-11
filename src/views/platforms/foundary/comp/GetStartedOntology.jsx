import formData from "./formData.json";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import FormFields from "@/components/FormFields";

export default function GetStartedOntology() {
  const countries = useMemo(
    () =>
      countryList()
        .getData()
        .map((c) => c.label),
    []
  );

  return (
    <section className="w-full px-6 lg:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT TITLE */}
        <h1 className="text-5xl md:text-8xl font-light leading-tight">
          {formData.title}
        </h1>

        {/* RIGHT FORM */}
        <form className="space-y-4 max-w-xl">
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
          <div className="pt-4">
            {formData.checkboxes.map((label, i) => (
              <label key={i} className="flex items-center gap-2 text-sm mb-2">
                <input type="checkbox" />
                {label}
              </label>
            ))}
          </div>

          <button className="border border-gray-600 px-8 py-2 text-sm hover:bg-gray-800 hover:text-white rounded-md cursor-pointer">
            {formData.submitText}
          </button>
        </form>
      </div>
    </section>
  );
}
