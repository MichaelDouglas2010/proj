import Tarefa from "../models/Tarefa.js"

class TarefaController {
    static async list(req,res){
        const tarefas = await Tarefa.findAll()
        res.json(tarefas)
    }

    static async getTarefaById(req,res){
        const id = parseInt(req.params.id)
        const tarefa = await Tarefa.findByPk(id)

        if(!tarefa){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        res.json(tarefa)
    }

    static async destroyTarefa(req,res){
        const id = parseInt(req.params.id)
        const tarefa = await Tarefa.findByPk(id)
        if(!tarefa){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Tarefa.destroy({where: {id: tarefa.id}})
        res.json({message: "Removido com sucesso!"})
    }    

    static async createTarefa(req,res){
        const {nome, dataInicio, dataFim} = req.body // req.body.nome, req.body.email ...
        if(!nome || !dataInicio || !dataFim){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdTarefa = await Tarefa.create({nome,dataInicio,dataFim}) //req.body
        res.status(201).json(createdTarefa)
    }

    static async updateTarefa(req,res){
        const id = parseInt(req.params.id)
        const tarefa = await Tarefa.findByPk(id)
        if(!tarefa){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        const {nome, dataInicio, dataFim} = req.body // req.body.nome, req.body.email ...
        if(!nome || !dataInicio || !dataFim){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedTarefa = await Tarefa.update({nome,dataInicio,dataFim},{where: {id: tarefa.id}})
        res.json(updatedTarefa)
    }
}

export default TarefaController