import React from "react";
import classnames from "classnames";
import "./Badge.css";

export default function Badge({ children, className, color, ...rest }) {
  // The code checks to see if there is a color coming in.
  // If there is then the button's color is set to much the exact color.
  // AllClasses combines the colourClass and the className and I am using the classnames package to do this.
  // Doing this prevents bugs with the className.
  let colorClass = color && `button-${color}`;
  const allClasses = classnames(colorClass, className);
  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
