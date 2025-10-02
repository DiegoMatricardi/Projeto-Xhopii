import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true, trim: true},
        fabricante: {type: String, required: true, trim: true}, 
        descricao: {type: String, required: true, trim: true},
        valor: {type: Number, required: true, min: 0},
        quantidade: {type: Number, required: true, min: 0},
        fotoProduto: {type: String},
    },
    {
        timestamps: true, 
    }
)

const ProdutoModel = mongoose.model('Produto', ProdutoSchema);

export default ProdutoModel;