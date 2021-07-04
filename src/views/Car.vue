<template>

<section class="header">
  <searchbox />
</section>

 <section class="body">
   <div>

    <Filter />

   </div>

   <div>

     <CarList />

   </div>

 </section>

</template>

<script>
import CarList from "@/components/CarList";
import Searchbox from "@/components/searchbox";
import Filter from "@/components/Filter";

export default {
  name: "Car",
  components: {
    Filter,
    Searchbox,
    CarList
  }
}
</script>

<style scoped>

</style>