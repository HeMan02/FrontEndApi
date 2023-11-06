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
  SendMail(formData) {
    return connectionAxios.apiClient
      .post("/api/Main/StartSendMail", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        return response;
      });
  },
  StartGetSaintOfDay() {
    return connectionAxios.apiClient.get("/api/Main/StartGetSaintOfDay");
  },

  TestSatispay(formData) {
    return connectionAxios.apiSatispay
      .post("/wally-services/protocol/tests/signature", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          host: "staging.authservices.satispay.com",
          date: "Mon, 18 Mar 2019 15:10:24 +0000",
        },
      })
      .then((response) => {
        return response;
      });
  },
};
