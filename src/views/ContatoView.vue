<template>
  <div class="contact-page">
    <div class="contact-info">
      <div class="contact-item">
        <i class="bi bi-geo-alt"></i>
        <div class="contact-details">
          <h4>Endereço</h4>
          <p>Rua Exemplo, 123 - Bairro</p>
          <p>Cidade - Estado - CEP</p>
        </div>
      </div>
      <div class="contact-item">
        <i class="bi bi-telephone"></i>
        <div class="contact-details">
          <h4>Telefone</h4>
          <p>(11) 1234-5678</p>
          <p>(11) 9876-5432</p>
        </div>
      </div>
      <div class="contact-item">
        <i class="bi bi-envelope"></i>
        <div class="contact-details">
          <h4>E-mail</h4>
          <p>contato@exemplo.com</p>
          <p>suporte@exemplo.com</p>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <h3>Entre em contato conosco</h3>
      <form @submit.prevent="enviarMensagem">
        <div class="form-group">
          <input type="text" id="name" placeholder="Entre com seu nome">
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Entre com seu endereço de e-mail">
        </div>
        <div class="form-group">
          <textarea id="message" rows="5"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';

@Options({
  components: {
  },
})
export default class ContatoView extends Vue {
nome = '';
  email = '';
  mensagem = '';

  enviarMensagem() {
    const dados = {
      nome: this.nome,
      email: this.email,
      mensagem: this.mensagem,
    };

    axios.post('/url-do-seu-servidor', dados)
      .then((resposta) => {
        console.log('Mensagem enviada:', resposta.data);
        // Ou exiba uma mensagem de sucesso para o usuário
      })
      .catch((erro) => {
        console.error('Erro ao enviar mensagem:', erro);
        // Ou exiba uma mensagem de erro para o usuário
      });
  }

}
</script>

<style>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;  
}

.contact-info {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 20px 0;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 30%;
}

.contact-item i {
  font-size: 36px;
  margin-bottom: 10px;
}

.contact-form {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 60%;
}

.contact-form h3 {
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.form-group input {
  height: 30px;
}

.form-group textarea {
  min-height: 100px;
}

button[type="submit"] {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
}

</style>