document.addEventListener("DOMContentLoaded", function() {
  const redirectVoltar = function() {
    window.location.href = "index.html";
  };

  const botaoVoltar = document.querySelector(".botaoVoltar");
  if (botaoVoltar) {
      botaoVoltar.addEventListener("click", redirectVoltar);
  }
});
