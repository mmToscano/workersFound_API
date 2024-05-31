//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const addressModel = require("../model/AddressModel")

class AddressController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaAddress = addressModel.listar();
        return listaAddress.then(address => res.status(200).json(address))
        .catch(error => res.status(400).json(error))
    }
    
    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoAddress = req.body;
        const address = addressModel.criar(novoAddress);
        return address.then(addressCriado => res.status(201).json(addressCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const addressAtualizado = req.body;
        const address = addressModel.atualizar(addressAtualizado, id);
        address.then(resultAddressAtualizado => res.status(200).json(resultAddressAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const address = addressModel.deletar(id);
        address.then(resultAddressDeletado => res.status(200).json(resultAddressDeletado))
        .catch((error) => res.status(400).json(error))
    }

    apagarTudo(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const address = addressModel.deletarTudo();
        address.then(resultAddressDeletado => res.status(200).json(resultAddressDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new AddressController();