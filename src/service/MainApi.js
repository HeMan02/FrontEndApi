import connectionAxios from "../service/ConnectionAxios.js";

export default {
  GetValueTest() {
    return connectionAxios.apiClient.get("/api/Main/GetValueTest");
  },
};
