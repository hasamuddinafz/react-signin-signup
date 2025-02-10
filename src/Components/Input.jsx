import React from "react";

function Input({
  label,
  type = "text",
  name,
  placeholder = "Enter text...",
  value,
  onChange,
  className = "",
}) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <span className="text-red-500 mx-1">*</span>
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          block w-full px-4 py-2 border border-gray-300 rounded-md 
          shadow-sm focus:outline-none focus:ring-0 focus:gray-blue-500 
          focus:border-gray-500 transition-colors ${className}
        `}
      />
    </div>
  );
}

export default Input;
