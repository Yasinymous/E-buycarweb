<template>

<H4>{{$route.params.id}}</H4>
<H4>{{carDetail}}</H4>
  <div>
    <Image v-bind:images=carDetail.images />
 </div>

</template>

<script>
import Image from '@/components/CarDetail/Image';
import {getCarsDetailById} from "@/main/car.service";

export default {
  name: "CarDetail",
  components: {
    Image
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