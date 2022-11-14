$(document).ready(function() {

    $('#telefone').mask ('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    })

    $('form').validate ({

        rules: {
            nome: {
                required: true
            },

            email: {
                required:true
            },

            mensagem: {
                required :true
            },

        },
        messages: {
            nome: 'Insira seu Nome Completo',
            email: 'Insira seu email corretamente',
            mensagem:'Insira sua mensagem',
        },

        submitHandler: function(form) {
            console.log(form)
            $('input').val('');
            $('textarea').val('');
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },

    })


});