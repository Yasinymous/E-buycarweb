<template>
  <div class="filter-top">
    <div class="row justify-content-between first-div">

      <div class="col col-md-auto">
        <div class="first">
          Bulunan Araç Fiyat ve Modelleri (
          <span class="first-2">{{ carsCount }}</span> <span class="first-3">Sonuç Bulundu.)</span>
        </div>
      </div>

      <div class="col">

        <div class="second">

          <el-select size="small" v-model="value" placeholder="Gelişmiş Sıralama">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "sortableBar",
  props:{
    carsCount: Number,
  },
  data() {
    return{
      value: "",
      options: [
        {value: '1', label: 'Fiyata göre (Önce en yüksek)'},
        {value: '2', label: 'Fiyata göre (Önce en düşük)'},
        {value: '3', label: 'Tarihe göre (Önce en yeni ilan)'},
        {value: '4', label: 'Tarihe göre (Önce en eski ilan)'},
        {value: '5', label: "KM'ye göre (Önce en yüksek)"},
        {value: '6', label: "KM'ye göre (Önce en düşük)"},
        {value: '7', label: 'Yıla göre (Önce en yeni)'},
        {value: '8', label: 'Yıla göre (Önce en eski)'}
      ],
    }
  }
}
</script>

<style scoped>


.filter-top .first {
  padding-top: 10px;
  font-size: 13px;
  text-align: left;
  color: #3c3c3c;
  align-self: center;
  align-items: center;
}


.filter-top .first-2 {
  color: #bc3030;
}
.filter-top span {
  font-weight: bold;
}

.filter-top .second {
  float: right;
}
.el-select {
  background-color: #fafafa;
  border-radius: 0px;
  border: none;
  width: 250px;

  font-weight: 500;
}



.el-option{
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.15px;
  text-align: left;
  color: #747474;
}


</style>