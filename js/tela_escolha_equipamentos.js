document.addEventListener("DOMContentLoaded", function () {

    botaoVoltar = document.querySelector('.header button');

    botaoVoltar.addEventListener("click", function () {
        window.history.back();
    });

    var equipamentos = {
        'maca_img': {
            "element": document.querySelector("#maca_img"),
            "status": false
        },
        'mascara_medica_img': {
            "element": document.querySelector("#mascara_medica_img"),
            "status": false
        },
        'book_img': {
            "element": document.querySelector("#book_img"),
            "status": false
        },
        'mascara_oxigenio_img': {
            "element": document.querySelector("#mascara_oxigenio_img"),
            'status': false
        },
        'luva_medica_img': {
            "element": document.querySelector("#luva_medica_img"),
            "status": false
        },
        'casaco_img': {
            "element": document.querySelector("#casaco_img"),
            "status": false
        },
        'soro_mao_img': {
            "element": document.querySelector("#soro_mao_img"),
            "status": false
        },
        'escova_dente_img': {
            "element": document.querySelector("#escova_dente_img"),
            "status": false
        },
        'reanimador_manual_img': {
            "element": document.querySelector("#reanimador_manual_img"),
            "status": false
        },
        'lapis_desenho_img': {
            "element": document.querySelector("#lapis_desenho_img"),
            "status": false
        },
        'desfibrilador_img': {
            "element": document.querySelector("#desfibrilador_img"),
            "status": false
        },
        'carteira_com_dinheiro_img': {
            "element": document.querySelector("#carteira_com_dinheiro_img"),
            "status": false
        }
    };



    Object.keys(equipamentos).forEach(function (key) {
        var elementAndStatus = equipamentos[key];

        var element = elementAndStatus['element'];

        /**
         * Ações de selecionar um equipamento e desmarcar um já selecionado
         */

        element.addEventListener('click', function () {

            var status = equipamentos[key]['status'];

            if (status) {
                equipamentos[key]['status'] = false;

                element.style.backgroundColor = '#fff';

                return;
            }

            equipamentos[key]['status'] = true;

            element.style.backgroundColor = '#C0C0C0';
        });
    });


    // Função para embaralhar os elementos de um array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Obtém todas as chaves (IDs) dos equipamentos
    const equipamentoKeys = Object.keys(equipamentos);

    // Embaralha as chaves aleatoriamente
    shuffleArray(equipamentoKeys);

    // Atribui os elementos embaralhados de volta aos IDs
    equipamentoKeys.forEach(function (key, index) {
        equipamentos[key]['element'].style.order = index + 1;
    });



    /**
     * Clique do botão salvar bebê
     */

    var buttonSalvarBebe = document.querySelector(".footer button");

    buttonSalvarBebe.addEventListener('click', function () {
        var equipamentosSelecionados = {};

        Object.keys(equipamentos).forEach(function (key) {
            var status = equipamentos[key]['status'];

            if (status) {
                equipamentosSelecionados[key] = equipamentos[key];
            }
        });

        var hasMascaraMedica = equipamentosSelecionados['mascara_medica_img'] && equipamentosSelecionados['mascara_medica_img']['status'];
        var hasLuvaMedica = equipamentosSelecionados['luva_medica_img'] && equipamentosSelecionados['luva_medica_img']['status'];

        if (hasMascaraMedica && hasLuvaMedica && Object.keys(equipamentosSelecionados).length === 2) {
            // Apenas passa para a tela de procedimento se tiver selecionado apenas a máscara médica e luva médica
            window.location.href = "tela-procedimento.html";
            window.alert('Parabéns, você selecionou os itens corretos, agora estamos preparados para fazer o próximo procedimento!');
        } else {
            window.location.href = "tela_derrota.html";
            window.alert('Infelizmente você não selecionou os itens corretos, veja as instruções da página de orientação e tente novamente!');
        }
    });


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
