import connectionAxios from "../service/ConnectionAxios.js";

export default {
  GetValueTest() {
    return connectionAxios.apiClient.get("/api/Main/GetValueTest");
  },
  CreatePdf() {
    return connectionAxios.apiClient.get("/api/Main/StartCreationPdf");
  },
  CreateImage(formData) {
    return connectionAxios.apiClient
      .post("/api/Main/StartCreationPicture", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        return response;
      });
  },
};
