import Usuario from "../models/Usuario.js"

class UsuarioController {
    static async list(req,res){
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    }

    static async getUsuarioById(req,res){
        const id = parseInt(req.params.id)
        const usuario = await Usuario.findByPk(id)

        if(!usuario){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        res.json(usuario)
    }

    static async destroyUsuario(req,res){
        const id = parseInt(req.params.id)
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Usuario.destroy({where: {id: usuario.id}})
        res.json({message: "Removido com sucesso!"})
    }    

    static async createUsuario(req,res){
        const {nome, email, telefone,tipo} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone || !tipo){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdUsuario = await Usuario.create({nome,email,telefone,tipo}) //req.body
        res.status(201).json(createdUsuario)
    }

    static async updateUsuario(req,res){
        const id = parseInt(req.params.id)
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        const {nome, email, telefone,tipo} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone || !tipo){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedUsuario = await Usuario.update({nome,email,telefone,tipo},{where: {id: usuario.id}})
        res.json(updatedUsuario)
    }
}

export default UsuarioController