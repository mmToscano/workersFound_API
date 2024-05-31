const mysql = require("mysql")

//"amazdatabaseunitri.couhvmcpkd04.us-east-2.rds.amazonaws.com"

const conexao = mysql.createConnection({
    host: "localhost", /* se o banco estiver, sei lá, no heroku, o caminho seria algo como app-hrk */
    port: 3306,
    user: "root",
    password: "",
    database: "workers_found"
})

module.exports = conexao;