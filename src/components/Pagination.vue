<template>
  <div class="text--primary">
    <div v-if="!list">Este pais não possui paises vizinhos</div>
    <v-container class="" v-else>
      <v-row>
        <v-col
          v-for="(n, index) in paginatedData"
          :key="index"
          class="d-flex child-flex"
          cols="12"
          lg="4"
          md="4"
          sm="12"
          xs="12"
        >
          <router-link
            :to="{
              name: 'Country',
              params: { country: n.alpha3Code || n.cca3 },
            }"
          >
            <div class="mx-5">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-img
                    :src="n.flags.svg"
                    class="grey lighten-1 img-width"
                    :cover="true"
                    :class="`elevation-${hover ? 24 : 6}`"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </template>
              </v-hover>
            </div>
          </router-link>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-pagination
            class="pagination mb-2"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            color="primary"
            :length="length ? pageCount : 5"
            v-model="pageNumber"
            @input="nextPage"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    length: Number,
  },
  data() {
    return {
      pageNumber: 1,
      size: 12,
    };
  },
  methods: {
    nextPage(page) {
      this.pageNumber = page;
    },
  },
  mounted() {
    console.log(this.list);
  },
  computed: {
    pageCount() {
      let l = this.list.length;
      let s = this.length ? this.length : this.size;
      let paginas = Math.ceil(l / s);
      console.log("pageCount= " + paginas + "\n");
      return paginas;
    },
    paginatedData() {
      const size = this.length ? this.length : this.size;
      const start = this.pageNumber * size - size;
      const end = start + size;

      return this.list.slice(start, end);
    },
  },
  watch: {
    paginatedData() {},
  },
};
</script>