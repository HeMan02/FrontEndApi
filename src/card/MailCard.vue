<template>
  <!-- :color="currVal === value ? '#FFFFFF' : '#000000'"  #ECEFF1-->
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmS9xKxR-Tz1tzwy759eQmRB6AvwJHUAhWIQ&usqp=CAU"
    >
    </v-img>

    <v-card-subtitle class="pb-0"> Insert your text </v-card-subtitle>

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
      <v-row>
        <v-col
          ><v-text-field
            label="Mail to send"
            prepend-icon="mdi-email-fast-outline"
            v-model="inputMail"
          ></v-text-field
        ></v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-btn color="orange" text @click="StartSendMail()"> Send </v-btn>
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
    StartSendMail: function () {
      console.log(" BBBB " + this.inputText);
      let formData = new FormData();
      formData.append("inputText", this.inputText);
      formData.append("inputMail", this.inputMail);
      mainApi.SendMail(formData).then((response) => {
        console.log("PATH :" + response.data);
      });
    },
  },
};
</script>
