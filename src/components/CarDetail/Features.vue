<template>
  <section class="car">
  <div class="card car-card">
    <div class="card-body card-first">
      <h5 class="card-title">{{ features.brand }} {{ features.model }} {{ features.modelYear }}</h5>
      <h5 class="card-text">{{ features.caseType }} {{ features.motor }} {{ features.customName }} {{ features.hp }}HP</h5>
      <h5 class="card-text-1">Ilan No: {{features.id}}</h5>
    </div>
    <div class="card-body card-second">
      <div class="row">
        <div class="col">
          <img v-if="features.fuel === 'Benzin'" class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/fuel-type-icons/benzin.svg" alt="">
          <img v-else class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/fuel-type-icons/diesel.svg" alt="">
          <span class="car-card-text" >{{ features.fuel}}</span>
        </div>
        <div class="col">
          <img v-if="features.gear === 'Manuel'" class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/transmission-type-icons/manuel.svg" alt="">
          <img v-else class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/transmission-type-icons/automatic.svg" alt="">
          <span class="car-card-text" >{{ features.gear }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/calendar-icon.svg" alt="">
          <span class="car-card-text" >{{ features.modelYear }}</span>
        </div>
        <div class="col">
          <img class="car-card-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/kilometer-icon.svg" alt="">
          <span class="car-card-text" >{{ features.km }}</span>
        </div>
      </div>
    </div>
    <div class="card-body card-detail">
      <div class="row">
        <span class="car-card-price"> {{features.price }} TL </span>
      </div>
      <div class="row buttons">
        <div class="col">
          <button class="btn btn-primary btn-sm car-card-detail-btn">Hemen Al</button>
        </div>
        <div class="col">
          <button class="btn btn-primary btn-sm car-card-detail-btn">Araci Opsiyonla</button>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: "Features",
  props: ['features'],
}
</script>

<style scoped>


section.car .car-card{
  border-radius: 9px;
  border: solid 2px #ebebeb;
  background-color: #fff;
  min-width: 312px!important;
}
section.car .car-card .card-img-top{
}

section.car .car-card .card-first{
  text-align: left;
}

section.car .car-card .card-first .card-title{  /* Card baslik */
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
section.car .car-card .card-first{
  padding-top: 20px;
  padding-bottom: 0;
}
section.car .car-card .card-second{
  padding-top: 0px;
  padding-bottom: 0px;
}
section.car .car-card .card-detail{
  padding-top: 10px;
}

section.car .car-card .card-first .card-text{
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
  margin-bottom: 0px;
}
section.car .car-card .card-first .card-text-1{
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
section.car .car-card .card-second{
  text-align: left;
}
section.car .car-card .card-second .row{
  margin: 0px;
  margin-bottom: 10px;
}

section.car .car-card .card-second .col{
  min-width: 0px!important;
  margin-left: 0px!important;
  margin-right: 0px!important;
  padding-left: 0px;
}

section.car .car-card .card-second{
  align-items: center;
}
section.car .car-card .card-second .car-card-icon{
  width: 18px;
  max-height: 18px;
}
section.car .car-card .card-second .car-card-text{
  font-size: 16px!important;
  font-weight: 550!important;
  line-height: 1.06!important;
  letter-spacing: 0.16px!important;
  text-align: left;
  color: #333;
  padding-left: 10px;
}

section.car .car-card .card-detail .car-card-price{
  font-size: 20px;
  font-weight: bold;
  line-height: 0.75;
  letter-spacing: 0.2px;
  text-align: left;
  color: #333;
  display: flex;
}

section.car .car-card .card-detail .car-card-detail-btn{
  font-size: 14px;
}
section.car .car-card .card-detail .row{
  align-items: center;
  margin:0;
  margin-bottom: 10px;
}
section.car .car-card .card-detail .buttons{
  margin:0;
  margin-bottom: 10px;
  text-align: left;
  padding-top: 10px;
}
section.car .car-card .card-detail .col{
  min-width: 0px!important;
  margin-left: 0px!important;
  margin-right: 0px!important;
  padding-left: 0px;
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