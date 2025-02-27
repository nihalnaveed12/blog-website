import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-gray-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={` px-4 py-4 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


