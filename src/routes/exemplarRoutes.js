import { Router } from "express";

import {
    listarExemplares,
    listarDisponiveis,
    criarExemplar,
    atualizarExemplar,
    deletarExemplar
} from "../controllers/exemplarController.js";

import {
    autenticar
} from "../middlewares/autenticar.js";

import {
    validarExemplar
} from "../middlewares/validarExemplar.js";

import {
    registrarLog
} from "../middlewares/registrarLog.js";

const router = Router();

// GET /exemplares
router.get(
    "/",
    listarExemplares
);

// GET /exemplares/disponiveis
router.get(
    "/disponiveis",
    listarDisponiveis
);

// POST /exemplares
router.post(
    "/",
    autenticar,
    validarExemplar,
    registrarLog,
    criarExemplar
);

// PATCH /exemplares/:id
router.patch(
    "/:id",
    autenticar,
    registrarLog,
    atualizarExemplar
);

// DELETE /exemplares/:id
router.delete(
    "/:id",
    autenticar,
    registrarLog,
    deletarExemplar
);

export default router;