import { api } from "./api";

export const getList = async () => {
  try {
    const result = await api.get("/list-items");
    return result.data;
  } catch (e) {
    alert("Erro ao buscar dados da api.");
    return { error };
  }
};
