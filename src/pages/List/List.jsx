import { useEffect, useState } from "react";
import { getList } from "../../services/request";
import ListCard from "../../components/ListCard/ListCard";
import "./List.css";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    console.log(result);
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
          <img className="logo-image" src="../../../public/images/logo.png" alt="" />
          <h1>Lista Supermercado</h1>
        </div>
        <div className="list-screen-list-container">
          {loading && <h2>Carregando...</h2>}
          {!loading && listData?.length > 0 ? (
            listData.map((item) => <ListCard key={item._id} item={item} />)
          ) : (
            <h4>Lista Vazia! Adicone um novo item clicando no botão 'Adcionar'</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
