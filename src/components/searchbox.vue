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
         style="min-width:100%;"
     >
       <template #prefix>
         <i class="el-icon-search" @click="handleIconClick"></i>
       </template>
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

     </el-autocomplete>
     </div>
   </el-col>

   </el-row>

</template>

<script>
import {getAll} from "@/main/car.service";
import { ref } from 'vue'
import {BASE_URL} from "@/main/config";

export default  {
  name: "searchbox",
  data() {
    return {
      cars: [],
      state: ref(''),
    }
  },
  mounted() {
    this.getCars();
  },
  methods: {
    getCars() {
      getAll().then(response => {
        this.cars.value = response.data;
      })
    },
    getImageUrl(id) {
      return BASE_URL + 'filestore/'+ id;
    },
    querySearch(queryString, cb){
      var results = queryString
          ? this.cars.value.filter(this.createFilter(queryString))
          : this.cars.value;
      // call callback function to return suggestion objects
      cb(results);
    },
    createFilter(queryString){
      return (car) => {
        return (
            car.brand.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
        );
      };
    },
    loadAll() {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
      ];
    },
    handleSelect(item){
      console.log(item);
    },
    handleIconClick(ev){
      console.log(ev);
    },
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