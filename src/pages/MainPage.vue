<template>
  <div>
    <v-app>
      <div class="text-center">
        <h1>BubbleShort</h1>
        <h2>This project use more funnctions</h2>
      </div>
      <v-row>
        <v-col>
          <MainCardNavigation
            title="PAINT"
            subtitle="Create your picture"
            icon="paint.png"
            colorCard="#FBE9E7"
          />
        </v-col>
        <v-col>
          <MainCardNavigation
            title="DATA"
            subtitle="See your data"
            icon="analysis.png"
            colorCard="#ECEFF1"
        /></v-col>
        <v-col>
          <MainCardNavigation
            title="CHAT"
            subtitle="Write with all"
            icon="team-meeting.png"
            colorCard="#F9FBE7"
          />
        </v-col>
        <v-col>
          <CardTest />
        </v-col>
      </v-row>
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
