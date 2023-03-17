<template>
  <div class="corpo">
      <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Corpo extends Vue {}
</script>