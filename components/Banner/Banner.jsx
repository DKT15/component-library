import React from "react";
import classnames from "classnames";
import "./Banner.css";

export default function Banner({ children, color, className, ...rest }) {
  let colorClass = color && `button-${color}`;
  const allClasses = classnames(className, colorClass);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
