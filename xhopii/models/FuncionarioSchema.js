import mongoose from "mongoose";

const FuncionarioSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true, trim: true },
        sobrenome: { type: String, required: true, trim: true },
        cpf: { type: String, required: true, unique: true, trim: true },
        dataNascimento: { type: Date, required: true },
        telefone: { type: String, required: true, trim: true },
        cargo: { type: String, required: true, trim: true },
        salario: { type: Number, required: true, min: 0 },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        senha: { type: String, required: true },
        fotoPerfil: { type: String }
    },
    {
        timestamps: true,
    }
);

const FuncionarioModel = mongoose.model('Funcionario', FuncionarioSchema);

export default FuncionarioModel;
