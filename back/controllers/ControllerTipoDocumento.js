import TipoDocumento from "../models/ModelTipoDocumento.js";

const mostrarDocumento = async(req, res)=>{
    try {
        const tipoDocumento = await TipoDocumento.findAll();
        res.json(tipoDocumento)
    } catch (error) {
        res.json({
            message: 'No se puede mostrar' + error 
        });
    }
};

export default mostrarDocumento