<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-image-container">
        <img src="../../public/img/google-logo-4.png" alt="Imagem principal da página" class="hero-image">
      </div>
      <div class="hero-text">
        <h1>Bem-vindo ao meu site</h1>
        <p>Aqui você encontrará informações sobre mim e meus trabalhos. Explore o menu a esquerda para saber mais.</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh; /* altura ajustada */
  width: 100%;
  position: relative;
}

.hero-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  position: relative; /* posição ajustada */  
  margin-top: 10%;
}

.hero-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.hero-text {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
  margin-top: 50px; /* margem ajustada */
  color: black;
}

.hero-text h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-text p {
  font-size: 1.5rem;
  line-height: 2rem;
  max-width: 800px;
}
</style>
