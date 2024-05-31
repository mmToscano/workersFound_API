const conexao = require("../infraestrutura/conexao")
//regras de negócio
class ScheduleModel {

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
        const sql = "SELECT * FROM schedule";
        return this.executaQuery(sql)
    }
    criar(novoAdress) {
        const sql = "insert into schedule set ?"
        return this.executaQuery(sql, novoAdress)
    }
    atualizar(scheduleAtualizado, id) {
        const sql = "update schedule set ? where schedule_id = ?"
        return this.executaQuery(sql, [scheduleAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from schedule where schedule_id = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from schedule"
        return this.executaQuery(sql)
    }
}

module.exports = new ScheduleModel();