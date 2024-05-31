const conexao = require("../infraestrutura/conexao")
//regras de negócio
class ServiceModel {

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
        const sql = "SELECT * FROM service";
        return this.executaQuery(sql)
    }
    criar(novoAdress) {
        const sql = "insert into service set ?"
        return this.executaQuery(sql, novoAdress)
    }
    atualizar(serviceAtualizado, id) {
        const sql = "update service set ? where service_id = ?"
        return this.executaQuery(sql, [serviceAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from service where service_id = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from service"
        return this.executaQuery(sql)
    }
}

module.exports = new ServiceModel();