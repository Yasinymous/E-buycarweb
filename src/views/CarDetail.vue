<template>

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
import {getCarsDetailById} from "@/main/car.service";

export default {
  name: "CarDetail",
  components: {
    Image,
    Features
  },
  data() {
    return {carDetail: {}}
  },
  mounted() {
    getCarsDetailById(this.$route.params.id).then(response => {
      this.carDetail = response.data;
    });
  }
}
</script>

<style scoped>

</style>