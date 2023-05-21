import express from 'express'
import UsuarioRouter from './routes/UsuarioRoutes.js'
import db from './db.js'

const app = express()
app.use(express.json())

db.sync(() => console.log('Banco de dados preparado'))

// npm i --save-dev nodemon
// "dev": "npx nodemon index.js"

app.use('/usuarios',UsuarioRouter)
const port = process.env.PORT || 3000
app.listen(port, () => {console.log('API Rodando na porta 3000!')})

