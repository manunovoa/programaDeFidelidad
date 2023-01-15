import { DataTypes } from "sequelize";
import conexionDataBase from "../database/conexionDataBase.js";

const Departamento = conexionDataBase.define('departamentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departamento: {
        type: DataTypes.STRING(60),

    },
    idPaises: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pais',
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

export default Departamento