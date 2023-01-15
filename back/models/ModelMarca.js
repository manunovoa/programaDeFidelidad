import { DataTypes } from "sequelize";
import conexionDataBase from "../database/conexionDataBase.js";

const Marca = conexionDataBase.define('marca', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING(50),
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,

    }
});

export default Marca