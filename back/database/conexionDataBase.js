import { Sequelize } from "sequelize";

const conexionDataBase = new Sequelize('clientesfidelizacion', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
}); 

export default conexionDataBase