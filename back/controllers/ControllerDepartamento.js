import Departamento from "../models/ModelDepartamento.js";

const mostrarDepartamentos = async(req, res)=>{
    try {
        const departamento = await Departamento.findAll();
        res.json(departamento)
    } catch (error) {
        res.json({
            message: 'No se puede mostrar' + error 
        });
    }
};

export default mostrarDepartamentos