import { DataTypes } from "sequelize";
import conexionDataBase from "../database/conexionDataBase.js";

const Cliente = conexionDataBase.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    documento:{
        type: DataTypes.STRING(11)
    },
    nombre:{
        type: DataTypes.STRING(50)
    },
    apellido: {
        type: DataTypes.STRING(50)
    },
    fechaNacimiento: {
        type: DataTypes.DATE
    },
    direccion: {
        type: DataTypes.STRING(200)
    },
    idTipoDocumento: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tipoDocumento',
            key: 'id'
        }
    },
    idMarca: {
        type: DataTypes.INTEGER,
        references: {
            model: 'marca',
            key: 'id'
        }
    },
    idPaises: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paises',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
})

export default Cliente