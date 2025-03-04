import React from "react";

const Text = ({ children, variant = "p" }) => {
  const Tag = variant;
  return (
    <Tag className={`text-${variant} ${variant === "h1" ? " fs-1 fw-bolder" : "text-base"}`}>
      {children}
    </Tag>
  );
};

export default Text;