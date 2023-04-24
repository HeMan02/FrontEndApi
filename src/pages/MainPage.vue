<template>
  <div>
    <v-app>
      <v-parallax
        height="1000"
        src="https://cdn.wallpapersafari.com/78/71/BRL1nQ.jpg"
      >
        <div class="text-center">
          <h1 class="text-h4 font-weight-thin mb-4">BubbleShort</h1>
          <h2>This project use more functions</h2>
        </div>

        <v-row>
          <v-col>
            <MainCardNavigation
              title="PAINT"
              subtitle="Create your picture"
              icon="paint.png"
              colorCard="#FBE9E7"
              page="PicturePage"
            />
          </v-col>
          <v-col>
            <MainCardNavigation
              title="DATA"
              subtitle="See your data"
              icon="analysis.png"
              colorCard="#ECEFF1"
              page="DataPage"
          /></v-col>
          <v-col>
            <MainCardNavigation
              title="CHAT"
              subtitle="Write with all"
              icon="team-meeting.png"
              colorCard="#F9FBE7"
              page="ChatPage"
            />
          </v-col>
          <v-col>
            <MainCardNavigation
              title="PDF"
              subtitle="Print your Pdf"
              icon="file.png"
              colorCard="#E0F7FA"
              page="PdfPage"
            />
          </v-col>
        </v-row>
      </v-parallax>
    </v-app>
  </div>
</template>

<script>
import MainCardNavigation from "@/card/MainCardNavigation.vue";
export default {
  components: {
    MainCardNavigation,
  },

  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
};
</script>
