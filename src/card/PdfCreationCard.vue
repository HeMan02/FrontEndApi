<template>
  <!-- :color="currVal === value ? '#FFFFFF' : '#000000'"  #ECEFF1-->
  <v-card class="mx-auto" max-width="344" outlined :color="colorCard">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">{{ title }}</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ subtitle }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
        <v-img v-bind:src="require('../assets/' + icon)"> </v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn color="blue" outlined rounded text @click="StartCreationPdf()"
        >GO</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import mainApi from "../service/MainApi.js";
export default {
  props: {
    title: String,
    subtitle: String,
    icon: String,
    page: String,
    colorCard: String,
  },

  methods: {
    GoToMainPage: function () {
      this.$router.push("/MainPage");
    },
    GoToLevel1: function () {
      console.log("AAAAA");
      this.$router.push("/PageLevel1");
    },
    StartCreationPdf: function () {
      console.log("Start Creation PDF");
      mainApi.CreatePdf().then((response) => {
        response.data;
      });
    },
  },
};
</script>
