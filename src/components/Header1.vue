<template>
  <div>
    <v-container fluid>
      <v-app-bar
        app
        class="overflow-hidden"
        color="white"
        elevate-on-scroll
        fixed
      >
        <v-img
          src="../assets/img/logo_principal.png"
          max-height="55"
          max-width="55"
        >
        </v-img>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <BackBotton />
      </v-app-bar>
    </v-container>
  </div>
</template>

<script>
import BackBotton from "./BackBotton.vue";

export default {
  name: "Header1",
  components: {
    BackBotton,
  },
};
</script>