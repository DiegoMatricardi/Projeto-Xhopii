import express from "express";
import path from "path";
import __dirname from "../utils/pathUtils.js"; 
import LoginController from "../controllers/loginController.js";

const router = express.Router();


router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

router.post("/login", LoginController.login);

router.get("/recuperar-senha", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'recuperar-senha.html'));
});

export default router;
