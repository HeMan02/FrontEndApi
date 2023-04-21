<template>
  <div>
    <v-app>
      <h1>This is an about page</h1>
      <v-row>
        <v-col>
          <MainCardNavigation
            title="Level 1"
            subtitle="Sub Level 1"
            icon="test"
          />
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">OVERLINE</div>
                <v-list-item-title class="text-h5 mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle
                  >Greyhound divisely hello coldly
                  fonwderfully</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text> Button </v-btn>
            </v-card-actions>
          </v-card></v-col
        >
        <v-col> <CardTest /> </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import MainCardNavigation from "@/card/MainCardNavigation.vue";
import CardTest from "@/card/CardTest.vue";
export default {
  components: {
    MainCardNavigation,
    CardTest,
  },

  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
};
</script>
