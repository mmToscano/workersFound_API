//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const scheduleModel = require("../model/ScheduleModel")

class ScheduleController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaSchedule = scheduleModel.listar();
        return listaSchedule.then(schedule => res.status(200).json(schedule))
        .catch(error => res.status(400).json(error))
    }
    
    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoSchedule = req.body;
        const schedule = scheduleModel.criar(novoSchedule);
        return schedule.then(scheduleCriado => res.status(201).json(scheduleCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const scheduleAtualizado = req.body;
        const schedule = scheduleModel.atualizar(scheduleAtualizado, id);
        schedule.then(resultScheduleAtualizado => res.status(200).json(resultScheduleAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const schedule = scheduleModel.deletar(id);
        schedule.then(resultScheduleDeletado => res.status(200).json(resultScheduleDeletado))
        .catch((error) => res.status(400).json(error))
    }

    apagarTudo(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const schedule = scheduleModel.deletarTudo();
        schedule.then(resultScheduleDeletado => res.status(200).json(resultScheduleDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new ScheduleController();