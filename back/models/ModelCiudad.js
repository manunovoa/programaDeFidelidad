import { DataTypes } from "sequelize";
import conexionDataBase from "../database/conexionDataBase.js";

const Ciudad = conexionDataBase.define('ciudades', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ciudad: {
        type: DataTypes.STRING(70),

    },
    idDepartamentos: {
        type: DataTypes.INTEGER,
        references: {
            model: 'departamento',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
});

export default Ciudad