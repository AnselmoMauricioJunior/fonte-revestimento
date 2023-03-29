const emailDestino = 'anselmo.mauricio.jr@gmail.com';
const enviarEmail = async (name:string,email:string,message:string)=> {
    const formData = {
      name: name,
      email: email,
      message: message,
      _captcha:false,
    };
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailDestino}`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
      const resposta = await response;

      if(resposta.status != 200)
        throw resposta.statusText+' '+resposta.status;

      console.log(resposta);
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar a mensagem!');
    }
}

export default {
    enviarEmail,
}