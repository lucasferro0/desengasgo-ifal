const proximaPagina = "../views/etapa-4.html"
const telaInicial = "../views/index.html"
const imagemTapotagemMovimento1 = document.getElementById("tapotagem-movimento-1")
const imagemTapotagemMovimento2 = document.getElementById("tapotagem-movimento-2")
const numeroTapotagensCorreto = 5
let tapotagensRealizadas = document.getElementById("tapotagens-realizadas")
let contadorTapotagens = 0

function alternarImagens(){
    if(imagemTapotagemMovimento1.style.display !== "none"){
        imagemTapotagemMovimento1.style.display = "none"
        imagemTapotagemMovimento2.style.display = "block"

        setTimeout(function(){
            imagemTapotagemMovimento1.style.display = "block"
            imagemTapotagemMovimento2.style.display = "none"
        }, 200)
    }

    contadorTapotagens++
    tapotagensRealizadas.textContent = contadorTapotagens
    console.log(contadorTapotagens)
}

function contarErro(){
    let valorAtual = parseInt(window.localStorage.getItem("errosCometidos"))
    window.localStorage.setItem("errosCometidos", valorAtual + 1)
}

function reiniciarContador(){
    contadorTapotagens = 0
    tapotagensRealizadas.textContent = 0
}

function sair(){
    window.location.href = telaInicial
}

function redirecionarPagina(){
    window.location.href = proximaPagina
}

function verificarResposta(){
    const alertaAcerto = document.getElementById("alerta-acerto")
    const alertaErro = document.getElementById("alerta-erro")
    if(contadorTapotagens === numeroTapotagensCorreto){
        alertaAcerto.showModal()
        setTimeout(function(){
            redirecionarPagina()
        }, 1000)
    } else {
        alertaErro.showModal()
        setTimeout(function(){
            alertaErro.close()
        }, 1000)
      reiniciarContador()
      contarErro()  
    }
}
