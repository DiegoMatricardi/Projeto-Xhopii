import express from "express";
import ProdutoController from "../controllers/ProdutoController.js";

const router = express.Router();

router.get('/produtos/editar/:id', ProdutoController.renderEditProduto);

router.get('/produtos/exibir', ProdutoController.renderProdutos)

router.get('/produto/cadastrar', ProdutoController.renderCreateProduto);

router.post('/produtos/cadastrar', ProdutoController.createProduto);

router.get('/produtos', ProdutoController.getAllProdutos);

router.get('/produtos/:id', ProdutoController.getById);

router.post('/produtos/editar/:id', ProdutoController.updateProduto);

router.get('/produtos/delete/:id', ProdutoController.deleteProdutoRedirect);


export default router;