const imagens = ["../img/tapotagem_movimento_1.png", "../img/posicao_bebe_3.png", "../img/posicao_bebe_2.png"]
const indiceImagemCorreta = imagens.length - 1
const imagemAtual = document.getElementById("posicao-bebe")
const proximaPagina = "../views/etapa-5.html"
const telaInicial = "../views/index.html"
let indiceAtual = 0

function mudarImagem(){
    if (indiceAtual < imagens.length - 1){
        indiceAtual++
    } else {
        indiceAtual = 0
    }
    imagemAtual.src = imagens[indiceAtual]
}

function contarErro(){
    let valorAtual = parseInt(window.localStorage.getItem("errosCometidos"))
    window.localStorage.setItem("errosCometidos", valorAtual + 1)
}

function sair(){
    window.location.href = telaInicial
}

function redirecionarPagina(){
    window.location.href = proximaPagina
}

function verificarResposta() {
    if (indiceAtual === indiceImagemCorreta){
        alert("Correto!")
        redirecionarPagina()
    } else {
        alert("Errado!")
        contarErro()
    }
}