import express from "express";
import mostrarMarcas from "../controllers/ControllerMarca.js";

const marcaRouter = express.Router();

marcaRouter.get('/', mostrarMarcas)

export default marcaRouter