const conexao = require("../infraestrutura/conexao")
//regras de negócio
class ProfessionalModel {

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
        const sql = "SELECT * FROM professional";
        return this.executaQuery(sql)
    }
    criar(novoProfessional) {
        const sql = "insert into professional set ?"
        return this.executaQuery(sql, novoProfessional)
    }
    atualizar(professionalAtualizado, id) {
        const sql = "update professional set ? where professional_id = ?"
        return this.executaQuery(sql, [professionalAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from professional where professional_id = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from professional"
        return this.executaQuery(sql)
    }
}

module.exports = new ProfessionalModel();