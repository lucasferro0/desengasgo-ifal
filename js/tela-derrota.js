const telaInicial = "../views/etapa-1.html"
const nomeUsuario = localStorage.getItem("username");

document.getElementById("nomeUsuario").textContent = nomeUsuario;

function redirecionarTelaInicial(){
  window.location.href = telaInicial;
}