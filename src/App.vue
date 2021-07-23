<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/car">CarList</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <router-view/>
</template>

<style lang="scss">
body, input, button {
  font: 14px "Roboto",sans-serif;
}
#app {
  font: 14px "Roboto",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
