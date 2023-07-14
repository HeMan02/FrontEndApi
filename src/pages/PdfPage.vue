<template>
  <div id="app">
    <v-app id="inspire">
      <v-parallax
        height="1000"
        src="https://cdn.wallpapersafari.com/78/71/BRL1nQ.jpg"
      >
        <h1>Pdf</h1>
        <v-row>
          <v-col>
            <PdfCreationCard
              title="PDF"
              subtitle="Stat Creation"
              icon="file.png"
              colorCard="#FBE9E7"
            />
          </v-col>
        </v-row>
      </v-parallax>
    </v-app>
  </div>
</template>

<script>
import PdfCreationCard from "@/card/PdfCreationCard.vue";
export default {
  components: {
    PdfCreationCard,
  },

  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
};
</script>
