import { Sequelize } from "sequelize"
import db from "../db.js"

const Projeto = db.define('projeto',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    local: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Projeto