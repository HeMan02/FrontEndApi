<template>
  <div id="app">
    <v-app id="inspire">
      <v-parallax
        height="1000"
        src="https://cdn.wallpapersafari.com/78/71/BRL1nQ.jpg"
      >
        <h1>Data</h1>
        <v-row>
          <v-col>
            <DataCreationCard
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
import DataCreationCard from "@/card/DataCreationCard.vue";
export default {
  components: {
    DataCreationCard,
  },

  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
};
</script>
