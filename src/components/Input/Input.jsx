import "./Input.css";

const Input = ({ label, placeholder, onChange, value, type }) => {
  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type || "text"}
      />
    </div>
  );
};

export default Input;
