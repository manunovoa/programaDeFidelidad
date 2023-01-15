import express from "express";
import mostrarDocumento from "../controllers/ControllerTipoDocumento.js";

const tipoDocumentoRouter = express.Router();

tipoDocumentoRouter.get('/', mostrarDocumento)

export default tipoDocumentoRouter