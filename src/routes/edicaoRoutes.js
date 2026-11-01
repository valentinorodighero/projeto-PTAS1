import { Router } from "express";

import {
    listarEdicoes,
    buscarEdicaoPorISBN,
    criarEdicao,
    deletarEdicao
} from "../controllers/edicaoController.js";

import {
    autenticar
} from "../middlewares/autenticar.js";

import {
    validarEdicao
} from "../middlewares/validarEdicao.js";

import {
    registrarLog
} from "../middlewares/registrarLog.js";

const router = Router();

// GET /edicoes
router.get(
    "/",
    listarEdicoes
);

// GET /edicoes/isbn/:isbn
router.get(
    "/isbn/:isbn",
    buscarEdicaoPorISBN
);

// POST /edicoes
router.post(
    "/",
    autenticar,
    validarEdicao,
    registrarLog,
    criarEdicao
);

// DELETE /edicoes/:id
router.delete(
    "/:id",
    autenticar,
    registrarLog,
    deletarEdicao
);

export default router;