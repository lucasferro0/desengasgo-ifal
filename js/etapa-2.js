window.localStorage.setItem("errosCometidos", 0)

const imagens = ["../img/posicao_bebe_1.png", "../img/posicao_bebe_2.png", "../img/posicao_bebe_3.png", "../img/tapotagem_movimento_1.png"]
const indiceImagemCorreta = imagens.length - 1
const imagemAtual = document.getElementById("posicao-bebe")
const proximaPagina = "../views/etapa-3.html"
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
    const alertaAcerto = document.getElementById("alerta-acerto")
    const alertaErro = document.getElementById("alerta-erro")
    if (indiceAtual === indiceImagemCorreta){
        alertaAcerto.showModal()
        setTimeout(function(){
            redirecionarPagina()
        }, 1000)
    } else {
        alertaErro.showModal()
        document.getElementById('som_derrota').play();
        setTimeout(function(){
            alertaErro.close();
        }, 2500);
    }
}