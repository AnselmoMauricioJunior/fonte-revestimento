<template>
  <div class="container corpo">
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Corpo extends Vue {}
</script>

<style>
.corpo {
  padding: 15px;
  margin-top: 20px;
}

@media (min-width: 768px) {
  .corpo {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>