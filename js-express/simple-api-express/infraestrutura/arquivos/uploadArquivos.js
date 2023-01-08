const fs = require('fs')
const path = require('path')

module.exports = (caminho, nome, callbackImagemCriada) => {
    
    const tiposValidos = ['jpg', 'png', 'jpeg', 'bmp']
    const tipo = path.extname(caminho)

    const valido = tiposValidos.indexOf(tipo.substring(1)) !== -1
    if(!valido) {
        const erro = 'Tipo de imagem invalida'

        callbackImagemCriada(erro)
    } else {
        const novoCaminho = `./assets/imagens/${nome}${tipo}`

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    }
    
}
