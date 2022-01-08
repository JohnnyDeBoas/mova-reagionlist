<template>
  <v-container>
    <v-row>
      <v-col cols="10" class="pa-0">Nome:{{ Name }}</v-col>
      <v-col cols="10" class="pa-0">Capital:{{ Capital }}</v-col>
      <v-col cols="10" class="pa-0"
        ><a @click="redirection(Region)"> Região:{{ Region }}</a></v-col
      >
      <v-col cols="10" class="pa-0">Sub-Região:{{ SubRegion }}</v-col>
      <v-col cols="10" class="pa-0">População:{{ Population }}</v-col>
      <v-col cols="10" class="pa-0">Linguas: {{ Languages }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    Name: String,
    Capital: String,
    Region: String,
    SubRegion: String,
    Population: Number,
    Languages: Array(0),
  },
  methods: {
    redirection(region) {
      console.log(region);
      this.$router.push({
        name: "home",
        params: { region: region },
      });
    },
  },
};
</script>