function FormFields({
  labelName,
  type = "text",
  placeholder = "",
  options = [],
}) {
  return (
    <div className="w-full flex flex-col gap-2 p-2">
      <label htmlFor={labelName} className="text-gray-500 text-sm">
        {labelName} <span className="text-red-400">*</span>
      </label>

      {type === "text" || type === "email" || type === "number" ? (
        <input
          type={type}
          id={labelName}
          className="border-b border-gray-300 outline-none focus:border-gray-500 p-1 text-sm"
        />
      ) : null}

      {type === "textarea" && (
        <textarea
          id={labelName}
          className="border-b border-gray-300 outline-none focus:border-gray-500 p-1 text-sm resize-none h-24"
        ></textarea>
      )}

      {type === "select" && (
        <select
          id={labelName}
          className="border-b border-gray-300 outline-none focus:border-gray-500 p-1 text-sm bg-white"
        >
          <option value="">Select {labelName}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default FormFields;
