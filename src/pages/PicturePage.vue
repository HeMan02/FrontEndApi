<template>
  <div id="app">
    <v-app id="inspire">
      <v-parallax
        height="1000"
        src="https://cdn.wallpapersafari.com/78/71/BRL1nQ.jpg"
      >
        <h1>Paint</h1>
        <v-row>
          <v-col>
            <ImageCreationCard
              title="IMAGE"
              subtitle="Stat Creation Image"
              icon="image-files.png"
              colorCard="#E8EAF6"
            />
          </v-col>
        </v-row>
      </v-parallax>
    </v-app>
  </div>
</template>

<script>
import ImageCreationCard from "@/card/ImageCreationCard.vue";
export default {
  components: {
    ImageCreationCard,
  },

  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
};
</script>
