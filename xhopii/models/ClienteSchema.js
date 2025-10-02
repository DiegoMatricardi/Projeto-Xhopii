import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true, trim: true},
        sobrenome: {type: String, required: true, trim: true},
        cpf: {type: String, required: true, unique: true, trim: true},
        dataNascimento: {type: Date, required: true},
        telefone: {type: String, required: true, trim: true},
        email: {type: String, required: true, unique:true, lowercase: true, trim: true},
        senha: {type: String, required: true},
        fotoPerfil: {type: String},
    },
    {
        timestamps: true, 
    }
)

const ClienteModel = mongoose.model('Cliente', ClienteSchema);

export default ClienteModel;