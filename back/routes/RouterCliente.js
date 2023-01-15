import express from "express";
import crearCliente from "../controllers/ControllerCliente.js";

const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente)

export default clienteRouter