<template>

<section class="header">
    <searchbox :cars='searchCars' />
</section>

  <div class="path">

    <pathBar :path="filterPath"  />

  </div>

 <section class="body">

   <el-row :gutter="20">
     <el-col :span="4">

       <div class="filter">
         <Filter :carscount="carFilterCount" />
       </div>

     </el-col>

     <el-col :span="20">

       <div class="car-list">


         <div class="top-filter-tag">


           <div class="first-div">
         <sortableBar :carsCount="carsCount"  />
           </div>

           <div v-if="tagControl()"  class="second-div">

             <div class="tag">
                <searchTag />
             </div>

           </div>

         </div>

         <CarList :cars='cars' />
       </div>

     </el-col>


   </el-row>


 </section>

</template>

<script>
import CarList from "@/components/CarList";
import searchbox from "@/components/searchbox";
import searchTag from "@/components/searchTag";
import Filter from "@/components/Filter";
import {getAll, getCarsBrand, getCarsBrandModel, getCarsType} from "@/main/car.service";
import pathBar from "@/components/pathBar";
import sortableBar from "@/components/sortableBar";

export default {
  name: "CarHome",
  components: {
    sortableBar,
    pathBar,
    Filter,
    searchbox,
    CarList,
    searchTag,
  },
  data() {
      return {
        allCars: [],
        searchCars: [],
        cars: [],

        carsCount: 0,

        filterPath: [],

        carFilterCount: [],

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
          this.allCars = response.data;
          this.searchCars = response.data;
          this.routeControl()
          this.pathBarControl()
        })
      },
      routeControl(){
        if (this.$route.name === 'CarList') {
          this.carFilterCount = getCarsType(this.cars)
        }
        else if (this.$route.name === 'CarType') {
          this.cars = this.cars.filter(car => car.type.includes(this.$route.params.type))
          this.carFilterCount = getCarsBrand(this.cars)
        }
        else if (this.$route.name === 'CarBrand') {
          this.cars = this.cars.filter(car => car.brand.includes(this.$route.params.brand))
          this.carFilterCount = getCarsBrandModel(this.cars)
        }
        else if (this.$route.name === 'CarModel') {
          this.cars = this.cars.filter(car => car.model.includes(this.$route.params.model))
          this.carFilterCount = getCarsBrandModel(this.cars)
        }
        this.carsCount = this.cars.length;
      },
      pathBarControl(){
        if (this.$route.name === 'CarType') {
          this.filterPath.push(getCarsType(this.allCars))
        }
        else if (this.$route.name === 'CarBrand'){
          this.filterPath.push(getCarsType(this.allCars))
          this.allCars = this.allCars.filter(car => car.type.includes(this.$route.params.type))
          this.filterPath.push(getCarsBrand(this.allCars))
        }
        else if (this.$route.name === 'CarModel'){
          this.filterPath.push(getCarsType(this.allCars))
          this.filterPath.push(getCarsBrand(this.allCars))
          this.allCars = this.allCars.filter(car => car.brand.includes(this.$route.params.brand))
          this.filterPath.push(getCarsBrandModel(this.allCars))
        }
      },
      tagControl(){
        return true
      }

  }
}
</script>

<style scoped>
.path{
  margin-bottom: 25px;
  margin-top: 15px;
}


.top-filter-tag{
  width: 90%;
  float: right;
  margin-right: 30px!important;
  background-color: #fafafa;
  border-radius: 5px;
  border: solid 1px #ebebeb;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.top-filter-tag .first-div{

  padding: 10px 20px 10px 20px;

}

.top-filter-tag .second-div{
  border-top: solid 1px #ebebeb;
}

.top-filter-tag .second-div .tag{
  float: left;
  padding: 20px 10px 20px 10px;
}





</style>