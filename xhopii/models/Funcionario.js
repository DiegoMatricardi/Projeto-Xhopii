import FuncionarioModel from "./FuncionarioSchema.js";

class Funcionario{
    constructor(nome, sobrenome, cpf, dataNascimento, telefone, cargo, salario, email, senha, fotoPerfil){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.cpf = cpf,
        this.dataNascimento = dataNascimento,
        this.telefone = telefone,
        this.cargo = cargo,
        this.salario = salario,
        this.email = email,
        this.senha = senha, 
        this.fotoPerfil = fotoPerfil
    }

    async save() {
        const funcionarioDoc = new FuncionarioModel({
            nome: this.nome,
            sobrenome: this.sobrenome,
            cpf: this.cpf,
            dataNascimento: new Date(this.dataNascimento), 
            telefone: this.telefone,
            cargo: this.cargo,
            salario: this.salario,
            email: this.email,
            senha: this.senha,
            fotoPerfil: this.fotoPerfil
        });
        return await funcionarioDoc.save();
    }

    static async findAll(){
        return await FuncionarioModel.find();
    }

    static async findById(id){
        return await FuncionarioModel.findById(id);
    }

    static async update(id, dados) {
        return await FuncionarioModel.findByIdAndUpdate(id, dados, { new: true });
    }

    static async delete(id) {
        return await FuncionarioModel.findByIdAndDelete(id);
    }
}

export default Funcionario;