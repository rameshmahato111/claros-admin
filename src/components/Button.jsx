import React from "react";

const Button = ({ icon, children, className, ...props }) => {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg   p-2 ${className}`}
      {...props}
    >
      {icon} <span>{children}</span> {""}
    </button>
  );
};

export default Button;
