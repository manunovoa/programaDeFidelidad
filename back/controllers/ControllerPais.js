import Pais from "../models/ModelPais.js";

const mostrarPaises = async(req, res)=>{
    try {
        const pais = await Pais.findAll();
        res.json(pais)
    } catch (error) {
        res.json({
            message: 'No se puede mostrar' + error 
        });
    }
};

export default mostrarPaises