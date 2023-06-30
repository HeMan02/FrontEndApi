<template>
  <div id="app">
    <v-app id="inspire">
      <h1>Pdf</h1>
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
