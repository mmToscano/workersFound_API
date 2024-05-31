//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const serviceModel = require("../model/ServiceModel")

class ServiceController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaService = serviceModel.listar();
        return listaService.then(service => res.status(200).json(service))
        .catch(error => res.status(400).json(error))
    }
    
    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoService = req.body;
        const service = serviceModel.criar(novoService);
        return service.then(serviceCriado => res.status(201).json(serviceCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const serviceAtualizado = req.body;
        const service = serviceModel.atualizar(serviceAtualizado, id);
        service.then(resultServiceAtualizado => res.status(200).json(resultServiceAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const service = serviceModel.deletar(id);
        service.then(resultServiceDeletado => res.status(200).json(resultServiceDeletado))
        .catch((error) => res.status(400).json(error))
    }

    apagarTudo(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const service = serviceModel.deletarTudo();
        service.then(resultServiceDeletado => res.status(200).json(resultServiceDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new ServiceController();