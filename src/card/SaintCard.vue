<template>
  <v-row
    ><v-col>
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
          <v-btn color="orange" text @click="UploadSaintOnDb()">
            Upload saint
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn color="orange" text @click="StartGetSaintOfDay()">
            Get saint
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col>
      <template>
        <div>
          <v-data-table :headers="headers" :items="desserts"></v-data-table>
        </div> </template
    ></v-col>
    <v-col
      ><template>
        <div>
          <v-data-table
            :headers="headersSaintOfDay"
            :items="saintOfDayTable"
          ></v-data-table>
        </div>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import mainApi from "../service/MainApi.js";
export default {
  data: () => ({
    inputText: "",
    inputMail: "",
    saintOfDayTable: [],
    headersSaintOfDay: [
      { text: "Giorno", value: "giorno" },
      { text: "Mese", value: "mese" },
      { text: "Nome", value: "nome" },
    ],
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: 1,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: 1,
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: 7,
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: 8,
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: 16,
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: 0,
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: 2,
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: 45,
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: 22,
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: 6,
      },
    ],
  }),

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
        console.log("GET TABLE SAINT:" + response.data[0].nome);
        this.saintOfDayTable = response.data;
      });
    },

    UploadSaintOnDb: function () {
      console.log(" BBBB " + this.inputText);
      // let formData = new FormData();
      // formData.append("inputText", this.inputText);
      // formData.append("inputMail", this.inputMail);
      mainApi.StartGetSaintOfDay().then((response) => {
        console.log("PATH :" + response.data);
      });
    },
  },
};
</script>
