import express from 'express'
import TarefaController from '../controllers/TarefaController.js'

const TarefaRouter = express.Router()

TarefaRouter.get('/',TarefaController.list)
TarefaRouter.post('/',TarefaController.createTarefa)
TarefaRouter.get('/:id',TarefaController.getTarefaById)
TarefaRouter.delete('/:id',TarefaController.destroyTarefa)
TarefaRouter.put('/:id',TarefaController.updateTarefa)

export default TarefaRouter