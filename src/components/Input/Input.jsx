import "./Input.css";

const Input = ({ label, placeholder, onChange, value }) => {
  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
