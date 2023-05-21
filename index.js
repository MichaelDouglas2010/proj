import express from 'express'
import UsuarioRouter from './routes/UsuarioRoutes.js'
import ProjetoRouter from './routes/ProjetoRoutes.js'
import TarefaRouter from './routes/TarefaRoutes.js'
import db from './db.js'

const app = express()
app.use(express.json())

db.sync(() => console.log('Banco de dados preparado'))

// npm i --save-dev nodemon
// "dev": "npx nodemon index.js"

app.use('/usuarios',UsuarioRouter)
app.use('/projetos',ProjetoRouter)
app.use('/tarefas',TarefaRouter)
const port = process.env.PORT || 3000
app.listen(port, () => {console.log('API Rodando na porta 3000!')})

