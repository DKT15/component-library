import React from "react";
import classnames from "classnames";
import "./Card.css";

export default function CardIcon({ children, color, className, ...rest }) {
  let colorClass = color && `div-${color}`;
  let allClasses = classnames(className, colorClass);
  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}
