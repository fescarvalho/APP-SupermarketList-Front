import "./ListCard.css";

export const ListCard = ({ item, onClick }) => {
  return (
    <div className="list-card-container" onClick={() => onClick(item)}>
      <img
        className="checkbox"
        src={`../../../public/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="Checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} unidades</span>
      </div>
      <img
        src="../../../public/images/arrow.svg"
        alt="arrow-icon"
        className="arrow-icon"
      />
    </div>
  );
};
