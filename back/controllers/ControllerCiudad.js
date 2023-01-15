import Ciudad from "../models/ModelCiudad.js";

const mostrarCiudades = async(req, res)=>{
    try {
        const ciudad = await Ciudad.findAll();
        res.json(ciudad)
    } catch (error) {
        res.json({
            message: 'No se puede mostrar' + error 
        });
    }
};

export default mostrarCiudades