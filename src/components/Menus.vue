<template>
  <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <div class="btn-collapse">
    <button class="btn btn-primary btn-sm toggle-btn toggle-btn-custom ml-auto" @click="isCollapsed = !isCollapsed">
      <i v-bind:class="[isCollapsed ? 'bi-list' : 'bi-list-nested']"></i>
    </button>
    </div>
    <div class="imagem-div">
      <img v-bind:src="isCollapsed ? caminhoImagemLogoReduzida : caminhoImagem" alt="Minha imagem">
    </div>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <router-link :to="item.link">
          <i v-bind:class="item.icon"></i>
          <span v-if="!isCollapsed">{{ item.label }}</span>
          </router-link>
      </li>
    </ul>    
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Corpo extends Vue {
  data() {
    return {
      isCollapsed:false,
      caminhoImagem: require('../../public/img/LogoFonteRevestimento.png'),
      caminhoImagemLogoReduzida: require('../../public/img/LogoFonteRevestimento - FR.png')
    }
  }
  private menuItems = [
      {
      id: 1,
      label: 'Home',
      link: '/',
      icon: 'bi-house-door'
    },
    {
      id: 2,
      label: 'Obras',
      link: '/obras',
      icon: 'bi-building'
    },
    {
      id: 3,
      label: 'Sobre',
      link: '/sobre',
      icon: 'bi-info-circle'
    },
    {
      id: 4,
      label: 'Contato',
      link: '/contato',
      icon: 'bi-envelope'
    },
  ];
}
</script>

<style scoped>
.toggle-btn-custom {
  background-color:rgb(0, 0, 0); /* Substitua pela cor desejada */
}

.toggle-btn-custom:hover {
  background-color:#f44336; /* Substitua pela cor desejada */
}

.sidebar .toggle-btn {
  margin-left: auto;
}

.btn-collapse{
  margin-top: -5%;
  margin-bottom: 5%;
}

.imagem-div img {
    transition: transform 0.3s ease;
    transform-origin: center center;
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
     background-color: #d1caca;
    background-image: linear-gradient(to bottom, #000000, transparent,#000000);
  }

.imagem-div img:hover {
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
  display: block;
  overflow: hidden;
  background: rgb(0, 0, 0);
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 60px;
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
.sidebar li a span {
  padding-left: 3%;
}
.sidebar li a {
 font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: none;
  display: block;
  padding: 10px 20px;
  border: solid #0d6efd 1px;
  border-radius: 1px;
  background-color: #000000;
  color: #fffefe;
  transition: all 0.3s ease;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transform: perspective(100px) rotateY(3deg);
  font-weight: bold;
}


.sidebar li a:hover {
  background-color: #f44336;
  color: rgb(244, 247, 101);
  border-color: #f44336;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transform: perspective(100px) rotateY(10deg);
}
</style>
