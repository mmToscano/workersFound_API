const conexao = require("../infraestrutura/conexao")
//regras de negócio
class AddressModel {

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
        const sql = "SELECT * FROM address";
        return this.executaQuery(sql)
    }
    criar(novoAdress) {
        const sql = "insert into address set ?"
        return this.executaQuery(sql, novoAdress)
    }
    atualizar(addressAtualizado, id) {
        const sql = "update address set ? where address_id = ?"
        return this.executaQuery(sql, [addressAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from address where address_id = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from address"
        return this.executaQuery(sql)
    }
}

module.exports = new AddressModel();