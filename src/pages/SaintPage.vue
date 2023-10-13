<template>
  <div id="app">
    <v-app id="inspire">
      <v-parallax
        height="1000"
        src="https://cdn.wallpapersafari.com/78/71/BRL1nQ.jpg"
      >
        <h1>Saint</h1>
        <v-row>
          <v-col>
            <SaintCard
              title="DATA FROM DB"
              subtitle="Get Data from DB"
              icon="analysis.png.png"
              colorCard="#E8EAF6"
            />
          </v-col>
        </v-row>
      </v-parallax>
    </v-app>
  </div>
</template>

<script>
import SaintCard from "@/card/SaintCard.vue";
export default {
  components: {
    SaintCard,
  },

  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
};
</script>
