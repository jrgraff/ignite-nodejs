const moment = require('moment')
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/database/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Conectado ao BD')
        Tabelas.init(conexao)

        console.log(moment().format('YYYY-MM-DD hh:mm:ss'))

        const app = customExpress()
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }

})
