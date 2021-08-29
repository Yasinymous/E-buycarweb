<template>
<div class="div-boyut">

  <el-row class="satir-boyut">

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Marka</h4>
      </div>
      <el-input placeholder="Marka" v-model="brand"></el-input>
    </el-col>

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Model</h4>
      </div>
      <el-input placeholder="Model" v-model="model"></el-input>
    </el-col>


  </el-row>

  <el-row class="satir-boyut">

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Model Yili</h4>
      </div>
      <el-input v-on:keypress="NumbersOnly" placeholder="Model Yili" v-model="modelYear"></el-input>
    </el-col>

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Ozel Ad</h4>
      </div>
      <el-input placeholder="Ozel Ad" v-model="customName"></el-input>
    </el-col>


  </el-row>

  <el-row class="satir-boyut">

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Arac Tipi</h4>
      </div>
      <el-select v-model="type" placeholder="Arac Tipi">
        <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-col>

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Kasa Tipi</h4>
      </div>
      <el-select v-model="caseType" placeholder="Kasa Tipi">
        <el-option
            v-for="item in caseTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-col>

  </el-row>

  <el-row class="satir-boyut">

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Vites Tipi</h4>
      </div>

      <el-radio-group v-model="gear" class="satis-durum">
        <el-radio :label="'Manuel'">Manuel</el-radio>
        <el-radio :label="'Otomatik'">Otomatik</el-radio>
      </el-radio-group>

    </el-col >


    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Yakit Tipi</h4>
      </div>
      <el-radio-group v-model="fuel">
        <el-radio :label="'Benzin'">Benzin</el-radio>
        <el-radio :label="'Dizel'">Dizel</el-radio>
        <el-radio :label="'Elektrik'">Elektrik</el-radio>
        <el-radio :label="'Hibrit'">Hibrit</el-radio>
      </el-radio-group>

    </el-col>

  </el-row>

  <el-row class="satir-boyut">

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Code</h4>
      </div>
      <el-input placeholder="Code" v-model="code"></el-input>
    </el-col>

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Kilometre</h4>
      </div>
      <el-input v-on:keypress="NumbersOnly" placeholder="Kilometre" v-model="km"></el-input>
    </el-col>



  </el-row>

  <el-row class="satir-boyut">

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Motor Hacim</h4>
      </div>
      <el-input v-on:keypress="NumbersOnly" placeholder="Motor Hacim" v-model="motor"></el-input>
    </el-col>


    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Motor Beygir(HP)</h4>
      </div>
      <el-input v-on:keypress="NumbersOnly" placeholder="Motor HP" v-model="hp"></el-input>
    </el-col>


  </el-row>

  <el-row class="satir-boyut">

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Fiyat</h4>
      </div>
      <el-input v-on:keypress="NumbersOnly" placeholder="Fiyat" v-model="price"></el-input>
    </el-col>

    <el-col :span="6" class="sutun-boyut">
      <div class="baslik">
        <h4>Satis Durumu</h4>
      </div>
      <el-switch
          class="satis-durum"
          v-model="status"
          active-text="Arac Aktif"
          inactive-text="Arac Kapali"
      >
      </el-switch>
    </el-col>

  </el-row>

  <el-button v-on:click="createCar" >Gonder</el-button>

</div>
</template>

<script>
import { postCars} from "@/main/car.service";
import { ref } from 'vue';


export default {
  name: "PostCar",
  data() {
    return{
      types: [{
        value: 'Otomobil',
        label: 'Otomobil'
      }, {
        value: 'SUV',
        label: 'SUV'
      }, {
        value: 'Hafif Ticari',
        label: 'Hafif Ticari'
      }
      ],
      caseTypes: [{
        value: 'Otomobil',
        label: 'Otomobil'
      }, {
        value: 'SUV',
        label: 'SUV'
      }, {
        value: 'Hafif Ticari',
        label: 'Hafif Ticari'
      }
      ],
      type: '',
      caseType: '',
      brand: ref(''),
      model: ref(''),
      customName: ref(''),
      code: ref(''),
      modelYear: ref(''),
      gear: ref(''),
      hp: ref(''),
      km: ref(''),
      fuel: ref(''),
      image: ref(''),
      price: ref(''),
      status: true,
      motor: ref(''),
    }
  },
  methods: {
    createCar() {
        const cardata = JSON.stringify({
          id: '', brand: this.brand, caseType: this.caseType,
          code: this.code,  customName: this.customName, fuel: this.fuel, gear: this.gear,
          hp: this.hp, km: this.km, model: this.model, modelYear: this.modelYear,
          motor: this.motor, price: this.price, status: this.status, type: this.type,
          image: []
        });
        alert(cardata);
        postCars(cardata);
    },
    NumbersOnly(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>

<style scoped>
.div-boyut{
  padding-left: 25%;
  width: 100%;
}
.satir-boyut{
  padding-top: 20px;
}
.sutun-boyut{
  padding-right: 20px;
  text-align: left;
}
.baslik h4{
  font-size: 16px;
  text-align: left;
}
.satis-durum{
  padding-top: 15px;
}

</style>