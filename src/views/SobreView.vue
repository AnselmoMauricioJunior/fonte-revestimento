<template>
  <div class="about-page">
    <h1>Sobre</h1>
    <p>Esta é a página sobre a nossa empresa/projeto</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class SobreView extends Vue {}
</script>


<style scoped>
.about-page {
  padding: 20px;
}
</style>