import express from 'express';
import path from 'path';
import __dirname from './utils/pathUtils.js';
import dotenv from 'dotenv';
import {
    staticMiddleware,
    urlencodedMiddleware, jsonMiddleware,
    securityMiddleware, compressionMiddleware,
    rateLimitMiddleware, morganMiddleware
}from "./middlewares/middlewares.js";
import clienteRoutes from './routes/clienteRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import funcionarioRoutes from './routes/funcionarioRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import enderecoRoutes from './routes/enderecoRoutes.js'
import Database from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

Database.connect();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 


app.use(staticMiddleware);
app.use(urlencodedMiddleware);
app.use(jsonMiddleware);
app.use(securityMiddleware);
app.use(compressionMiddleware);
//app.use(rateLimitMiddleware);
app.use(morganMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(clienteRoutes);
app.use(produtoRoutes);
app.use(funcionarioRoutes);
app.use(loginRoutes);
app.use(enderecoRoutes);

app.get('/', (req, res) => {
    res.redirect('/login');
});


app.listen(port, () => {
    console.log(`Servidor ativo rodando na porta ${port}`)
});