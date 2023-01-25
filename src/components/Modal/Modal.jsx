import './Modal.css';
import { useState, useEffect } from 'react';
import trash from '../../../public/images/trash.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { createItem, updateItem, deleteItem } from '../../services/request';

export function Modal({ onClose, item }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome tem que ter mais de 3 caracteres.');
      return false;
    }
    if (quantity.length < 1) {
      alert('Quantidade não pode ser menor que 1.');
      return false;
    }
    return true;
  };

  const callAddItem = async () => {
    const validate = validateBeforeSave();
    if (validate) {
      const result = await createItem({ name, quantity });
      if (!result.error) {
        alert('Item Salvo com sucesso.!');
        onClose();
      }
    }
  };

  const callUpdateItem = async () => {
    const validate = validateBeforeSave();
    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item.checked,
      });
      if (!result.error) {
        alert('Item atualizado com sucesso.!');
        onClose();
      }
    }
  };
  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id);
    if (!result.error) {
      alert('Item deletado com sucesso.!');
      onClose();
    }
  };

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item.name);
      setQuantity(item.quantity);
    }
  }, [item]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{item ? 'Editar Item' : 'Adicionar item'}</h1>
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
          onChange={(value) => setQuantity(Number(value))}
          type="number"
        />
        <div className="buttons-container">
          {item && (
            <Button
              icon={trash}
              variant="outline"
              text="Deletar"
              onClick={callDeleteItem}
            />
          )}

          <Button
            onClick={item ? callUpdateItem : callAddItem}
            text={item ? 'Atualizar' : 'Adcicionar'}
          />
        </div>
      </div>
    </div>
  );
}
