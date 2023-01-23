import axios from "axios";
import { SAVE_USERNAME } from "../constants/constants";

export const api = axios.create({
  baseURL: " https://api-supermarke-list-production.up.railway.app",
  headers: {
    username: localStorage.getItem(SAVE_USERNAME) || "",
  },
});
//
