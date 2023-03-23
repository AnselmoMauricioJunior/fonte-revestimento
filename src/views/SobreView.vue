<template>
  <div class="about-page">
    <h1>Fonte Revestimento</h1>
    <p>A Fonte Revestimento é uma empresa sólida e confiável, que atua há vários anos no mercado da construção civil em Sergipe. Nossa missão é oferecer soluções inovadoras e de qualidade para atender às necessidades dos nossos clientes, com responsabilidade e comprometimento.</p>

    <p>Nosso time é composto por profissionais experientes e capacitados, que trabalham de forma integrada e colaborativa para garantir o sucesso de cada projeto. Utilizamos materiais de primeira linha e técnicas modernas para oferecer acabamentos de excelência e durabilidade.</p>

    <p>A Fonte Revestimento tem como valores a ética, a transparência, a honestidade e a excelência. Buscamos sempre aprimorar nossos processos e serviços, visando a satisfação plena dos nossos clientes e o sucesso da empresa.</p>

    <p>Nossas principais áreas de atuação são a construção e reforma de imóveis residenciais e comerciais, com destaque para serviços de revestimento, pintura e acabamento. Além disso, oferecemos consultoria e projetos personalizados para atender às necessidades específicas de cada cliente.</p>

    <p>A Fonte Revestimento é uma empresa comprometida com a qualidade e a satisfação do cliente. Entre em contato conosco e descubra como podemos ajudá-lo a realizar seus projetos com excelência e eficiência.</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class SobreView extends Vue {}
</script>


<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.about-page h1 {
  font-size: 4rem;
  font-weight: bold;
  color: black;
  margin-bottom: 5%;
}

.about-page p {
  text-align: justify;
  max-width: calc(100% - 300px);
  margin-right: 100px;
  color: #606060;
  font-size: 1.2rem;
  line-height: 2rem;
}

</style>