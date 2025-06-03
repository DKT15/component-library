import React from "react";
import classnames from "classnames";
import "./Card.css";

// This colorClass will control the background of the icon. The user can change the color in App.jsx.
export default function CardIcon({ children, color, className, ...rest }) {
  let colorClass = color && `div-${color}`;
  let allClasses = classnames(className, colorClass);
  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}
