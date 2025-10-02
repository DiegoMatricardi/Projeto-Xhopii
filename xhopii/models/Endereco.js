import EnderecoModel from "./EnderecoSchema.js";

class Endereco {
    constructor(rua, numero, complemento, bairro, cidade, estado, cep) {
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento || '';
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

    async save() {
        const novoEndereco = new EnderecoModel({
            rua: this.rua,
            numero: this.numero,
            complemento: this.complemento,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            cep: this.cep
        });
        return await novoEndereco.save();
    }

    static async findAll() {
        return await EnderecoModel.find(); 
    }

    static async findById(id) {
        return await EnderecoModel.findById(id);
    }

    static async update(id, dados) {
        return await EnderecoModel.findByIdAndUpdate(id, dados, { new: true });
    }

    static async delete(id) {
        return await EnderecoModel.findByIdAndDelete(id);
    }

    static async find(filter) {
        return await EnderecoModel.find(filter);
    }
}

export default Endereco;
