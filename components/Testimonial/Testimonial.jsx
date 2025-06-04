import "./Testimonial.css";
import classnames from "classnames";

export default function Testimonial({ children, className, color, image, ...rest }) {
  let imageClass = image ? `src-${image}` : null;
  let colorClass = color && `div-${color}`
  const allClasses = classnames(className, colorClass, imageClass);

  return (
    <>
      <div className={allClasses}>{children}</div>
    </>
  );
}
