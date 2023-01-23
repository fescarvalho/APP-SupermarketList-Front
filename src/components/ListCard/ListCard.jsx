import "./ListCard.css";

export const ListCard = ({ item }) => {
  return (
    <div className="list-card-container">
      <img
        className="checkbox"
        src={`../../../public/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="Checked-item"
      />
      <span>{item.name}</span>
    </div>
  );
};
