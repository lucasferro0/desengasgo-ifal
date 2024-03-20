const telaInicial = "../views/index.html"
const nomeUsuario = localStorage.getItem("username");

document.getElementById("nomeUsuario").textContent = nomeUsuario;

function redirecionarTelaInicial(){
  window.location.href = telaInicial;
}