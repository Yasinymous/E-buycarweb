<template>
  <div class="path">
    <div class="path-align">
    <el-breadcrumb class="path-text" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }" type="primary"><span>Anasayfa</span></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/car"><span>Arac Listesi</span></a></el-breadcrumb-item>

      <el-breadcrumb-item v-if="$route.name == 'CarType' || $route.name == 'CarBrand' || $route.name == 'CarModel'">
        <el-dropdown >
      <span class="el-dropdown-link">
        {{ $route.params.type }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
          <template #dropdown>
            <el-dropdown-menu>
              <div  v-for='(item,index) in path[0]' :key='index'>
              <a v-bind:href="'/car/' + item.name">
                <el-dropdown-item>{{ item.name }}</el-dropdown-item></a>
              </div>

            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-breadcrumb-item>

      <el-breadcrumb-item v-if="$route.name == 'CarBrand' || $route.name == 'CarModel'">
        <el-dropdown >
      <span class="el-dropdown-link">
        {{ $route.params.brand }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
          <template #dropdown>
            <el-dropdown-menu>
              <div  v-for='(item,index) in path[1]' :key='index'>
                <a v-bind:href="typePath[0]+ item.name">
                  <el-dropdown-item>{{ item.name }}</el-dropdown-item></a>
              </div>

            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-breadcrumb-item>

      <el-breadcrumb-item v-if="$route.name == 'CarModel'">
        <el-dropdown >
      <span class="el-dropdown-link">
        {{ $route.params.model }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
          <template #dropdown>
            <el-dropdown-menu>
              <div  v-for='(item,index) in path[2]' :key='index'>
                <a v-bind:href="typePath[1] + item.name">
                  <el-dropdown-item>{{ item.name }}</el-dropdown-item></a>
              </div>

            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-breadcrumb-item>


        <el-breadcrumb-item v-if="$route.name == 'CarDetail'" >
          <a v-bind:href="'/car/' + path.type"><span>{{ path.type }}</span></a>
        </el-breadcrumb-item>

        <el-breadcrumb-item v-if="$route.name == 'CarDetail'" >
          <a v-bind:href="'/car/' + path.type+ '/' + path.brand"><span>{{ path.brand}}</span></a>
        </el-breadcrumb-item>

        <el-breadcrumb-item v-if="$route.name == 'CarDetail'" >
          <a v-bind:href="'/car/' + path.type+ '/' + path.brand + '/'+ path.model" ><span>{{ path.model}}</span></a>
        </el-breadcrumb-item>


    </el-breadcrumb>
  </div>
  </div>
</template>

<script>
export default {
  name: "pathBar",
  props: {
    path: Array,
  },
  data(){
    return {
      typePath: ['/car/'+ this.$route.params.type +'/','/car/' + this.$route.params.type  +'/'+ this.$route.params.brand+'/'],
    }
  }
}
</script>

<style scoped>
.path{
  background-color: #bc3030;
  height: 40px;
  vertical-align: bottom;
  position: relative;;
}

.path .path-align{
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.path .path-align .path-text {
  padding-left: 65px;
}
.path .path-align .path-text span{
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  color: #fff;
}



</style>