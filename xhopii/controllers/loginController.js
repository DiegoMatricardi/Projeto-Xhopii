import ClienteModel from "../models/Cliente.js"

class LoginController{
    static async login(req, res){
        const { inputEmailLog, inputSenhaLog } = req.body;
        try{
            const cliente = await ClienteModel.findOne({email: inputEmailLog})
            if(!cliente){
                return res.status(404).send("Email não encontrado");
            }

            if(cliente.senha !== inputSenhaLog){
                return res.status(401).send("Senha incorreta");
            }
            res.redirect("/home");
        }catch(error){
            console.error(error);
            res.status(500).send("Erro interno do servidor");
        }
    }
}

export default LoginController;