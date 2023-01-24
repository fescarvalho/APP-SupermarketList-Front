import "./Button.css";

const Button = ({ text, onClick, variant, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${variant === "outline" ? "outline" : "main"}`}
    >
      {icon && <img src={icon} className="button-icon" alt={`supermarket_${icon}`} />}
      {text}
    </button>
  );
};

export default Button;
