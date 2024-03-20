const telaInicial = "../views/index.html"
const paginaVitoria = "../views/tela_vitoria.html"
const paginaDerrota = "../views/tela_derrota.html"
const errosCometidos = parseInt(window.localStorage.getItem("errosCometidos"))
const imagemCompressaoMovimento1 = document.getElementById("posicao-bebe")
const imagemCompressaoMovimento2 = document.getElementById("compressao-movimento-1")
const imagemCompressaoMovimento3 = document.getElementById("compressao-movimento-2")
const numeroCompressoesCorreto = 5
let compressoesRealizadas = document.getElementById("compressoes-realizadas")
let contadorCompressoes = 0

function alternarImagens(){
    if(imagemCompressaoMovimento1.style.display !== "none"){
        imagemCompressaoMovimento1.style.display = "none"
        imagemCompressaoMovimento2.style.display = "block"

        setTimeout(function(){
            imagemCompressaoMovimento2.style.display = "none"
            imagemCompressaoMovimento3.style.display = "block"

            setTimeout(function(){
                imagemCompressaoMovimento3.style.display = "none"
                imagemCompressaoMovimento1.style.display = "block"
            }, 300)
        }, 300)
    }

    contadorCompressoes++
    compressoesRealizadas.textContent = contadorCompressoes
}

function contarErro(){
    let valorAtual = parseInt(window.localStorage.getItem("errosCometidos"))
    window.localStorage.setItem("errosCometidos", valorAtual + 1)
}

function reiniciarContador(){
    contadorCompressoes = 0
    compressoesRealizadas.textContent = 0
}

function sair(){
    window.location.href = telaInicial
}

function redirecionarPagina(){
    if (contadorCompressoes == 5){
        reiniciarContador();
        window.location.href = paginaVitoria
    } else {
        reiniciarContador();
        window.location.href = paginaDerrota
    }
}

function verificarResposta(){
    const alertaAcerto = document.getElementById("alerta-acerto")
    const alertaErro = document.getElementById("alerta-erro")
    if(contadorCompressoes === numeroCompressoesCorreto){
        alertaAcerto.showModal()
        setTimeout(function(){
            redirecionarPagina()
        }, 1000)
    } else {
        alertaErro.showModal()
        document.getElementById('som_derrota').play();
        reiniciarContador();
        setTimeout(function () {
            window.location.href = "tela_derrota.html";
        }, 2500);
        
    }
}
