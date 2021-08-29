<template>
   <el-row class="row-bg" :gutter="20">
    <el-col :span="4">
      <el-image
          style="height: 41px;"
          src="https://garaj11.akamaized.net/garaj11prod/assets/logo.svg"
          :fit="fit">
      </el-image>
    </el-col>
   <el-col :span="20">
     <div class="search-box">
     <el-autocomplete
         popper-class="my-autocomplete"
         v-model="state"
         :fetch-suggestions="querySearch"
         placeholder="Ara"
         @select="handleSelect"
         maxlength="30"
         style="min-width:100%;">
       <template #default="{ item }">

         <a v-bind:href="'/detail/' + item.id">
         <el-row style="margin-top:10px;" class="row-bg search-box-content">
           <el-col :span="2">
             <div class="grid-content search-box-image">
               <el-image
                   style="width: 58px; height: 33px"
                   :src="getImageUrl(item.image)"
                   :fit="fit">
               </el-image>
             </div>
           </el-col>
           <el-col class="second-col" :span="2">
             <div class="grid-content bg-purple">
               {{item.brand}} {{ item.model}} {{ item.year}}
               {{ item.modelYear }} {{ item.motor }} {{ item.customName }}
               {{ item.hp }} {{ item.code }}
             </div>
           </el-col>
         </el-row>
         </a>

       </template>
       <template #append>
         <el-button v-on:click="searchBoxRouter" style="text-decoration: none"  icon="el-icon-search"></el-button>
       </template>
     </el-autocomplete>
     </div>
   </el-col>

   </el-row>
</template>

<script>
import { ref } from 'vue'
import {BASE_URL} from "@/main/config";

export default  {
  name: "searchbox",
  props: {
    cars: Object
  },
  data() {
    return {
      searchcars: this.cars,
      state: ref(''),
    }
  },
  watch: {

  },
  created() {
    this.getCars();
  },
  methods: {
    getCars() {
      this.searchcars.value = this.cars;
    },
    getImageUrl(id) {
      return BASE_URL + 'filestore/'+ id;
    },
    querySearch(queryString, cb){
      var results = queryString
          ? this.searchcars.value.filter(this.createFilter(queryString))
          : this.searchcars.value;
      // call callback function to return suggestion objects
      cb(results);
    },
    createFilter(queryString){
      return (car) => {
        return (
            car.brand.toLowerCase().indexOf(queryString.toLowerCase()) != -1
        );
      };
    },
    handleSelect(item){
      console.log(item);
    },
    searchBoxRouter(){
      if (this.state.length > 0){
        this.$router.push({ name: 'CarList', query: { text: this.state } })
      }
    }
  },
}
</script>

<style scoped>
@import url(https://cdn.syncfusion.com/ej2/material.css);

.search-box{
  margin-right: 45%;
}

.second-col{
  margin-left: 15px;
}
.search-box-content{
  color: black;
}


</style>