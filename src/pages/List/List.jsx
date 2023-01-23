import { useEffect, useState } from "react";
import { getList } from "../../services/request";
import Button from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import { ListRender } from "../../components/ListRender/ListRender";
import "./List.css";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-logo-container">
            <img className="logo-image" src="../../../public/images/logo.png" alt="" />
            <h1 className="list-screen-header-title ">Lista Supermercado</h1>
          </div>
          <div className="list-screen-header-button">
            <Button text="Adcionar" />
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? <Loader /> : <ListRender list={listData} />}
        </div>
      </div>
    </div>
  );
};

export default List;
