import path from "path";
import Endereco from '../models/Endereco.js';
import Cliente from '../models/Cliente.js';
import __dirname from "../utils/pathUtils.js";

class EnderecoController {
    static async getAllEnderecos(req, res) {
        try {
            const enderecos = await Endereco.find().populate('clienteId', 'nome sobrenome email');
            res.json(enderecos);
        } catch (error) {
            console.error('Erro ao buscar endereços:', error);
            res.status(500).json({ message: 'Erro interno ao buscar endereços' });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const endereco = await Endereco.findById(id).populate('clienteId', 'nome sobrenome email');
            if (!endereco) return res.status(404).json({ message: 'Endereço não encontrado' });
            res.json(endereco);
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
            res.status(500).json({ message: 'Erro interno ao buscar endereço' });
        }
    }

    static async createEndereco(req, res) {
        try {
            const { rua, numero, complemento, bairro, cidade, estado, cep } = req.body;

            const novoEndereco = new Endereco(
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                cep
            );
            const enderecoSalvo = await novoEndereco.save();

            res.redirect('/enderecos/cadastrar');
        } catch (error) {
            console.error('Erro ao cadastrar endereço:', error);
            res.status(500).json({ message: 'Erro interno ao cadastrar endereço' });
        }
    }


    static async updateEndereco(req, res) {
        try {
            const { id } = req.params;
            const { rua, numero, complemento, bairro, cidade, estado, cep } = req.body;

            const enderecoAtualizado = await Endereco.update(
                id,
                { rua, numero, complemento, bairro, cidade, estado, cep },
                { new: true, runValidators: true }
            );

            if (!enderecoAtualizado) {
                return res.status(404).send("Endereço não encontrado");
            }

            res.redirect("/enderecos");
        } catch (error) {
            console.error("Erro ao atualizar endereço:", error);
            res.status(500).send("Erro interno ao atualizar endereço");
        }
    }


    static async deleteEnderecoRedirect(req, res) {
        try {
            const { id } = req.params;
            await Endereco.delete(id);
            res.redirect('/enderecos'); 
        } catch (error) {
            console.error('Erro ao deletar endereço:', error);
            res.status(500).send('Erro interno');
        }
    }


    static async renderEnderecos(req, res) {
        try {
            const enderecos = await Endereco.find(); 
            res.render('visualizar-endereco', { enderecos });
        } catch (error) {
            console.error('Erro ao carregar página de endereços:', error);
            res.status(500).send('Erro interno');
        }
    }

    static async renderCreateEndereco(req, res){
        try {
            res.sendFile(path.join(__dirname, 'views', 'cadastrar-endereco.html'));
        } catch (error) {
            console.error('Erro ao carregar a página:', error);
            res.status(500).send('Erro interno');
        }
    }

    static async renderEditEndereco(req, res) {
        try {
            const { id } = req.params;
            const endereco = await Endereco.findById(id);
            if (!endereco) {
                return res.status(404).send("Endereço não encontrado");
            }
            res.render("editar-endereco", { endereco });
        } catch (error) {
            console.error("Erro ao carregar página de edição:", error);
            res.status(500).send("Erro interno");
        }
    }

}

export default EnderecoController;
