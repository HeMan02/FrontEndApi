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
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-text-field
            label="Mail to send"
            prepend-icon="mdi-email-fast-outline"
          ></v-text-field
        ></v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-btn color="orange" text> Send </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import mainApi from "../service/MainApi.js";
export default {
  data: () => ({ inputText: "" }),

  methods: {
    GoToMainPage: function () {
      this.$router.push("/MainPage");
    },
    StartCreationImage: function () {
      this.imageAdd = false;
      console.log("Start Creation Image");
      console.log(" BBBB " + this.inputText);
      let formData = new FormData();
      formData.append("inputText", this.inputText);
      mainApi.CreateImage(formData).then((response) => {
        console.log("PATH :" + response.data);
        this.imageCreated = response.data;
        this.imageAdd = true;
      });
    },
  },
};
</script>
