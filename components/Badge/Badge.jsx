import React from "react";
import classnames from "classnames";
import "./Badge.css";

export default function Badge({ children, className, color, ...rest }) {
  let colorClass = color && `button-${color}`;
  const allClasses = classnames(colorClass, className);
  console.log(allClasses);
  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
