//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const professionalServiceModel = require("../model/ProfessionalServiceModel")

class ProfessionalServiceController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaProfessionalService = professionalServiceModel.listar();
        return listaProfessionalService.then(professionalService => res.status(200).json(professionalService))
        .catch(error => res.status(400).json(error))
    }
    
    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoProfessionalService = req.body;
        const professionalService = professionalServiceModel.criar(novoProfessionalService);
        return professionalService.then(professionalServiceCriado => res.status(201).json(professionalServiceCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const professionalServiceAtualizado = req.body;
        const professionalService = professionalServiceModel.atualizar(professionalServiceAtualizado, id);
        professionalService.then(resultProfessionalServiceAtualizado => res.status(200).json(resultProfessionalServiceAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const professionalService = professionalServiceModel.deletar(id);
        professionalService.then(resultProfessionalServiceDeletado => res.status(200).json(resultProfessionalServiceDeletado))
        .catch((error) => res.status(400).json(error))
    }

    apagarTudo(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const professionalService = professionalServiceModel.deletarTudo();
        professionalService.then(resultProfessionalServiceDeletado => res.status(200).json(resultProfessionalServiceDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new ProfessionalServiceController();