# 🗂️ Sistema de Cadastro Web (CRUD)

Este projeto é um **sistema web simples de cadastro** desenvolvido como atividade acadêmica.  
Ele permite **cadastrar, listar, editar e excluir** informações de:

- 🛒 **Produtos**
- 👤 **Clientes**
- 📍 **Endereços**
- 👔 **Funcionários**

---

## ⚙️ Funcionalidades

- **Cadastrar** novos registros
- **Exibir/Listar** todos os registros
- **Editar** registros existentes
- **Excluir** registros
- Interface simples com **HTML, CSS e EJS**
- Persistência de dados com **MongoDB**

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript, EJS  
- **Backend:** Node.js, Express.js  
- **Banco de Dados:** MongoDB  
- **Controle de versão:** GitHub  

---

### 🔎 Explicação das Pastas

- **assets/** → Onde ficam os arquivos estáticos do frontend, como CSS, JS e imagens.  
- **config/** → Contém arquivos de configuração, como conexão com o banco ou parâmetros globais.  
- **controllers/** → Funções que recebem as requisições e retornam respostas. Aqui fica a lógica principal do CRUD.  
- **middlewares/** → Funções que interceptam requisições antes de chegar ao controller (ex: autenticação, validação, logs).  
- **models/** → Modelos do banco de dados, definidos com **Mongoose**. Cada entidade (Produto, Cliente, etc.) tem seu schema aqui.  
- **routes/** → Define as rotas do sistema (`/produtos`, `/clientes`, etc.) e chama os controllers correspondentes.  
- **utils/** → Funções auxiliares (exemplo: formatação de datas, geração de IDs).  
- **views/** → Páginas renderizadas com **EJS**, que integram HTML com dados vindos do backend.  

---

## 🚀 Como Executar o Projeto

### 1️⃣ Pré-requisitos
- [Node.js](https://nodejs.org/) instalado  
- [MongoDB](https://www.mongodb.com/) instalado localmente ou no [MongoDB Atlas](https://www.mongodb.com/atlas)  

### 2️⃣ Instalar dependências
```bash
npm install

## 📂 Estrutura do Projeto

