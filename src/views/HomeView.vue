<template>
  <div class="home">
    <HelloWord :msg="Tela" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWord from '@/components/HelloWorld.vue'

@Options({
  components: {
    HelloWord,
  },
})
export default class HomeView extends Vue {}
</script>
