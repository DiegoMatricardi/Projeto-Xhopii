import path from "path";
import __dirname from "../utils/pathUtils.js";
import Cliente from "../models/Cliente.js";

class ClienteController{
    static async getAllClientes(req, res){
        try{
            const clientes = await Cliente.findAll();
            res.json(clientes)
        }catch(error){
            console.log('Erro ao trazer todos os clientes!');
            res.status(500).json({message: 'Erro interno ao buscar clientes'})
        }
    }

    static async getById(req, res){
        try{
            const {id} = req.params;
            const clienteExiste = await Cliente.findById(id);
            if(!clienteExiste){
                return res.status(404).json({message: 'Cliente não encontrado!'})
            }
            res.json(clienteExiste);
        }catch(error){
            console.log('Erro ao buscar cliente!');
            res.status(500).json({message: 'Erro interno ao busca o cliente'});
        }
    }

    static async createCliente(req, res){
      try{
            const { nome, sobrenome, cpf, dataNascimento, telefone, email, senha } = req.body;
            let fotoPerfil = null;
            if (req.file) {
                fotoPerfil = '/uploads/' + req.file.filename;
            }
            const novoCliente = new Cliente(
                nome,
                sobrenome,
                cpf,
                dataNascimento,
                telefone, 
                email,
                senha,
                fotoPerfil
            );
            const clienteSalvo = await novoCliente.save();
            res.redirect('/clientes/cadastrar');
        }catch(error){
            console.log('Erro ao cadastrar o cliente!');
            res.status(500).json({message: 'Erro interno ao cadastar o cliente!'});
        }
    }

    static async updateCliente(req, res){
        try{
            const {id} = req.params;
            const dados = req.body;
            const clienteAtualizado = await Cliente.update(id, dados);
            if(!clienteAtualizado){
                return res.status(404).json({message: 'cliente nao encontrado!'});
            }
            res.json(clienteAtualizado);
        }catch(error){
            console.log('Erro ao atualizar cliente!', error);
            res.status(500).json({ message: 'Erro interno ao atualizar cliente' });
        }
    }

    static async deleteClienteRedirect(req, res) {
        try {
            const { id } = req.params;
            await Cliente.delete(id); 
            res.redirect('/clientes/exibir'); 
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
            res.status(500).send('Erro interno');
        }
    }

    static async renderCreateCliente(req, res) {
        try {
            res.sendFile(path.join(__dirname, './views/cadastrar-cliente.html'));
        } catch (error) {
            console.error('Erro ao carregar a página:', error);
            res.status(500).send('Erro interno');
        }
    }

    static async renderCliente(req, res){
        try {
            const clientes = await Cliente.findAll();
            res.render('visualizar-cliente', {clientes});
        } catch (error) {
            console.error('Erro ao carregar a página:', error);
            res.status(500).send('Erro interno');
        }
    }

    static async renderEditCliente(req, res) {
        const cliente = await Cliente.findById(req.params.id);
        res.render('editar-cliente', { cliente });
    }
}

export default ClienteController;