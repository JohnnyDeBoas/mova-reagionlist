<template>
  <div>
    <v-container class="">
      <v-row>
        <v-col>
          <Search @changeSelect="getData" />
        </v-col>

        <v-col>
          <List :list="list" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Search from "../components/SearchBotton.vue";
import List from "../components/Pagination.vue";
import axios from "axios";
export default {
  name: "ContryInfo",
  components: {
    Search,
    List,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    let region = this.$route.params.region;
    if (typeof region !== "undefined") {
      this.getRegion(region);
    } else {
      this.getData();
    }
  },
  methods: {
    getList() {
      console.log("entrou");
    },
    getData(value) {
      let query = value ? value : "v2/all";
      axios
        .get("https://restcountries.com/" + query)
        .then((res) => {
          this.list = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRegion(value) {
      axios
        .get("https://restcountries.com/v3.1/region/" + value)
        .then((res) => {
          this.list = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>