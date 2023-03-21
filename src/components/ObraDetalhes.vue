<template>
  <div class="obra-detalhes">
    <div class="obra-detalhes-container">
      <h1>{{ obra.titulo }}</h1>
      <p>{{ obra.descricao }}</p>
      <img :src="getObraAtual()" :alt="obra.titulo" class="obra-detalhes-imagem">
      <div class="obra-detalhes-info">        
        <div class="obra-detalhes-fotos">
          <h2>Outras Fotos</h2>
          <ul>
            <li v-for="(foto, index) in getObras()" :key="index">
              <img :src="foto" :alt="'Foto ' + (index + 1)" @click="setObraAtual(foto)">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue,prop } from 'vue-class-component';
import { Obra } from '@/types/obra';

export class Props{
  obra= prop<Obra>({required: true}) 
}

export default class ObraDetalhes extends Vue.with(Props) {
 fotoAtual = this.obra.foto
  
  setObraAtual(foto:string){
   this.fotoAtual = foto
  }
  getObraAtual(){
    return this.fotoAtual
  }

  getObras(){
   let obras = []   
   obras.push(this.obra.foto)
   obras =obras.concat(this.obra.fotos)
   return obras
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

.obra-detalhes-imagem {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  border: 5px solid black;
}

.obra-detalhes-info {
  margin-top: 10px;
  text-align: center;
}

.obra-detalhes-info h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.obra-detalhes-info p {
  font-size: 1.5rem;
  line-height: 2rem;
  max-width: 600px;
}

.obra-detalhes-fotos {
  margin-top: 50px;
  text-align: center;
}

.obra-detalhes-fotos h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.obra-detalhes-fotos ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.obra-detalhes-fotos li {
  margin: 10px;
  flex-basis: calc(33.33% - 20px); /* Largura base para cada item */
}

.obra-detalhes-fotos li img {
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.obra-detalhes-fotos li img:hover {
  transform: scale(1.1);
}
</style>
