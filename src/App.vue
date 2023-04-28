<template>
  <div>
    <v-app>
      <div>
        <v-app-bar color="deep-orange" dense elevation="4" class="white--text">
          <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

          <v-toolbar-title color="white">Page title</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="GoToMainPage">
            <v-icon color="white">mdi-home</v-icon>
          </v-btn>
          <v-btn icon @click="TestApi">
            <v-icon color="white">mdi-magnify</v-icon>
          </v-btn>

          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="white">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
        <v-main>
          <router-view />
        </v-main>
      </div>
    </v-app>
  </div>
</template>

<script>
import mainApi from "./service/MainApi.js";
export default {
  name: "App",

  data: () => ({
    //
  }),

  methods: {
    GoToMainPage: function () {
      this.$router.push("/MainPage");
    },
    GoToLevel1: function () {
      this.$router.push("/PageLevel1");
    },
    TestApi: function () {
      console.log("API");
      mainApi.GetValueTest().then((response) => {
        response.data;
      });
    },
  },
};
</script>
