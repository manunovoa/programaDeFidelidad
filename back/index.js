import express from "express";
import cors from "cors";
import conexionDataBase  from "./database/conexionDataBase.js";
import clienteRouter from "./routes/RouterCliente.js";
import marcaRouter from "./routes/RouterMarca.js";
import tipoDocumentoRouter from "./routes/RouterTipoDocumento.js";
import paisRouter from "./routes/RouterPais.js";
import departamentoRouter from "./routes/RouterDepartamento.js";
import ciudadRouter from "./routes/RouterCiudad.js";

const app = express();
const port = 3100

try {
    await conexionDataBase.authenticate()
    console.log('Conexion exitosa a la base de datos')
}catch (error){
    console.log('Conexion no exitosa a la base de datos '+ error)
}

app.use(cors());
app.use(express.json());
app.use('/clientes', clienteRouter);
app.use('/marcas', marcaRouter);
app.use('/tipoDocumentos', tipoDocumentoRouter);
app.use('/paises', paisRouter);
app.use('/departamentos', departamentoRouter);
app.use('/ciudades', ciudadRouter);


app.listen(port, ()=>{
    console.log('Servidor corriendo en el puerto ' + port)
    console.log('Servidor funcionando en http://localhost:3100')
});