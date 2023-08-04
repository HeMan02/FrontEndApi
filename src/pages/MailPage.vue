<template>
  <div id="app">
    <v-app id="inspire">
      <v-parallax
        height="1000"
        src="https://cdn.wallpapersafari.com/78/71/BRL1nQ.jpg"
      >
        <div class="text-center">
          <h1>Send your mail</h1>
          <v-row>
            <v-col>
              <MailCard />
            </v-col>
          </v-row>
        </div>
      </v-parallax>
    </v-app>
  </div>
</template>

<script>
import MailCard from "@/card/MailCard.vue";
export default {
  components: {
    MailCard,
  },
};
</script>
