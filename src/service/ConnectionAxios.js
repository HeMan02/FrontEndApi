import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:7211",
  withCredential: false,
  headers: {},
});

export default {
  apiClient,
};
