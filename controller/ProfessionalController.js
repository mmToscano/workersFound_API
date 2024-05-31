//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const professionalModel = require("../model/ProfessionalModel")

class ProfessionalController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaProfessional = professionalModel.listar();
        return listaProfessional.then(professional => res.status(200).json(professional))
        .catch(error => res.status(400).json(error))
    }
    
    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoProfessional = req.body;
        const professional = professionalModel.criar(novoProfessional);
        return professional.then(professionalCriado => res.status(201).json(professionalCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const professionalAtualizado = req.body;
        const professional = professionalModel.atualizar(professionalAtualizado, id);
        professional.then(resultProfessionalAtualizado => res.status(200).json(resultProfessionalAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const professional = professionalModel.deletar(id);
        professional.then(resultProfessionalDeletado => res.status(200).json(resultProfessionalDeletado))
        .catch((error) => res.status(400).json(error))
    }

    apagarTudo(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const professional = professionalModel.deletarTudo();
        professional.then(resultProfessionalDeletado => res.status(200).json(resultProfessionalDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new ProfessionalController();