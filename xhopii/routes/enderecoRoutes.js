import express from 'express';
import EnderecoController from '../controllers/EnderecoController.js';

const router = express.Router();

router.get('/enderecos/editar/:id', EnderecoController.renderEditEndereco); 
router.post('/enderecos/editar/:id', EnderecoController.updateEndereco);

router.get('/enderecos', EnderecoController.renderEnderecos);
router.get('/enderecos/cadastrar', EnderecoController.renderCreateEndereco);
router.get('/api/enderecos', EnderecoController.getAllEnderecos);
router.get('/api/enderecos/:id', EnderecoController.getById);
router.post('/api/enderecos', EnderecoController.createEndereco);
router.put('/api/enderecos/:id', EnderecoController.updateEndereco);
router.get('/enderecos/delete/:id', EnderecoController.deleteEnderecoRedirect);

export default router;
