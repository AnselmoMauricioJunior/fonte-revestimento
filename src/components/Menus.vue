<template>
  <div class="sidebar">
  <div class="imagem-div">
    <img v-bind:src="caminhoImagem" alt="Minha imagem">
  </div>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <router-link :to="item.link">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Corpo extends Vue {
  data() {
    return {
      caminhoImagem: require('../../public/img/google-logo-4.png')
    }
  }
  private menuItems = [
    {
      id: 1,
      label: 'Home',
      link: '/',
    },
    {
      id: 2,
      label: 'Obras',
      link: '/obras',
    },
    {
      id: 3,
      label: 'Sobre',
      link: '/sobre',
    },
    {
      id: 4,
      label: 'Contato',
      link: '/contato',
    },
  ];
}
</script>

<style scoped>
.imagem-div img {
  transition: transform 0.3s ease;
  transform-origin: center center;
  max-width: 100%;
  height: auto;
}

.imagem-div img {
  transition: transform 0.3s ease;
  transform-origin: center center;
}

.imagem-div:hover img {
  transform: rotateY(20deg) rotateX(20deg) rotateZ(5deg);
}
.sidebar {
  background-color: #f1f1f1;
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  border-right: 1px solid #ccc;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.2);
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 0;
  margin: 0;
}

.sidebar li a {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: none;
  display: block;
  padding: 10px 20px;
  border: solid #ccc;
  border-radius: 5px;
  background-color: #f8f7d2;
  color: #333;
  transition: all 0.3s ease;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transform: perspective(100px) rotateY(3deg);
}

.sidebar li a:hover {
  background-color: #f44336;
  color: #fff;
  border-color: #f44336;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transform: perspective(100px) rotateY(10deg);
}
</style>
