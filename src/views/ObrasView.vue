<template>
   <div class="obras">
    <div class="obras-grid">
      <div v-for="obra in obras" :key="obra.id" class="obra">
        <a @click="selecionarObra(obra)">
          <img :src="obra.foto" alt="Foto da obra" class="obra-foto" />
          <p class="obra-titulo">{{ obra.titulo }}</p>
        </a>
      </div>
    </div>
    </div>
    <div class="modal" v-if="obraSelecionada" > 
      <div class="fotos-relacionadas"> 
      <ObraDetalhes :obra="obraSelecionada"/>      
      <button @click="fecharModal">x</button>
      </div>
    </div>
    
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Obra } from '@/types/obra'; // importe o tipo de dados das obras, com as informações como id, foto e título
import ObraDetalhes from '../components/ObraDetalhes.vue'
import obrasService from '@/services/obrasService'

@Options({
  components: {
      ObraDetalhes
      },
})
export default class ObrasView extends Vue {
   obraSelecionada: Obra | null = null;
   obras: Obra[] = [];

  async created() {
    this.obras = await obrasService.getObras();
  }
  selecionarObra(obra: Obra) {
     this.obraSelecionada = obra;
  }
  fecharModal() {
    this.obraSelecionada = null;
  }
}
</script>
<style scoped>
.obras {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.obras-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 800px;
  margin: 0 auto;
}

.obra {
  width: 31%;
  margin-bottom: 1rem;
  margin-right: 1%;
  margin-top: 1%; 
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  transition: box-shadow 0.3s ease-in-out;
}

.obra:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transform:  scale(1.1)
}

.obra-foto {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.obra-titulo {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding: 5px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-y: hidden; 
}

.fotos-relacionadas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  margin-top: 1rem; 
  margin-bottom: 3rem;
  padding: 1rem; 
  box-sizing: border-box; 
  overflow: auto; 
}

.fotos-relacionadas button {
  background-color: #d9534f;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}

.fotos-relacionadas button:hover {
  background-color: #c9302c;
}

.obra-detalhes {
  max-height: 100vh;
}
</style>