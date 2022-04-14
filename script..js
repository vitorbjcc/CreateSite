function CreateElement() {

    var texto = window.document.getElementById('text')

    if (texto.value.length == 0) {

        window.alert('Digite o conteúdo!')

    } else {

        var para = window.document.getElementById('p')

        var h1 = window.document.getElementById('h1')

        if (para.checked == true) {

            window.document.getElementById('para').remove()

            var Npara = document.createElement('p')

            Npara.setAttribute('id', 'para')

            Npara.innerHTML = texto.value

            window.document.querySelector('div#contexto').appendChild(Npara)
        } else {

            window.document.querySelector('h1').remove()

            var Nh1 = document.createElement('h1')

            Nh1.setAttribute('id', 'titulo')

            Nh1.innerHTML = texto.value

            window.document.getElementById('h1').appendChild(Nh1)
        }
    }
}

window.document.getElementById('btn').addEventListener('click', CreateElement)