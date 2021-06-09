<template>
<H4>{{$route.params.id}}</H4>

  <div>

  <Image />

  <Features />


  </div>

</template>

<script>
import Features from "@/components/CarDetail/Features";


import Image from "@/components/CarDetail/Image";

export default {
  name: "CarDetail",
  components: {
    Features,
    Image
  }
}
</script>

<style scoped>

</style>