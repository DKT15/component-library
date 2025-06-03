import "./Card.css";

export default function CardText({ children, title }) {
  return (
    <>
      <h3 className="card-title">{title}</h3>
      <div className="card-text">{children}</div>
    </>
  );
}
