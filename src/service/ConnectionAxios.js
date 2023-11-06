import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:7211",
  withCredential: false,
  headers: {},
});

const apiSatispay = axios.create({
  baseURL:
    "https://staging.authservices.satispay.com/wally-services/protocol/tests/signature",
  withCredential: false,
  headers: {},
});

export default {
  apiClient,
  apiSatispay,
};
