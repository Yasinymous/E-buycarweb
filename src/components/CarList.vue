<template>
  <section id="car-list" class="car-list">
  <div class="container">

    <div class="filter-top">
      <div class="row justify-content-between">

        <div class="col col-md-auto">
          <div class="first">
          Bulunan Araç Fiyat ve Modelleri (
            <span class="first-2">{{ cars.length }}</span> Sonuç Bulundu.)
          </div>
        </div>

        <div class="col">
            <div class="second">
          <select v-model="selected">
            <option disabled value="">Gelişmiş Sıralama</option>
            <option>Fiyata göre (Önce en yüksek)</option>
            <option>Fiyata göre (Önce en düşük)</option>
            <option>Tarihe göre (Önce en yeni ilan)</option>
            <option>Tarihe göre (Önce en eski ilan)</option>
            <option>KM'ye göre (Önce en yüksek)</option>
            <option>KM'ye göre (Önce en düşük)</option>
            <option>Yıla göre (Önce en yeni)</option>
            <option>Yıla göre (Önce en eski)</option>
          </select>

        </div>
        </div>

      </div>
    </div>




    <div class="row ort">
<h4 v-if="cars.length == 0">Arac Bulunamadi</h4>


      <div class="col" v-for='(item,index) in cars' :key='index'>
        <a style="text-decoration: none" v-bind:href="'/ilan/' + item.id" >
        <div class="card car-card">
          <a class="car-favorite-button"><img class="favorite-button-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/not-favorite.svg#svgView(viewBox(1,10,75,50))" alt="Favori"></a>
          <img class="card-img-top" :src="getImageUrl(item.image)" alt="Car-Image">
          <div class="card-body card-first">
            <h5 class="card-title">{{ item.brand }} {{ item.model }} {{ item.modelYear }}</h5>
            <h5 class="card-text">{{ item.caseType }} {{ item.motor }} {{ item.customName }} {{ item.hp }}HP {{ item.code }}</h5>
          </div>
          <div class="card-body card-second">
            <div class="row">
              <div class="col">
                <img v-if="item.fuel === 'Benzin'" class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/fuel-type-icons/benzin.svg" alt="">
                <img v-else class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/fuel-type-icons/diesel.svg" alt="">
                <span class="car-card-text" >{{ item.fuel}}</span>
              </div>
              <div class="col">
                <img v-if="item.gear === 'Manuel'" class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/transmission-type-icons/manuel.svg" alt="">
                 <img v-else class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/transmission-type-icons/automatic.svg" alt="">
                <span class="car-card-text" >{{ item.gear }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <img class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/calendar-icon.svg" alt="">
                <span class="car-card-text" >{{ item.modelYear }}</span>
              </div>
              <div class="col">
                <img class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/kilometer-icon.svg" alt="">
                <span class="car-card-text" >{{ item.km }}</span>
              </div>
            </div>
          </div>
          <div class="card-body card-detail">
            <div class="row">
              <div class="col">
                <span class="car-card-price"> {{item.price }} TL </span>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-sm car-card-detail-btn">Detaylı İncele</button>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>




    </div>
  </div>
  </section>
</template>


<script>
import {BASE_URL} from "@/main/config";

export default {
  name: 'CarList',
  props: {
    searchQuery: String,
    cars: Object
  },
  methods: {
    getImageUrl(id) {
      return BASE_URL + 'filestore/'+ id;
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body, input, button {
  font: 14px "Roboto",sans-serif;
}
.filter-top{
  background-color: #fafafa;
  margin-left: 20px!important;
  border-radius: 5px;
  border: solid 1px #ebebeb;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.filter-top .first {
  font-size: 13px;
  text-align: left;
  color: #3c3c3c;
  align-self: center;
  align-items: center;
}


.filter-top .first-2 {
  color: #bc3030;
}

.filter-top .second {
  height: 35px;
  background-color: #fafafa;
  border-radius: 0px;
  border: none;
  width: 250px;
  font-weight: 500;
  float: right;
  margin-right: 15px;
}

#sidebar {
  width: 15%;
  padding: 15px;
  float: left
}

#car-list {
  width: 90%;
  float: right;
  margin: auto;
  position: relative;
}

section.car-list {
  padding: 0!important;
  margin: 0 auto!important;
  margin-right: 30px!important;
}

@media (min-width: 1200px){
  section.car-list .container {
    max-width: 1350px;
  }
}

@media (max-width: 700px){
  section.car-list .container {
    padding-left: 50px!important;
    padding-right: 50px!important;
  }
}



@media (min-width: 1300px){
  section.car-list .container .col {
    max-width: 400px!important;
  }

  section.car-list .car-card{
    max-width: 400px!important;
  }
}

.ort,.container{
  position: relative;
  margin: auto;
}
section.car-list .container {

}

section.car-list .container .col {
  min-width: 312px!important;
  margin-left: min(7.5px,100%);
  margin-right: min(7.5px,100%);
  padding: 0 0 0 7.5px;
  padding-top: 15px;
}

section.car-list .car-card .car-favorite-button{
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  background: inherit;
  background-color: transparent;
}

section.car-list .car-card .favorite-button-icon{
  width: 48px;
  height: auto;
  margin-top: 6px;
}
section.car-list .car-card{
  border-radius: 9px;
  border: solid 2px #ebebeb;
  background-color: #fff;
  min-width: 312px!important;
}
section.car-list .car-card .card-img-top{
}

section.car-list .car-card .card-first{
  text-align: left;
}

section.car-list .car-card .card-first .card-title{  /* Card baslik */
  margin-bottom: 0px!important;
  text-align: left;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.2px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
section.car-list .car-card .card-first{
  padding-top: 20px;
  padding-bottom: 0;
}
section.car-list .car-card .card-second{
  padding-top: 0px;
  padding-bottom: 0px;
}
section.car-list .car-card .card-detail{
  padding-top: 10px;
 }

section.car-list .car-card .card-first .card-text{
  font-size: 12px;
  line-height: 1.75!important;
  letter-spacing: 0.12px!important;
  text-align: left;
  color: #333!important;
  font-weight: 550!important;
  display: -webkit-box!important;
  -webkit-box-orient: vertical!important;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
section.car-list .car-card .card-second{
  text-align: left;
}
section.car-list .car-card .card-second .row{
  margin: 0px;
}

section.car-list .car-card .card-second .col{
  min-width: 0px!important;
  margin-left: 0px!important;
  margin-right: 0px!important;
}


section.car-list .car-card .card-second{
  align-items: center;
}
section.car-list .car-card .card-second .car-card-icon{
  width: 18px;
  max-height: 18px;
}
section.car-list .car-card .card-second .car-card-text{
  font-size: 16px!important;
  font-weight: 550!important;
  line-height: 1.06!important;
  letter-spacing: 0.16px!important;
  text-align: left;
  color: #333;
  padding-left: 10px;
}


section.car-list .car-card .card-detail .car-card-price{
  font-size: 20px;
  font-weight: bold;
  line-height: 0.75;
  letter-spacing: 0.2px;
  text-align: left;
  color: #333;
  display: flex;
}

section.car-list .car-card .card-detail .car-card-detail-btn{
  font-size: 14px;
}
section.car-list .car-card .card-detail .row{
  align-items: center;
  margin:0;
}
section.car-list .car-card .card-detail .col{
  min-width: 0px!important;
  margin-left: 0px!important;
  margin-right: 0px!important;
}
.btn-sm{
  width: 140px;
  height: 46px;
  font-size: 16px;
}

.btn-primary{
  background-color: #bc3030!important;
  color: #fff;
  border-color: #bc3030!important;
}
.btn-primary:hover{
  background-color: #bc3030!important;
  color: #fff;
  border-color: #bc3030!important;
}

.btn{
  border-radius: 4px!important;
  font-weight: bold!important;
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.16)!important;
  letter-spacing: 0.32px!important;
  user-select: none!important;
}

</style>
