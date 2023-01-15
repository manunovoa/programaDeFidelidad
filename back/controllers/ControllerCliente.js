import Cliente from "../models/modelCliente.js";

const crearCliente = async(req, res)=>{
    try {
        await Cliente.create(req.body);
        res.json({
            message: "Cliente creado correctamente"
        })
    } catch (error) {
        res.json({
            message: "No se pudo registrar cliente " + error
        });
    }
};


export default crearCliente

