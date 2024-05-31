//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const userModel = require("../model/UserModel")

class UserController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaUser = userModel.listar();
        return listaUser.then(user => res.status(200).json(user))
        .catch(error => res.status(400).json(error))
    }
    
    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoUser = req.body;
        const user = userModel.criar(novoUser);
        return user.then(userCriado => res.status(201).json(userCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const userAtualizado = req.body;
        const user = userModel.atualizar(userAtualizado, id);
        user.then(resultUserAtualizado => res.status(200).json(resultUserAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const user = userModel.deletar(id);
        user.then(resultUserDeletado => res.status(200).json(resultUserDeletado))
        .catch((error) => res.status(400).json(error))
    }

    apagarTudo(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const user = userModel.deletarTudo();
        user.then(resultUserDeletado => res.status(200).json(resultUserDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new UserController();