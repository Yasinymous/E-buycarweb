<template>
  <div v-if="dynamicTags.length > 0" class="search-tag">

    <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
      {{tag}}
    </el-tag>

  </div>
</template>

<script>
export default {
  name: "searchTag",
  data() {
    return {
      dynamicTags: [],
    }
  },
  methods: {
    tagFilter() {
      if (this.$route.query.b.length > 0) {
        this.dynamicTags.push(this.$route.query.b)
      }
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
  }
}
</script>

<style scoped>

</style>