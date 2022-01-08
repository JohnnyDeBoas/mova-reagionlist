<template>
  <v-app>
    <Header1 />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header1 from "../components/Header1.vue";

export default {
  components: {
    Header1,
  },
};
</script>