var agora = new Date()
var ano = agora.getFullYear()

var input = window.document.getElementsByClassName('ano')[0]

var txt = window.document.querySelector('p.txt')

var foto = window.document.getElementsByClassName('foto')[0]

var masculino = document.getElementById('mas')
var feminino = document.getElementById('fem')

var sexo = 0

var nome = ''

function clicar(a) {
    if (a == 1) {
        masculino.checked = true
        feminino.checked = false
        return sexo = a
    } else {
        masculino.checked = false
        feminino.checked = true
        return sexo = a
    }

}

function verificar() {
    var idade = ano - input.value // idade 
    if (idade == 0 || idade == 1) { // bebê
        nome = 'Bebê'
        if (sexo == 1) {
            foto.style.backgroundImage = 'url(imagens/01.jpg)'
        } else {
            foto.style.backgroundImage = 'url(imagens/02.jpg)'
        }
    } else if (idade < 12) { // criança
        nome = 'Criança'
        if (sexo == 1) {
            foto.style.backgroundImage = 'url(imagens/11.jpg)'
        } else {
            foto.style.backgroundImage = 'url(imagens/12.jpg)'
        }
    } else if (idade < 24) { // adolescente
        nome = 'Adolescente'
        if (sexo == 1) {
            foto.style.backgroundImage = 'url(imagens/21.jpg)'
        } else {
            foto.style.backgroundImage = 'url(imagens/22.jpg)'
        }
    } else if (idade < 40) { // Adulto
        nome = 'Adulto'
        if (sexo == 1) {
            foto.style.backgroundImage = 'url(imagens/31.jpg)'
        } else {
            foto.style.backgroundImage = 'url(imagens/32.jpg)'
        }
    } else if (idade < 59) { // Coroa
        nome = 'Coroa'
        if (sexo == 1) {
            foto.style.backgroundImage = 'url(imagens/41.jpg)'
        } else {
            foto.style.backgroundImage = 'url(imagens/42.jpg)'
        }
    } else if (idade < 122) { // Idoso
        nome = 'Idoso'
        if (sexo == 1) {
            foto.style.backgroundImage = 'url(imagens/51.jpg)'
        } else {
            nome = 'Idosa'
            foto.style.backgroundImage = 'url(imagens/52.jpg)'
        }
    } if (idade < 0 || idade > 122) { // meme
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        foto.style.backgroundImage = 'url(imagens/burro.jpg)'
        txt.innerHTML = `Tá doido fí skskks`
    } else {
        txt.innerHTML = `Detectamos ${nome} com ${idade} anos.`
    }
}