import { useEffect, useState } from "react";
import { getList, updateItem } from "../../services/request";
import Button from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import { ListRender } from "../../components/ListRender/ListRender";
import { Modal } from "../../components/Modal/Modal";
import "./List.css";

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  const onShowModal = () => {
    setSelectedItem(null);
    setModalVisible(true);
  };
  const onCloseModal = () => {
    setModalVisible(false);
    loadListItems();
    setSelectedItem(null);
  };

  const onEditItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCheckItem = async (item) => {
    const result = await updateItem(item._id, {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked,
    });

    if (!result.error) {
      await loadListItems();
    }
  };

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-logo-container">
            <img className="logo-image" src="../../../../public/images/logo.png" alt="" />
            <h1 className="list-screen-header-title ">Lista Supermercado</h1>
          </div>
          <div className="list-screen-header-button">
            <Button
              onClick={onShowModal}
              text={`${window.innerWidth >= 420 ? "Adicionar" : "+"}`}
            ></Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? (
            <Loader />
          ) : (
            <ListRender onCheckItem={onCheckItem} onEdit={onEditItem} list={listData} />
          )}
        </div>
      </div>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </div>
  );
};

export default List;
