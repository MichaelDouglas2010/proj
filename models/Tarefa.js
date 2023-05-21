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
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dataFim: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

export default Tarefa