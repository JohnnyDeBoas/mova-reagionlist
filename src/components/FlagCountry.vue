<template>
  <v-card :elevation="12" class="ma-9" >
    <v-img
      :src="Flag"
      :cover="true"
      class="img-width"
      centered
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    Flag: String,
  },
};
</script>

<style lang="css">
.v-image__image {
  background-size: 100% 100%;
}
.img-width {
  width: 80vw;
}
</style>