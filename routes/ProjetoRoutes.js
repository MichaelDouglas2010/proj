import express from 'express'
import ProjetoController from '../controllers/ProjetoController.js'

const ProjetoRouter = express.Router()

ProjetoRouter.get('/',ProjetoController.list)
ProjetoRouter.post('/',ProjetoController.createProjeto)
ProjetoRouter.get('/:id',ProjetoController.getProjetoById)
ProjetoRouter.delete('/:id',ProjetoController.destroyProjeto)
ProjetoRouter.put('/:id',ProjetoController.updateProjeto)

export default ProjetoRouter