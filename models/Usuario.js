import { Sequelize } from "sequelize"
import db from "../db.js"

const Usuario = db.define('usuario',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

export default Usuario