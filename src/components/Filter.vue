<template>
<div class="filter-content">
  <el-card shadow="always">
  <el-collapse v-model="activeName">
    <el-collapse-item name="1">
      <template #title>
       <h1>Arac Tipi</h1>
      </template>
     <div class="car-type">

       <div class="full-filter">
         <a style="text-decoration: none" v-bind:href="'/car/'" ><h4>Tumu</h4></a>
       </div>
       <div class="car-type-filter" >

         <div v-if="type == 'main'">
           <div v-for='(item,index) in carscount' :key='index'>
             <a style="text-decoration: none" v-bind:href="'/car/'+ item.name" ><h4>{{item.name}} ({{item.count}})</h4></a>
           </div>

         </div>

         <div v-if="type == 'type'">
           <div class="first-div">
             <a style="text-decoration: none" v-bind:href="typePath[0]" ><h4>{{$route.params.type}}</h4></a>
           </div>
           <div class="second-div" v-for='(item,index) in carscount' :key='index'>
             <a style="text-decoration: none" v-bind:href="typePath[0] + item.name" ><h4>{{item.name}} ({{item.count}})</h4></a>
           </div>

         </div>

         <div v-else-if="type == 'brand'">
           <div class="first-div">
             <a style="text-decoration: none" v-bind:href="typePath[0]" ><h4>{{$route.params.type}}</h4></a>
           </div>
           <div class="second-div">
             <a style="text-decoration: none" v-bind:href="typePath[1]" ><h4>{{$route.params.brand}}</h4></a>
           </div>
           <div class="three-div" v-for='(item,index) in carscount' :key='index'>
             <a style="text-decoration: none" v-bind:href="typePath[1] + item.name" ><h4>{{item.name}} ({{item.count}})</h4></a>
           </div>

         </div>

         <div v-else-if="type == 'model'">
           <div class="first-div">
             <a style="text-decoration: none" v-bind:href="typePath[0]" ><h4>{{$route.params.type}}</h4></a>
           </div>
           <div class="second-div">
             <a style="text-decoration: none" v-bind:href="typePath[1]" ><h4>{{$route.params.brand}}</h4></a>
           </div>
           <div class="three-div" v-for='(item,index) in carscount' :key='index'>
             <a style="text-decoration: none" v-bind:href="typePath[1]+ item.name" ><h4>{{item.name}} ({{item.count}})</h4></a>
           </div>

         </div>

       </div>

     </div>


    </el-collapse-item>

    <el-collapse-item name="2">
      <template #title>
        Yil<i class="header-icon el-icon-info"></i>
      </template>
      <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
      <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
    </el-collapse-item>
    <el-collapse-item name="3">
      <template #title>
        Fiyat<i class="header-icon el-icon-info"></i>
      </template>
      <div>Simplify the process: keep operating process simple and intuitive;</div>
      <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
      <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
    </el-collapse-item>
    <el-collapse-item name="4">
      <template #title>
        Kilometre<i class="header-icon el-icon-info"></i>
      </template>
      <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
      <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
    </el-collapse-item>
    <el-collapse-item name="5">
      <template #title>
        Yakit Tipi<i class="header-icon el-icon-info"></i>
      </template>
      <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
      <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
    </el-collapse-item>
    <el-collapse-item name="6">
      <template #title>
        Vites Tipi<i class="header-icon el-icon-info"></i>
      </template>
      <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
      <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
    </el-collapse-item>
    <el-collapse-item name="7">
    <template #title>
      Kasa Tipi<i class="header-icon el-icon-info"></i>
    </template>
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
  </el-collapse>

  </el-card>
</div>
</template>

<script>
export default {
  name: "Filter",
  props: {
    carscount: Array,
    type: String,
  },
  data(){
    return{
      activeNames: ['1'],
      typePath: ['/car/'+ this.$route.params.type +'/','/car/' + this.$route.params.type  +'/'+ this.$route.params.brand+'/'],
    }
  },
}
</script>

<style scoped>

.filter-content{
  margin-left: 45px;
  min-width: 250px;
}

.filter-content .car-type{
  text-align: start;
  margin-left: 15px;
}
.filter-content .car-type .second-div{
  margin-left: 10px;
}
.filter-content .car-type .three-div{
  margin-left: 20px;
}

.filter-content .car-type h4{
  font-size: 16px;
  line-height: 1.14;
  text-align: left;
  color: #000;
  font-weight: 500;
  cursor: pointer;
}

.filter-content .car-type .car-type-filter{
  margin-left: 10px;
}

.filter-content h1{
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.22px;
  text-align: left;
  color: #000;
}

</style>