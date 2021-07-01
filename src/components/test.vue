<template>
  <section id="car-list" class="car-list">

    <div class="container">

      <div class="row ort">

        <!-- car item -->
        <h4 v-if="cars.length == 0">testdwqdwq</h4>


        <div class="col" v-for='(item,index) in cars' :key='index'>

          <div class="card car-card">
            <a href="" class="car-favorite-button"><img class="favorite-button-icon" src="https://garaj11.akamaized.net/garaj11prod/assets/images/not-favorite.svg#svgView(viewBox(1,10,75,50))" alt="Favori"></a>
            <img class="card-img-top" :src="item.image" alt="Car-Image">
            <div class="card-body card-first">
              <h5 class="card-title">{{ item.brand }} {{ item.model }} {{ item.modelYear }}</h5>
              <h5 class="card-text">{{ item.caseType }} {{ item.motor }} {{ item.customName }} {{ item.hp }}HP</h5>
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

        </div>
        <!-- car item -->



      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "test"
}
</script>

<style scoped>

</style>