<template>
  <v-container class="row">
    <v-row>
      <v-col cols="12" lg="4" md="6" sm="12">
        <FlagCountry :Flag="flag" />
      </v-col>
      <v-col cols="12" lg="8" md="6">
        <Info
          :Name="name"
          :Capital="capital"
          :Region="region"
          :SubRegion="subregion"
          :Population="population"
          :Languages="languages"
        />
      </v-col>
      <v-col cols="12" lg="12">
        <h2>Paises Vizinhos:</h2>
        <Pagination :list="borders" :length="3" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FlagCountry from "../components/FlagCountry.vue";
import Info from "../components/InfoCountry.vue";
import Pagination from "../components/Pagination.vue";
import axios from "axios";

export default {
  name: "ContryInfo",
  components: {
    FlagCountry,
    Info,
    Pagination,
  },

  data() {
    return {
      page: 1,
      flag: "",
      name: "",
      capital: "",
      region: "",
      subregion: "",
      population: 0,
      languages: "",
      borders: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let country = this.$route.params.country;
      console.log(country);
      axios
        .get("https://restcountries.com/v2/alpha/" + country)

        .then((res) => {
          console.log(res.data.flag);
          this.flag = res.data.flag;
          this.name = res.data.name;
          this.capital = res.data.capital;
          this.region = res.data.region;
          this.subregion = res.data.subregion;
          this.population = res.data.population;
          this.languages = res.data.languages[0].nativeName;
          this.borders = res.data.borders;
          this.getBorders();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBorders() {
      let query = "";
      for (let index = 0; index < this.borders.length; index++) {
        query += this.borders[index] + ",";
      }

      console.log(this.borders);
      axios
        .get("https://restcountries.com/v2/alpha?codes=" + query)
        .then((res) => {
          console.log(res.data);
          this.borders = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>