import { Sequelize } from "sequelize"
import db from "../db.js"

const Tarefa = db.define('tarefa',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataInicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dataFim: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

export default Tarefa