import ClienteModel from "./ClienteSchema.js";

class Cliente{
    constructor(nome, sobrenome, cpf, dataNascimento, telefone, email, senha, fotoPerfil){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.cpf = cpf,
        this.dataNascimento = dataNascimento,
        this.telefone = telefone,
        this.email = email,
        this.senha = senha, 
        this.fotoPerfil = fotoPerfil;
    }

    async save(){
        const novoCliente = new ClienteModel({
            nome: this.nome,
            sobrenome: this.sobrenome,
            cpf: this.cpf,
            dataNascimento: this.dataNascimento,
            telefone: this.telefone,
            email: this.email,
            senha: this.senha,
            fotoPerfil: this.fotoPerfil
        });
        return await novoCliente.save();
    }

    static async findAll(){
        return await ClienteModel.find();
    }

    static async findById(id){
        return await ClienteModel.findById(id);
    }

    static async update(id, dados) {
        return await ClienteModel.findByIdAndUpdate(id, dados, { new: true });
    }

    static async delete(id) {
        return await ClienteModel.findByIdAndDelete(id);
    } 

    static async findOne(filter) {
        return await ClienteModel.findOne(filter);
    }
}

export default Cliente;