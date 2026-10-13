import axios from "axios";

const api = axios.create({
  baseURL: "https://tynybekfood.pythonanywhere.com/api/v1/",
  headers: { "Content-Type": "application/json" },
});

export default api;
