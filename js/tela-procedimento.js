document.addEventListener("DOMContentLoaded", function() {
  let contadorCliques = 0;
  const progressBar = document.getElementById('progressBar');

  function realizarTapotagem() {
    contadorCliques++;

    if (contadorCliques <= 5) {
      const progress = (contadorCliques / 5) * 100;
      progressBar.style.width = progress + '%';

      // Verifica se atingiu 100% após a atualização da barra
      if (contadorCliques === 5) {
        // Adiciona um pequeno atraso usando setTimeout antes de exibir o alerta
        setTimeout(function() {
          alert('Parabéns você completou o precedimento de tapotagem!');
        }, 500); // Tempo em milissegundos, ajuste conforme necessário
      }
    }
  }

  // Adicione a função ao escopo global para ser chamada pelo botão
  window.realizarTapotagem = realizarTapotagem;


  const botaoVoltar = document.querySelector(".button-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", function () {
      window.history.back();
    });
  }


    // Recupera o nome de login do Local Storage
    var nomeLogin = localStorage.getItem("username");
    console.log("Nome de login recuperado do Local Storage:", nomeLogin);

    // Verifica se o nome de login foi armazenado
    if (nomeLogin) {
      // Define o nome de login no elemento HTML
      document.getElementById("nomeUsuario").textContent = nomeLogin;
      console.log("Nome de login definido no elemento HTML:", nomeLogin);
    } else {
      console.log("Nome de login não encontrado no Local Storage.");
    }
});
