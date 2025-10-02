import path from "path";
import __dirname from "../utils/pathUtils.js";
import Produto from "../models/Produto.js";

class ProdutoController{
    static async getAllProdutos(req, res){
        try{
            const produtos = await Produto.findAll();
            res.json(produtos)
        }catch(error){
            console.log('Erro ao trazer todos os produtos!');
            res.status(500).json({message: 'Erro interno ao buscar produtos'})
        }
    }

    static async getById(req, res){
        try{
            const {id} = req.params;
            const produtoExiste = await Produto.findById(id);
            if(!produtoExiste){
                return res.status(404).json({message: 'Produto não encontrado!'})
            }
            res.json(produtoExiste);
        }catch(error){
            console.log('Erro ao buscar produto!');
            res.status(500).json({message: 'Erro interno ao busca o produto'});
        }
    }

    static async createProduto(req, res){
        try {
            const nome = req.body.inputNomeProd;
            const fabricante = req.body.inputFabricanteProd;
            const descricao = req.body.inputDescricaoProd;
            const valor = parseFloat(req.body.inputValorProd);
            const quantidade = parseInt(req.body.inputQtdProd);

            let fotoProduto = null;
            if (req.file) {
                fotoProduto = '/uploads/' + req.file.filename;
            }

            const novoProduto = new Produto(
                nome,
                fabricante,
                descricao,
                valor,
                quantidade,
                fotoProduto
            );

            const produtoSalvo = await novoProduto.save();

            res.redirect('/produto/cadastrar')

        } catch(error) {
            console.error('Erro ao cadastrar o produto!', error);
            res.status(500).json({ message: 'Erro interno ao cadastrar o produto!' });
        }
    }

    static async updateProduto(req, res) {
        try {
            const { id } = req.params;

            const dados = {
                nome: req.body.nome,
                fabricante: req.body.fabricante,
                descricao: req.body.descricao,
                valor: parseFloat(req.body.valor),
                quantidade: parseInt(req.body.quantidade)
            };

            const produtoAtualizado = await Produto.update(id, dados);

            if(!produtoAtualizado) {
                return res.status(404).send('Produto não encontrado');
            }

            res.redirect('/produtos/exibir');
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            res.status(500).send('Erro interno ao atualizar produto');
        }
    }

    static async deleteProdutoRedirect(req, res) {
        try {
            const { id } = req.params;
            await Produto.delete(id); 
            res.redirect('/produtos/exibir'); 
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            res.status(500).send('Erro interno');
        }
    }

    static async renderCreateProduto(req, res){
        try {
            res.sendFile(path.join(__dirname, 'views', 'cadastrar-produto.html'));
        } catch (error) {
            console.error('Erro ao carregar a página:', error);
            res.status(500).send('Erro interno');
        }
    }

    static async renderProdutos(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.render("visualizar-produto", { produtos });
        } catch (error) {
            console.error("Erro ao carregar página:", error);
            res.status(500).send("Erro interno");
        }
    }

    static async renderEditProduto(req, res) {
        try {
            const produto = await Produto.findById(req.params.id);
            if(!produto) {
                return res.status(404).send('Produto não encontrado');
            }
            res.render('editar-produto', { produto });
        } catch (error) {
            console.error('Erro ao carregar página de edição:', error);
            res.status(500).send('Erro interno');
        }
    }
}

export default ProdutoController;