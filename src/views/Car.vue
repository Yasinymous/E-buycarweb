<template>

<section class="header">

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">


    <searchbox />


  </el-menu>
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