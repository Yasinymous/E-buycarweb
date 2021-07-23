<template>
  <section class="header">
    <h4>{{$route.query.b}}</h4>
    <searchbox :cars='allCars' />
  </section>
  <div class="path">

    <pathBar :path="carTypeCount" :path2='[]' :path3='[]' :carData="''"  />

  </div>

  <section class="body">


    <el-row :gutter="20">
      <el-col :span="4">

        <div class="filter">
          <Filter :carscount="carBrandCount" :type="'type'" />
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
import {getAll, getCarsBrand, getCarsType} from "@/main/car.service";
import pathBar from "@/components/pathBar";


export default {
  name: "CarType",
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
      carBrandCount: [],
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
        this.cars = this.cars.filter(car => car.type.includes(this.$route.params.type))
        this.carBrandCount = getCarsBrand(this.cars)
        this.carTypeCount = getCarsType(this.cars)
      })
    },
  }
}
</script>

<style scoped>
.path{
  margin-bottom: 25px;
  margin-top: 15px;
}



</style>