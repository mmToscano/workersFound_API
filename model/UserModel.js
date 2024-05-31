const conexao = require("../infraestrutura/conexao")
//regras de negócio
class UserModel {

    executaQuery(sql, parametros = "") {
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (error, resposta) => {
                if(error) {
                    return reject(error);
                }
                return resolve(resposta)
            })
        })
    }

    listar() {
        const sql = "SELECT * FROM user";
        return this.executaQuery(sql)
    }
    criar(novoAdress) {
        const sql = "insert into user set ?"
        return this.executaQuery(sql, novoAdress)
    }
    atualizar(userAtualizado, id) {
        const sql = "update user set ? where user_id = ?"
        return this.executaQuery(sql, [userAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from user where user_id = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from user"
        return this.executaQuery(sql)
    }
}

module.exports = new UserModel();