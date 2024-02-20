document.addEventListener("DOMContentLoaded", function() {
  const botaoVoltar = document.querySelector(".button-voltar");
  const botaoContinuar = document.querySelector(".button-vamos");
  const botaoAjuda = document.querySelector(".button-nao-sei");

  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", function () {
      window.history.back();
    });
  }

  if (botaoContinuar) {
    botaoContinuar.addEventListener("click", function () {
      window.location.href = "orientacoes.html";
    });
  }

  if (botaoAjuda) {
    botaoAjuda.addEventListener("click", function () {
      window.location.href = "orientacoes.html";
    });
  }
});
