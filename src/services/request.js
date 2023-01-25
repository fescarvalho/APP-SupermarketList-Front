import { api } from './api';

export const getList = async () => {
  try {
    const result = await api.get('/list-items');
    return result.data;
  } catch (e) {
    alert('Erro ao buscar dados da api.');
    return { e };
  }
};
export const createItem = async (item) => {
  try {
    const result = await api.post('/list-items', {
      ...item,
    });
    return result.data;
  } catch (e) {
    alert('Erro ao salvar dados da api.');
    return { e };
  }
};
export const updateItem = async (id, item) => {
  try {
    const result = await api.put(`/list-items/${id}`, {
      ...item,
    });
    return result.data;
  } catch (e) {
    alert('Erro ao atualizar dados da api.');
    return { e };
  }
};
export const deleteItem = async (id) => {
  try {
    const result = await api.delete(`/list-items/${id}`);
    return result.data;
  } catch (e) {
    alert('Erro ao deletar dados da api.');
    return { e };
  }
};
