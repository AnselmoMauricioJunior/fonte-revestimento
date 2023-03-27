<template>
  <div class="contact-page">
    <div class="contact-info">
      <div class="contact-item">
        <i class="bi bi-geo-alt"></i>
        <div class="contact-details">
          <h4>Endereço</h4>
          <p>Rua 6, 103 - Rosa Elze</p>
          <p>São Cristovão - Sergipe - 49100-000</p>
        </div>
      </div>
      <div class="contact-item">
        <i class="bi bi-telephone"></i>
        <div class="contact-details">
          <h4>Telefone</h4>
          <p>(79) 3257-2644</p>
          <p>(79) 99968-2601</p>
        </div>
      </div>
      <div class="contact-item">
        <i class="bi bi-envelope"></i>
        <div class="contact-details">
          <h4>E-mail</h4>          
          <p>fonterevestimento@gmail.com</p>
          <p>anselmopintor@hotmail.com</p>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <h3>Entre em contato conosco</h3>
     <form @submit.prevent="submitForm" :class="{ 'is-loading': isLoading }">
        <div class="form-group">
          <input type="text" id="name" name="name" maxlength="50" placeholder="Entre com seu nome" v-model="name" required :disabled="isLoading">
        </div>
        <div class="form-group">
          <input type="email" id="email" name="email" maxlength="50" placeholder="Entre com seu endereço de e-mail" v-model="email" required :disabled="isLoading">
        </div>
        <div class="form-group">
          <textarea id="message" name="message" rows="5" maxlength="1000" v-model="message" @input="updateMessageLength" required :disabled="isLoading"></textarea>
          <p class="caracteres-restante">{{ messageLength }}</p>
        </div>
        <button type="submit" :disabled="isLoading">         
          <span v-if="!isLoading" class="loading-message">Enviar</span> 
          <span v-if="isLoading" class="loading-message">Enviando...</span>
        </button>
          <input type="hidden" id="_captcha" name="_captcha" value="false">
       </form>
    </div>
  </div>
</template>
<script>
import { Options, Vue } from 'vue-class-component';
import formSubmitService from '@/services/formSubmitService';

@Options({
  components: {
  },
})


export default class ContatoView extends Vue {
  name = '';
  email = '';
  message = '';
  messageLength = 1000;
  isLoading = false; 

  updateMessageLength() {
    this.messageLength = 1000 - this.message.length;
  }

  async submitForm() {   
    this.isLoading = true;
    await formSubmitService.enviarEmail(this.name,
                                  this.email,
                                  this.message,
                                  );

    this.isLoading = false;
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
  box-shadow: 20px 10px rgb(170, 170, 170);
  background-image: linear-gradient(to bottom, #cdcdcd, #ffffff,#cfc8c9);
}

.contact-item i {
  font-size: 36px;
  margin-bottom: 10px;
}

.contact-form {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 50%;
  box-shadow: 10px 10px rgb(219, 219, 219);
  background-image: linear-gradient(to bottom, #e9f8ff, #ffffff,#ecf5f9);
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
  min-height: 200px;
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

.caracteres-restante{
  text-align: right;
}

</style>