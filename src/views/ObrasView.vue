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

@Options({
  components: {
      ObraDetalhes
      },
})
export default class ObrasView extends Vue {
  obras:  Obra[] = [
    {
      id: 1,
      titulo: 'Mona Lisa',
      descricao: 'Pintura a óleo de Leonardo da Vinci',
      foto: require('../../public/img/mona-lisa.jpg'),
      fotos: [
        require('../../public/img/mona-lisa.jpg'),
        require('../../public/img/mona-lisa.jpg'),
        require('../../public/img/mona-lisa.jpg'),
      ],
    },
    {
      id: 2,
      titulo: 'A noite estrelada',
      descricao: 'Pintura a óleo de Vincent van Gogh',
      foto: require('../../public/img/a-noite-estrelada.jpg'),
      fotos: [
        require('../../public/img/a-noite-estrelada.jpg'),
        require('../../public/img/a-noite-estrelada.jpg'),
        require('../../public/img/a-noite-estrelada.jpg'),
      ],
    },
    {
      id: 3,
      titulo: 'O Grito',
      descricao: 'Pintura a óleo de Edvard Munch',
      foto: require('../../public/img/o-grito.jpg'),
      fotos: [
        require('../../public/img/o-grito.jpg'),
        require('../../public/img/a-noite-estrelada.jpg'),
        require('../../public/img/o-grito.jpg'),
        
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/o-grito.jpg'),
        
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/o-grito.jpg'),
        
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/o-grito.jpg'),
        
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/os-girassois.jpg'),
      ],
    },
    {
      id: 4,
      titulo: 'Os Girassóis',
      descricao: 'Pintura a óleo de Vincent van Gogh',
      foto: require('../../public/img/os-girassois.jpg'),
      fotos: [
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/os-girassois.jpg'),
      ],
    },
    {
      id: 5,
      titulo: 'Guernica',
      descricao: 'Pintura a óleo de Pablo Picasso',
      foto: require('../../public/img/guernica.jpg'),
      fotos: [
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
      ],
    },
  ];
   obraSelecionada: Obra | null = null;

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
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
}

.obra {
  width: 48%;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem; /* Definir um espaço para evitar que a imagem seja cortada na margem superior */
}

.obra-foto {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border: 1px solid black;
}

.obra-titulo {
  text-align: center;
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
  overflow-y: hidden; /* habilita a barra de rolagem vertical */
}

.fotos-relacionadas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  margin-top: 1rem; /* adiciona uma margem superior para evitar que o botão fique coberto */
  margin-bottom: 3rem;
  padding: 1rem; /* adiciona um espaçamento interno */
  box-sizing: border-box; /* inclui o preenchimento interno no cálculo da largura e altura */
  overflow: auto; /* habilita a barra de rolagem quando necessário */
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