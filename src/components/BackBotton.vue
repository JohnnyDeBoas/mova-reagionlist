<template>
  <div>
    <v-row align="center" justify="space-around">
      <v-btn depressed @click="goBack">
        <v-icon dark> mdi-arrow-left </v-icon>
        <div class="d-none d-md-block">Voltar</div>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BackBotton",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>