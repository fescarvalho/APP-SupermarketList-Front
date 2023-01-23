import { ListCard } from "../ListCard/ListCard";

export const ListRender = ({ list }) => {
  if (list.length === 0) {
    return <h4>Lista Vazia! Adicone um novo item clicando no botão 'Adcionar'</h4>;
  }

  return (
    <>
      {list.map((item) => (
        <ListCard key={item?._id} item={item} />
      ))}
    </>
  );
};
