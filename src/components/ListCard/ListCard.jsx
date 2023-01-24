import { useState } from "react";
import checkedsvg from "../../../public/images/checked.svg";
import uncheckedsvg from "../../../public/images/unchecked.svg";

import "./ListCard.css";

export const ListCard = ({ item, onClick, onCheckItem }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="list-card-container">
      <img
        onClick={() => {
          setChecked(!checked);
          onCheckItem(item);
        }}
        className="checkbox"
        src={`${item.checked ? checkedsvg : uncheckedsvg}`}
        alt="Checked-item"
      />
      <div className="list-card-text-container" onClick={() => onClick(item)}>
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} unidades</span>
      </div>
      <img
        onClick={() => onClick(item)}
        src="/images/arrow.svg"
        alt="arrow-icon"
        className="arrow-icon"
      />
    </div>
  );
};
