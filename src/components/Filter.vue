<template>
<div class="filter-content">
  <el-card  shadow="always">

  <el-collapse v-model="activeNames">

    <el-collapse-item name="1">
      <template #title>
       <h1>Arac Tipi</h1>
      </template>
     <div class="car-type">

       <div class="full-filter">
         <a style="text-decoration: none" v-bind:href="'/car/'" ><h4>Tumu</h4></a>
       </div>
       <div class="car-type-filter" >

         <div v-if="$route.name == 'CarList'">
           <div v-for='(item,index) in carscount' :key='index'>
             <a style="text-decoration: none" v-bind:href="'/car/'+ item.name" ><h4>{{item.name}} ({{item.count}})</h4></a>
           </div>

         </div>

         <div v-else-if="$route.name == 'CarType'">
           <div class="first-div">
             <a style="text-decoration: none" v-bind:href="typePath[0]" ><h4>{{$route.params.type}}</h4></a>
           </div>
           <div class="second-div" v-for='(item,index) in carscount' :key='index'>
             <a style="text-decoration: none" v-bind:href="typePath[0] + item.name" ><h4>{{item.name}} ({{item.count}})</h4></a>
           </div>

         </div>

         <div v-else-if="$route.name == 'CarBrand'">
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

         <div v-else-if="$route.name == 'CarModel'">
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
        <h1>Yil</h1>
      </template>

      <div class="filter-input">

        <div class="first-input">

        <el-input
            type="text"
            placeholder="Yil Girin (Min)"
            v-model="yearMin"
            maxlength="4"
        >
        </el-input>

        </div>

        <div class="second-input">

        <el-input
            type="text"
            placeholder="Yil Girin (Max)"
            v-model="yearMax"
            maxlength="4"
        >
        </el-input>

        </div>

      </div>

    </el-collapse-item>

    <el-collapse-item name="3">

      <template #title>
        <h1>Fiyat</h1>
      </template>

      <div class="filter-input">

        <div class="first-input">

          <el-input
              type="text"
              placeholder="Fiyat Girin (Min)"
              v-model="priceMin"
              maxlength="4"
          >
          </el-input>

        </div>

        <div class="second-input">

          <el-input
              type="text"
              placeholder="Fiyat Girin (Max)"
              v-model="priceMax"
              maxlength="4"
          >
          </el-input>

        </div>

      </div>

    </el-collapse-item>

    <el-collapse-item name="4">

      <template #title>
        <h1>Kilometre</h1>
      </template>

      <div class="filter-input">

        <div class="first-input">

          <el-input
              type="text"
              placeholder="Km Girin (Min)"
              v-model="kmMin"
              maxlength="4"
          >
          </el-input>

        </div>

        <div class="second-input">

          <el-input
              type="text"
              placeholder="Km Girin (Max)"
              v-model="kmMax"
              maxlength="4"
          >
          </el-input>

        </div>

      </div>

    </el-collapse-item>

    <el-collapse-item name="5">
      <template #title>
        <h1>Yakit Tipi</h1>
      </template>

      <div class="checkbox-input">

        <el-checkbox-group v-model="fuelcheckList">
          <el-row>
            <el-checkbox label="Benzin"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Dizel"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Elektrik"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Hibrit"></el-checkbox>
          </el-row>

        </el-checkbox-group>

      </div>

    </el-collapse-item>

    <el-collapse-item name="6">
      <template #title>
        <h1>Vites Tipi</h1>
      </template>

      <div class="checkbox-input">

        <el-checkbox-group v-model="gearcheckList">
          <el-row>
            <el-checkbox label="Manual"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Otomatik"></el-checkbox>
          </el-row>

        </el-checkbox-group>

      </div>

    </el-collapse-item>

    <el-collapse-item name="7">
    <template #title>
      <h1>Kasa Tipi</h1>
    </template>

      <div class="checkbox-input">

        <el-checkbox-group v-model="casecheckList">
          <el-row>
            <el-checkbox label="Cabrio"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Camlıvan"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Coupe"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Hatchback"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Kamyonet"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Kombi"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Minibüs"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="MPV"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Panelvan"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Pick-Up"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Roadster"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Sedan"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="Station Wagon"></el-checkbox>
          </el-row>
          <el-row>
            <el-checkbox label="SUV"></el-checkbox>
          </el-row>

        </el-checkbox-group>

      </div>

  </el-collapse-item>
  </el-collapse>

    <el-affix position="bottom" :offset="20">
      <button class="btn btn-primary btn-sm car-card-detail-btn ara-btn">Ara</button>
    </el-affix>

  </el-card>

</div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Filter",
  props: {
    carscount: Array,
  },
  data(){
    return{
      activeNames: ['1'],
      yearMin: ref(''),
      yearMax: ref(''),
      priceMin: ref(''),
      priceMax: ref(''),
      kmMin: ref(''),
      kmMax: ref(''),
      fuelcheckList: [],
      gearcheckList: [],
      casecheckList: [],
      typePath: ['/car/'+ this.$route.params.type +'/','/car/' + this.$route.params.type  +'/'+ this.$route.params.brand+'/'],
    }
  },
}
</script>

<style scoped>

.ara-btn{
  min-width: 100%;
  font-size: 19px;
  height: 60px;
}

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


.filter-content .filter-input .first-input{
  padding-top: 15px;
  padding-bottom: 15px;
}
.filter-content .filter-input .first-input input:focus{
  border-color: #fff;
}
.filter-content .filter-input .second-input{

}

.button{
  color: #bc3030;
}


</style>