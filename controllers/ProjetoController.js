import Projeto from "../models/Projeto.js"

class ProjetoController {
    static async list(req,res){
        const projetos = await Projeto.findAll()
        res.json(projetos)
    }

    static async getProjetoById(req,res){
        const id = parseInt(req.params.id)
        const projeto = await Projeto.findByPk(id)

        if(!projeto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        res.json(projeto)
    }

    static async destroyProjeto(req,res){
        const id = parseInt(req.params.id)
        const projeto = await Projeto.findByPk(id)
        if(!projeto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Projeto.destroy({where: {id: projeto.id}})
        res.json({message: "Removido com sucesso!"})
    }    

    static async createProjeto(req,res){
        const {nome,local} = req.body // req.body.nome, req.body.email ...
        if(!nome || !local){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdProjeto = await Projeto.create({nome,local}) //req.body
        res.status(201).json(createdProjeto)
    }

    static async updateProjeto(req,res){
        const id = parseInt(req.params.id)
        const projeto = await Projeto.findByPk(id)
        if(!projeto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        const {nome,local} = req.body // req.body.nome, req.body.email ...
        if(!nome ||!local){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedProjeto = await Projeto.update({nome,local},{where: {id: projeto.id}})
        res.json(updatedProjeto)
    }
}

export default ProjetoController