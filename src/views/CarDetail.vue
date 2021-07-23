<template>

  <div>
    <searchbox  :cars='allCars' />
  </div>

  <div class="pathBar">
    <pathBar :path="[]" :path2='[]' :path3='[]' :carData="carDetail" />
  </div>


    <div class="row">
      <div class="col">
        <div>
          <Image v-bind:images=carDetail.images />
        </div>
      </div>
      <div class="col">
         <Features v-bind:features=carDetail />
      </div>
    </div>


</template>

<script>
import Image from '@/components/CarDetail/Image';
import Features from '@/components/CarDetail/Features';
import pathBar from "@/components/pathBar";
import searchbox from "@/components/searchbox";
import {getCarsDetailById} from "@/main/car.service";

export default {
  name: "CarDetail",
  components: {
    Image,
    Features,
    searchbox,
    pathBar,
  },
  data() {
    return {
      carDetail: {},
      allCars: [],
    }
  },
  mounted() {
    getCarsDetailById(this.$route.params.id).then(response => {
      this.carDetail = response.data;

    });
  }
}
</script>

<style scoped>
.pathBar{
  margin-bottom: 25px;
  margin-top: 15px;
}

</style>