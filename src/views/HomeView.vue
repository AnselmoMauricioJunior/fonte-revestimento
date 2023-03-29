<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-image-container">
        <img src="../../public/img/LogoFonteRevestimento.png" alt="Imagem principal da página" class="hero-image">
        
      </div>
      
      <div class="hero-text">        
        <hr class="hero-divider">
        <h1>Bem-vindo!</h1>
        <p>Fonte Revestimento é uma construtora de excelência em revestimentos para a sua casa ou empreendimento. Somos especializados em oferecer soluções inovadoras e de alta qualidade para todos os tipos de projetos, desde pequenas reformas até grandes construções.</p>
        
        <p>Navegue em nosso site e descubra como podemos ajudá-lo a tornar seus sonhos de revestimento em realidade. Entre em contato conosco hoje mesmo e agende uma consulta. Estamos ansiosos para trabalhar com você!</p>
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
  flex-direction: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}

.hero-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  position: auto; /* posição ajustada */ 
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
  text-align: justify;
  font-size: 1.2rem;
  line-height: 2rem;
  max-width: calc(100% - 10px);
  color: #606060;
}
.hero-divider {
  margin-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid rgb(151, 151, 151);
}
</style>
