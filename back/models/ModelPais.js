import { DataTypes } from "sequelize";
import conexionDataBase from "../database/conexionDataBase.js";

const Pais = conexionDataBase.define('paises', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pais: {
        type: DataTypes.STRING(70),

    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
});

export default Pais