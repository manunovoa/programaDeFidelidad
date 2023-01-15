import { DataTypes } from "sequelize";
import conexionDataBase from "../database/conexionDataBase.js";

const TipoDocumento = conexionDataBase.define('tipoDocumento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoDocumento: {
        type: DataTypes.STRING(20),

    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
});

export default TipoDocumento