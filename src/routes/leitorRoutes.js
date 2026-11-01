import { Router } from "express";

import {
    listarLeitores,
    buscarLeitorPorId,
    criarLeitor,
    atualizarLeitor,
    deletarLeitor
} from "../controllers/leitorController.js";

import {
    autenticar
} from "../middlewares/autenticar.js";

import {
    registrarLog
} from "../middlewares/registrarLog.js";

const router = Router();

// GET /leitores
router.get(
    "/",
    listarLeitores
);

// GET /leitores/:id
router.get(
    "/:id",
    buscarLeitorPorId
);

// POST /leitores
router.post(
    "/",
    autenticar,
    registrarLog,
    criarLeitor
);

// PUT /leitores/:id
router.put(
    "/:id",
    autenticar,
    registrarLog,
    atualizarLeitor
);

// DELETE /leitores/:id
router.delete(
    "/:id",
    autenticar,
    registrarLog,
    deletarLeitor
);

export default router;