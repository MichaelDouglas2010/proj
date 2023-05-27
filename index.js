import express from 'express'
import UsuarioRouter from './routes/UsuarioRoutes.js'
import ProjetoRouter from './routes/ProjetoRoutes.js'
import TarefaRouter from './routes/TarefaRoutes.js'
import cors from 'cors'
import db from './db.js'

const app = express()
app.use(express.json())

db.sync(() => console.log('Banco de dados preparado'))

app.use(cors())
app.use('/usuarios',UsuarioRouter)
app.use('/projetos',ProjetoRouter)
app.use('/tarefas',TarefaRouter)
const port = process.env.PORT || 3000
app.listen(port, () => {console.log('API Rodando na porta 3000!')})

