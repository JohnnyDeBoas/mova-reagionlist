<template>
  <v-container>
    <v-row class="pl-5" align="center">
      <!--primeiro filtro -->
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          class="pl-5"
          :items="items"
          label="Filtrar por:"
          v-model="select"
        ></v-select>
      </v-col>
      <!--segundo filtro -->
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          class="pl-5"
          :items="secondData"
          label="Regiões:"
          v-if="secondData.length"
          v-model="trueName"
        ></v-select>
      </v-col>
      <!--botão de pesquisar -->
      <v-col>
        <v-btn color="primary" @click="trueLink"> Pesquisar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    items: [
      "Todos",
      "Região",
      "Capital",
      "Lingua",
      "Pais",
      "Codigo de ligação",
    ],
    region: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    lingua: ["Inglês", "Espanhol", "Português", "Françes"],
    pais: ["Alfabetica"],
    codigoDeLigação: ["Crescente", "Decrescente"],
    secondData: "",
    select: "Todos",
    trueName: "",
  }),
  computed: {
    secondFilter() {
      if (this.select == "Região") {
        this.changeFilter(this.region);
      }
      if (this.select == "Capital") {
        this.findFilter();
      }
      if (this.select == "Lingua") {
        this.changeFilter(this.lingua);
      }
      if (this.select == "Pais") {
        this.changeFilter(this.pais);
      }
      if (this.select == "Codigo de ligação") {
        this.changeFilter(this.codigoDeLigação);
      }
      if (this.select == "Todos") {
        this.changeFilter([]);
      }
      return [];
    },
  },

  methods: {
    trueLink() {
      let link = "v2/all";
      if (this.trueName == "Africa") {
        link = "v3.1/region/africa";
      } else if (this.trueName == "Americas") {
        link = "v3.1/region/america";
      } else if (this.trueName == "Asia") {
        link = "v3.1/region/asia";
      } else if (this.trueName == "Europe") {
        link = "v3.1/region/europe";
      } else if (this.trueName == "Oceania") {
        link = "v3.1/region/oceania";
      } else if (this.trueName == "Inglês") {
        link = "v2/lang/en";
      } else if (this.trueName == "Espanhol") {
        link = "v2/lang/es";
      } else if (this.trueName == "Português") {
        link = "v2/lang/pt";
      } else if (this.trueName == "Françes") {
        link = "v2/lang/fr";
      } else {
        link = "v2/all";
      }

      this.$emit("changeSelect", link);
      return [];
    },
    findFilter() {
      axios
        .get("https://restcountries.com/v2/all")
        .then((res) => {
          let capitals = [];
          res.data.map((item) => {
            if (item.capital) {
              capitals.push(item.capital);
            }
          });
          this.changeFilter(capitals);

          console.log();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeFilter(newData) {
      this.secondData = newData;
      return this.secondData;
    },
  },
  watch: {
    secondFilter() {},
    trueLink() {},
  },
};
</script>