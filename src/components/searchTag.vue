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
  mounted() {
    this.tagFilter();
  },
  methods: {
    tagFilter() {

    //if (this.$route.query.text.length > 0) {
      //  this.dynamicTags.push(this.$route.query.text)
      //}

    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
  }
}
</script>

<style scoped>
.el-tag {
  margin-left: 10px;
  height: 27px;
  float: left;
  font-size: 12px;
  line-height: 1.33;
  text-align: left;
  color: #3c3c3c;
  padding: 5px 10.3px 6.2px 10px;
  opacity: 0.7;
  border-radius: 5px;
  border: solid 1px #cacaca;
  background-color: #fff;
  cursor: pointer;
}


</style>