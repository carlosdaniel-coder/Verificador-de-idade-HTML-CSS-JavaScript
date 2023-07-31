function verificar() {
    var data = new Date()
    var agoraAno = data.getFullYear()
    var fano = window.document.getElementById('nascimento')
    var res = document.getElementById('res')
    if (fano.value <= 0 || Number(fano.value) >= agoraAno) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = agoraAno - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 2) {
                // bebe
                img.setAttribute('src', 'imagens/bebeM.png')
            } else if (idade <= 14) {
                // criança
                img.setAttribute('src', 'imagens/criançaM.png')
            } else if (idade <= 18) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescenteM.png')
            } else if (idade <= 40) {
                // adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            } else if (idade <= 60) {
                // coroa
                img.setAttribute('src', 'imagens/coroaM.png')
            } else {
                // velho
                img.setAttribute('src', 'imagens/velhoM.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 2) {
                // bebe
                img.setAttribute('src', 'imagens/bebeF.png')
            } else if (idade <= 12) {
                // criança
                img.setAttribute('src', 'imagens/criançaF.png')
            } else if (idade <= 18) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescenteF.png')
            } else if (idade <= 40) {
                // adulto
                img.setAttribute('src', 'imagens/adultoF.png')
            } else if (idade <= 60) {
                // coroa
                img.setAttribute('src', 'imagens/coroaF.png')
            } else {
                // velho
                img.setAttribute('src', 'imagens/velhoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}