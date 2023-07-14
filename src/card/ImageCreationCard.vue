<template>
  <!-- :color="currVal === value ? '#FFFFFF' : '#000000'"  #ECEFF1-->
  <v-container>
    <v-row>
      <v-col>
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
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="12">
                  <v-textarea
                    solo
                    name="input-7-4"
                    label="Solo textarea"
                    v-model="inputText"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-btn
                  color="blue"
                  outlined
                  rounded
                  text
                  @click="StartCreationImage()"
                  >GO</v-btn
                ></v-row
              >
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344" outlined>
          <v-img
            v-if="imageAdd"
            v-bind:src="require('../assets/imageToAdd.png')"
            @error="pictureLoadingError"
             />
          </v-img>
 </v-card></v-col></v-row
  ></v-container>
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
    imageCreated: String,
    imageAdd: false,
  },

  data: () => ({ inputText: "",backupSrc: 'https://via.placeholder.com/300.png/09f/fff', }),

  methods: {
    GoToMainPage: function () {
      this.$router.push("/MainPage");
    },
    GoToLevel1: function () {
      console.log("AAAAA");
      this.$router.push("/PageLevel1");
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
     pictureLoadingError: function() {
      console.log("GGGGGGGGG");
      this.didLoad = false;
    },
  },
};
</script>
