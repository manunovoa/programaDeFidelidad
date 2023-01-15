import express from "express";
import mostrarDepartamentos from "../controllers/ControllerDepartamento.js";

const departamentoRouter = express.Router();

departamentoRouter.get('/', mostrarDepartamentos)

export default departamentoRouter