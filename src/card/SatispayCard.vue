<template>
  <!-- :color="currVal === value ? '#FFFFFF' : '#000000'"  #ECEFF1-->
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmS9xKxR-Tz1tzwy759eQmRB6AvwJHUAhWIQ&usqp=CAU"
    >
    </v-img>

    <v-card-subtitle class="pb-0"> Title </v-card-subtitle>

    <v-container fluid>
      <v-row>
        <v-col>
          <v-textarea
            name="input-7-1"
            filled
            label=""
            auto-grow
            value=""
            v-model="inputText"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-btn color="orange" text @click="TestSatyspay()"> Update </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import mainApi from "../service/MainApi.js";
export default {
  data: () => ({ inputText: "", inputMail: "" }),

  methods: {
    GoToMainPage: function () {
      this.$router.push("/MainPage");
    },
    StartGetSaintOfDay: function () {
      console.log(" BBBB " + this.inputText);
      // let formData = new FormData();
      // formData.append("inputText", this.inputText);
      // formData.append("inputMail", this.inputMail);
      mainApi.StartGetSaintOfDay().then((response) => {
        console.log("PATH :" + response.data);
      });
    },

    TestSatyspay: function () {
      const crypto = require("crypto-js");

      const keyId = "Your Key ID";
      const privateKey = "Your RSA Private Key";

      const body = `{
  "flow": "MATCH_CODE",
  "amount_unit": 100,
  "currency": "EUR"
}`;

      const digest = `SHA-256=`.concat(crypto.SHA256(body));

      const string = `(request-target): post /wally-services/protocol/tests/signature
host: staging.authservices.satispay.com
date: Mon, 18 Mar 2019 15:10:24 +0000
digest: ${digest}`;

      // var sha256 = CryptoJS.algo.SHA256.create();
      // sha256.update(this.string);
      // sha256.update("Message Part 2");
      // sha256.update("Message Part 3");
      // ​
      // var hash = sha256.finalize();

      const signature = crypto.AES.encrypt(string, "secret key 123").toString();

      // const signature = crypto
      //   .createSign("RSA-SHA256")
      //   .update(string)
      //   .sign(privateKey, "base64");

      const authorizationHeader = `Signature keyId="${keyId}", algorithm="rsa-sha256", headers="(request-target) host date digest", signature="${signature}"`;

      let formData = new FormData();
      formData.append("digest", this.digest);
      formData.append("Authorization", this.authorizationHeader);
      mainApi.TestSatispay(formData).then((response) => {
        console.log("PATH :" + response.data);
      });
    },
  },
};
</script>
