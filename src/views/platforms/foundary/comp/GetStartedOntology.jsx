import formData from "@/lib/data/formData.json";
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
    <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 lg:py-24">
      {/* Grid transitions: 
          - 1 column on mobile/tablet (default)
          - 2 columns on large desktop (lg:) 
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* LEFT TITLE 
            Typography scales from 4xl (mobile) to 8xl (desktop) 
        */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-gray-900">
            {formData.title}
          </h1>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full flex justify-start lg:justify-end">
          <form className="space-y-6 w-full max-w-xl">
            <div className="grid grid-cols-1 gap-4">
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
            </div>

            {/* Checkboxes Wrapper */}
            <div className="pt-4 space-y-4">
              {formData.checkboxes.map((label, i) => (
                <label key={i} className="flex items-start gap-3 text-sm cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                  />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors leading-snug">
                    {label}
                  </span>
                </label>
              ))}
            </div>

            {/* Submit Button - Full width on small mobile, auto on desktop */}
            <div className="pt-2">
              <button className="w-full sm:w-auto border border-gray-900 px-10 py-3 text-sm font-medium transition-all hover:bg-gray-900 hover:text-white rounded-md cursor-pointer uppercase tracking-wider">
                {formData.submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}