import Marca from "../models/modelMarca.js";

const mostrarMarcas = async(req, res)=>{
    try {
        const marcas = await Marca.findAll();
        res.json(marcas)
    } catch (error) {
        res.json({
            message: 'No se puede mostrar' + error 
        });
    }
};

export default mostrarMarcas