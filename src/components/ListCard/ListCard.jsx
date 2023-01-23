import "./ListCard.css";

const ListCard = ({ item }) => {
  return (
    <div className="list-screen-container">
      <span>{item.name}</span>
    </div>
  );
};

export default ListCard;
