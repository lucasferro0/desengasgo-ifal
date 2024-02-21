document.addEventListener("DOMContentLoaded", function () {

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
  });
  