import express from "express";
import mostrarPaises from "../controllers/ControllerPais.js";

const paisRouter = express.Router();

paisRouter.get('/', mostrarPaises)

export default paisRouter