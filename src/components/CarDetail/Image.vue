<template>
  <div v-for="imageId of images" v-bind:key="imageId">
    <img className="d-block w-100" v-bind:src="getImageUrl(imageId)" alt="test">
  </div>
</template>

<script>
import {BASE_URL} from "@/main/config";

export default {
  name: "Image",
  props: ['images'],
  methods: {
    getImageUrl(id) {
      return BASE_URL + 'filestore/' + id;
    }
  }
}
</script>

<style scoped>
</style>