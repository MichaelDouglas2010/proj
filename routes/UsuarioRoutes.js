import express from 'express'
import UsuarioController from '../controllers/UsuarioController.js'

const UsuarioRouter = express.Router()

UsuarioRouter.get('/',UsuarioController.list)
UsuarioRouter.post('/',UsuarioController.createUsuario)
UsuarioRouter.get('/:id',UsuarioController.getUsuarioById)
UsuarioRouter.delete('/:id',UsuarioController.destroyUsuario)
UsuarioRouter.put('/:id',UsuarioController.updateUsuario)

export default UsuarioRouter