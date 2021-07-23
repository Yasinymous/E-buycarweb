<template>
<section class="header">
    <searchbox :cars='allCars' />
</section>

  <div class="path">

    <pathBar :path='[]' :path2='[]' :path3='[]' :carData="''"  />

  </div>

 <section class="body">


   <el-row :gutter="20">
     <el-col :span="4">

       <div class="filter">
         <Filter :carscount="carTypeCount" :type="'main'" />
       </div>

     </el-col>

     <el-col :span="20">

       <div class="car-list">
         <CarList :cars='cars' />
       </div>

     </el-col>


   </el-row>


 </section>

</template>

<script>
import CarList from "@/components/CarList";
import Searchbox from "@/components/searchbox";
import Filter from "@/components/Filter";
import {getAll, getCarsType} from "@/main/car.service";
import pathBar from "@/components/pathBar";

export default {
  name: "CarHome",
  components: {
    pathBar,
    Filter,
    Searchbox,
    CarList
  },
  data() {
      return {
        allCars: [],
        cars: [],
        carTypeCount: [],
        filteredCars: [],
        inputVisible: false,
        inputValue: '',
      }
    },
    mounted() {
      this.getCars();
    },
    methods: {
      getCars() {
        getAll().then(response => {
          this.cars = response.data;
          this.carTypeCount = getCarsType(this.cars);
          if (this.$route.query.b.length > 0){
            this.cars = this.cars.filter(car => car.brand.includes(this.$route.query.b))
          }
        })
      }
  }
}
</script>

<style scoped>
.path{
  margin-bottom: 25px;
  margin-top: 15px;
}



</style>