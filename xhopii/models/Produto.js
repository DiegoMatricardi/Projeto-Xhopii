import ProdutoModel from "./ProdutoSchema.js";

class Produto{
    constructor(nome, fabricante, descricao, valor, quantidade, fotoProduto){
        this.nome = nome,
        this.fabricante = fabricante,
        this.descricao = descricao,
        this.valor = valor,
        this.quantidade = quantidade,
        this.fotoProduto = fotoProduto
    }

    async save(){
        const novoProduto = new ProdutoModel({
            nome: this.nome,
            fabricante: this.fabricante,
            descricao: this.descricao,
            valor: this.valor,
            quantidade: this.quantidade,
            fotoProduto: this.fotoProduto
        });
        return await novoProduto.save();
    }

    static async findAll(){
        return await ProdutoModel.find();
    }

    static async findById(id){
        return await ProdutoModel.findById(id);
    }

    static async update(id, dados) {
        return await ProdutoModel.findByIdAndUpdate(id, dados, { new: true });
    }

    static async delete(id) {
        return await ProdutoModel.findByIdAndDelete(id);
    } 
}
export default Produto;