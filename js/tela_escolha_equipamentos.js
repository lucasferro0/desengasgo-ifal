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

        var passesWithSucess = true;

        Object.keys(equipamentosSelecionados).forEach(function (key) {
            var element = equipamentosSelecionados[key]['element'];

            if (key != 'mascara_medica_img' && key != 'luva_medica_img') {
                passesWithSucess = false;

                var closeImgElement = element.querySelector(".close_img");

                closeImgElement.style.display = 'inline'
            }
        });

        if (passesWithSucess) {
            window.alert('GANHOUUUU');
        } else {
            window.alert('PERDEUUU');
        }
    });


});
