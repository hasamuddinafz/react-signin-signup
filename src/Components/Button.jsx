import React from "react";

function Button({
  children,
  type = "submit",
  className = "",
  disabled = false,
}) {
  return (
    <div>
      <button
        type={type}
        disabled={disabled}
        className={`
        bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75
        disabled:opacity-50 disabled:cursor-not-allowed transition-colors
        ${className}
      `}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
