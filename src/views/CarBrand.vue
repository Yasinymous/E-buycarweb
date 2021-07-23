<template>
  <section class="header">
    <h4>{{$route.query.b}}</h4>
    <searchbox :cars='allCars' />
  </section>
  <div class="path">

    <pathBar :path="carTypeCount" :path2='carBrandCount' :path3='[]' :carData="''"  />

  </div>

  <section class="body">


    <el-row :gutter="20">
      <el-col :span="4">

        <div class="filter">
          <Filter :carscount="carModelCount" :type="'brand'"  />
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
import {getAll, getCarsBrand, getCarsBrandModel, getCarsType} from "@/main/car.service";
import pathBar from "@/components/pathBar";


export default {
  name: "CarBrand",
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
      carModelCount: [],
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
        this.carBrandCount = getCarsBrand(this.cars)
        this.carTypeCount = getCarsType(this.cars)
        this.cars = this.cars.filter(car => car.brand.includes(this.$route.params.brand))
        this.carModelCount = getCarsBrandModel(this.cars)
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