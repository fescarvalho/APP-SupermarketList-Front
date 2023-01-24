import "./Modal.css";
import { useState } from "react";
import Input from "../Input/Input";
import Button from "../../components/Button/Button";

export const Modal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Adicionar novo item</h1>
          <button onClick={onClose} className="modal-close-button" />
        </div>
        <Input
          id="modal-input"
          label="Nome"
          placeholder="Ex: Arroz"
          value={name}
          onChange={(value) => setName(value)}
        />
        <Input
          id="modal-input"
          label="Quantidade"
          value={quantity}
          onChange={(value) => setQuantity(value)}
          type="number"
        />
        <div className="modal-spacer"></div>
        <Button text="Adicionar" />
      </div>
    </div>
  );
};
