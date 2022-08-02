function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.getElementById(`res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ("[ERRO] Verifique os dados e tente novamente!")
        } else {
            var fsex = document.getElementsByName(`radsex`)
            var idade = ano - Number(fano.value)
            var genero = ``
            var img = document.createElement(`img`)
            img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade <= 4) { // bebê menino
                img.setAttribute(`src`, `bebemenino.png`)
            }else if (idade <= 8) { // menino +- 6 anos
                img.setAttribute(`src`, `menino5anos.png`)
            }else if (idade <=12) {// garoto de +- 10 anos
                img.setAttribute(`src`, `garoto10anos.png`)
            }else if (idade <=21) { // jovem
                img.setAttribute(`src`, `jovemmasculino.png`)
            }else if (idade <=40) {// jovemsenhor
                img.setAttribute(`src`, `jovemsenhor.png`)
            }else if (idade <=50) { // homem maduro
                img.setAttribute(`src`, `homem.png`)
            }else if (idade <=65) {// homem experiente
                img.setAttribute(`src`, `homemexperiente.png`)
            }else { // idoso
                img.setAttribute(`src`, `idoso.png`)
            }
        }else if (fsex[1].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade < 10) { // criança
                img.setAttribute(`src`, `bebemenina.png`)
            }else if (idade < 21) { // jovem
                img.setAttribute(`src`, `jovemfeminino.png`)
            }else if (idade < 50) { // adulta
                img.setAttribute(`src`, `mulher.png`)
            }else { // idosa
                img.setAttribute(`src`, `idosa.png`)
            }
        }
            
            res.innerHTML = `Detectamos genero ${genero} com ${idade} anos de idade.`
            res.appendChild(img)
        }
    }
