<template>
  <div id="app">
    <Menus />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <!-- O menu lateral deve ficar dentro de uma coluna com tamanho 2 -->
          <Menus />
        </div>
        <div class="col-md-10">
          <!-- O corpo do conteúdo deve ficar dentro de uma coluna com tamanho 10 -->
          <Corpo />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Menus from "./components/Menus.vue"
import Corpo from "./components/Corpo.vue"

export default ({
  name: 'App',
  components: {
    Menus,
    Corpo,
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #f8f9fa;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.col-md-2{
  width: 20%;
}

.col-md-10 {
  width: 80%;
}
</style>
