<template>
  <div class="obra-detalhes">
    <div class="obra-detalhes-container">
      <h1>{{ obra.titulo }}</h1>
      <p>{{ obra.descricao }}</p>
      <div class="foto-container">
        <button @click="anteriorFoto" :disabled="fotoIndex === 0" class="btn btn-light">
          <i class="bi bi-chevron-left"></i>
        </button>
        <img :src="getObraAtual()" :alt="obra.titulo" class="obra-detalhes-imagem">
        <button @click="proximaFoto" :disabled="fotoIndex === getObras().length - 1" class="btn btn-light">
          <i class="bi bi-chevron-right"></i>
        </button>        
      </div>
      <span>{{fotoIndex+1}} - {{getObras().length}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component';
import { Obra } from '@/types/obra';

export class Props {
  obra = prop<Obra>({ required: true });
}

export default class ObraDetalhes extends Vue.with(Props) {
   fotoIndex = 0;

  getObraAtual() {
    return this.getObras()[this.fotoIndex];
  }

  getObras() {
    let obras = [];
    obras.push(this.obra.foto);
    obras = obras.concat(this.obra.fotos);
    return obras;
  }

  proximaFoto() {
    if (this.fotoIndex < this.getObras().length - 1) {
      this.fotoIndex++;
    }
  }
  anteriorFoto() {
    if (this.fotoIndex > 0) {
      this.fotoIndex--;
    }
  }
}
</script>

<style scoped>
.obra-detalhes {
  display: flex;
  justify-content: center;
}

.obra-detalhes-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 50px;
}

.obra-detalhes-container p {
  color: #000;
  text-align: justify;
text-justify: inter-word;
}
.obra-detalhes-container h1 {
  color: #000;
}


.foto-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.obra-detalhes-imagem {
  max-width: 100%;
  max-height: 350px;
  object-fit: contain;
  border: 5px solid black;
}

.btn-light{
    --bs-btn-color: #f7f7f7;
    --bs-btn-bg: #000000;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #e52727;
    --bs-btn-active-color: #000;
    --bs-btn-disabled-color: #000;
    --bs-btn-disabled-bg: #a3a3a3;
}
</style>
