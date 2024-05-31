const conexao = require("../infraestrutura/conexao")
//regras de negócio
class ProfessionalServiceModel {

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
        const sql = "SELECT * FROM professional_service";
        return this.executaQuery(sql)
    }
    criar(novoAdress) {
        const sql = "insert into professional_service set ?"
        return this.executaQuery(sql, novoAdress)
    }
    atualizar(professionalServiceAtualizado, id) {
        const sql = "update professional_service set ? where professional_service_id = ?"
        return this.executaQuery(sql, [professionalServiceAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from professional_service where professional_service = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from professional_service"
        return this.executaQuery(sql)
    }
}

module.exports = new ProfessionalServiceModel();