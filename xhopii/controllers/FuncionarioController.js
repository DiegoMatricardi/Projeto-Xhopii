import path from "path";
import __dirname from "../utils/pathUtils.js";
import Funcionario from "../models/Funcionario.js";

class FuncionarioController{
    static async getAllFuncionarios(req, res){
        try{
            const funcionarios = await Funcionario.findAll();
            res.json(funcionarios)
        }catch(error){
            console.log('Erro ao trazer todos os funcionarios!');
            res.status(500).json({message: 'Erro interno ao buscar funcionarios!'})
        }
    }

    static async getById(req, res){
        try{
            const {id} = req.params;
            const funcionarioExiste = await Funcionario.findById(id);
            if(!funcionarioExiste){
                return res.status(404).json({message: 'Funcionario não encontrado!'})
            }
            res.json(funcionarioExiste);
        }catch(error){
            console.log('Erro ao buscar funcionario!');
            res.status(500).json({message: 'Erro interno ao busca o funcionario'});
        }
    }

    static async createFuncionario(req, res) {
        try {
            const nome = req.body.inputNomeFunc;
            const sobrenome = req.body.inputSobrenomeFunc;
            const cpf = req.body.inputCPFFunc;
            const dataNascimento = req.body.inputDataNascFunc;
            const telefone = req.body.inputTelefoneFunc;
            const cargo = req.body.inputCargoFunc;
            const salario = req.body.inputSalarioFunc;
            const email = req.body.inputEmailFunc;
            const senha = req.body.inputSenha;

            let fotoPerfil = null;

            const novoFuncionario = new Funcionario(
                nome,
                sobrenome,
                cpf,
                dataNascimento,
                telefone,
                cargo,
                salario,
                email,
                senha,
                fotoPerfil
            );

            const funcionarioSalvo = await novoFuncionario.save();

            res.redirect('/funcionario/cadastrar');

        } catch (error) {
            console.error('Erro ao cadastrar o funcionario!', error);
            res.status(500).json({ message: 'Erro interno ao cadastrar o funcionario!' });
        }
    }


    static async updateFuncionario(req, res){
        try{
            const { id } = req.params;

            const dados = {
                nome: req.body.nome || null,
                sobrenome: req.body.sobrenome || null,
                cpf: req.body.cpf || null,
                dataNascimento: req.body.dataNascimento || null,
                telefone: req.body.telefone || null,
                cargo: req.body.cargo || null,
                salario: req.body.salario || null,
                email: req.body.email || null
            };

            if(req.body.senha && req.body.senha.trim() !== '') {
                dados.senha = req.body.senha;
            }

            if(req.file) {
                dados.fotoPerfil = '/uploads/' + req.file.filename;
            }

            const funcionarioAtualizado = await Funcionario.update(id, dados, { new: true });

            if(!funcionarioAtualizado){
                return res.status(404).send('Funcionario não encontrado!');
            }

            res.redirect('/funcionarios/exibir');

        }catch(error){
            console.log('Erro ao atualizar funcionario!', error);
            res.status(500).send('Erro interno ao atualizar funcionario');
        }
    }


    static async deleteFuncionarioRedirect(req, res) {
        try {
            const { id } = req.params;
            await Funcionario.delete(id);
            res.redirect('/funcionarios/exibir'); 
        } catch (error) {
            console.error('Erro ao deletar funcionário:', error);
            res.status(500).send('Erro interno');
        }
    }


    static async renderCreateFuncionario(req, res){
        try {
            res.sendFile(path.join(__dirname, 'views', 'cadastrar-funcionario.html'));
        } catch (error) {
            console.error('Erro ao carregar a página:', error);
            res.status(500).send('Erro interno');
        }
    }

    static async renderViewFuncionarios(req, res) {
        try {
            const funcionarios = await Funcionario.findAll();
            res.render("visualizar-funcionario", { funcionarios });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao carregar funcionários");
        }
    }

    static async renderEditFuncionario(req, res) {
        try {
            const funcionario = await Funcionario.findById(req.params.id);
            if(!funcionario) {
                return res.status(404).send('Funcionário não encontrado');
            }
            res.render('editar-funcionario', { funcionario });
        } catch (error) {
            console.error('Erro ao carregar página de edição:', error);
            res.status(500).send('Erro interno');
        }
    }

}

export default FuncionarioController;