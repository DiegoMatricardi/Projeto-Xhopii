import express from "express";
import ClienteController from "../controllers/ClienteController.js"

const router = express.Router();

router.get('/clientes/editar/:id', ClienteController.renderEditCliente);

router.get('/clientes/exibir', ClienteController.renderCliente);

router.get("/clientes/cadastrar", ClienteController.renderCreateCliente);

router.get('/clientes', ClienteController.getAllClientes);

router.get('/clientes/:id', ClienteController.getById);

router.post('/clientes', ClienteController.createCliente);

router.post('/clientes/editar/:id', ClienteController.updateCliente);

router.get('/clientes/delete/:id', ClienteController.deleteClienteRedirect);


export default router; 