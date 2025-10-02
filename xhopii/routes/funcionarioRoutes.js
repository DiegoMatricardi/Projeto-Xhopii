import express from "express";
import FuncionarioController from "../controllers/FuncionarioController.js";

const router = express.Router();

router.get('/funcionarios/exibir', FuncionarioController.renderViewFuncionarios);

router.get("/funcionarios/editar/:id", FuncionarioController.renderEditFuncionario);

router.get('/funcionario/cadastrar', FuncionarioController.renderCreateFuncionario);

router.post('/funcionario/cadastrar', FuncionarioController.createFuncionario);

router.get('/funcionarios', FuncionarioController.getAllFuncionarios);

router.get('/funcionarios/:id', FuncionarioController.getById);

router.post('/funcionarios', FuncionarioController.createFuncionario);

router.post('/funcionarios/editar/:id', FuncionarioController.updateFuncionario);

router.get('/funcionarios/delete/:id', FuncionarioController.deleteFuncionarioRedirect);


export default router;