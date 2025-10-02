import mongoose from 'mongoose';

const enderecoSchema = new mongoose.Schema({
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    cep: { type: String, required: true }
}, { timestamps: true });

const Endereco = mongoose.model('Endereco', enderecoSchema);

export default Endereco;
