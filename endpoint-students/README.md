<h1 align="center">
  Endpoint students
</h1>
<p align="center"></p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-instalar">Como instalar</a>
</p>

## 🚀 Tecnologias

Tecnologias utilizadas para a criação da API
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Tsyringe](https://github.com/Microsoft/tsyringe)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io)

## 💻 Como instalar

### Requerimentos
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Uma instancia no [Postgres](https://www.postgresql.org/)
> Obs.: Recomendo a utilização do Docker

**Clone o projeto e acesse a pasta da api**
```bash
$ git clone https://github.com/jrgraff/endpoint-students.git && cd endpoint-students
```
**Siga os passos abaixo**
> Obs.: Utilizarei o yarn para a instalação dos pacotes, mas o npm também pode ser utilizado
```bash
# Instale as dependências
$ yarn

# Crie a instancia do postgres utilizando o docker-compose caso o tenha instalado em sua maquina
$ docker-compose up -d

# Caso não utilize o comando acima, tenha certeza que o 'ormconfig.json'
# tenha as informações necessárias para se conectar ao seu banco de dados postegres

# Com a instância do postgres rodando, sincronize o banco de dados
$ yarn typeorm schema:sync

# E por fim, rode a api em modo de desenvolvimento com o comando abaixo
$ yarn dev

# Muito bem, o projeto está rodando! Agora você pode testar as rotas utilizando a UI do Swagger ou uma ferramenta como Insomnia ou Postman.
```

**Rota para criação e listagem de alunos**
```bash
http://localhost:3333/students
```
**Exemplo da rota post**
```bash
# A requisição do tipo POST leva as informações no corpo da requisição, sempre no tipo JSON
{
  "cpf": "73780168022",
  "name": "Ricardo Augusto",
  "birthday": "20/02/1992"
}
```

**Acessando a documentação com Swagger**
<p>Após tudo configurado, com a sistema rodando, entre no link http://localhost:3333/ para acessar a documentação do Swagger.</p>
