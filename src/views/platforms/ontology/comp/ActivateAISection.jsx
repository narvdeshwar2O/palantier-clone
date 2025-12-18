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
    <section className="w-full px-4 sm:px-6 lg:px-20 py-10 md:py-20 bg-[#f7f7f9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 items-start">
        <div className="lg:sticky lg:top-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1] tracking-tight text-gray-900">
            Activate AI {" "}
            <br className="hidden md:block" />
            Across the Enterprise
          </h1>
        </div>

        <form className="space-y-4 bg-white p-6 md:p-10 border border-gray-200 rounded-xl md:rounded-2xl shadow-sm w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {formData.fields.map((field, index) => (
              <div key={index} className={field.type === "textarea" ? "md:col-span-2 lg:col-span-1" : ""}>
                <FormFields
                  labelName={field.labelName}
                  type={field.type}
                  placeholder={field.placeholder}
                  options={
                    field.optionsType === "countries" ? countries : field.options
                  }
                />
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            {formData.checkboxes.map((label, i) => (
              <label key={i} className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-black h-4 w-4 shrink-0" />
                <span className="leading-snug">{label}</span>
              </label>
            ))}
          </div>

          <div className="pt-4">
            <button className="w-full md:w-auto border border-gray-800 px-10 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white rounded-md transition-all duration-200">
              {formData.submitText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}