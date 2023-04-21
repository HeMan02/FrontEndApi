<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">{{ title }}</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ subtitle }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
        <v-img v-bind:src="require('../assets/' + icon)"> </v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn color="blue" outlined rounded text>GO</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
};
</script>
