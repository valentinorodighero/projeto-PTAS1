import { Router } from "express";

import {
    listarLivros,
    buscarLivroPorId,
    buscarDetalhesLivro,
    buscarDisponibilidadeLivro,
    criarLivro,
    atualizarLivro,
    deletarLivro
} from "../controllers/livroController.js";

import {
    autenticar
} from "../middlewares/autenticar.js";

import {
    validarLivro
} from "../middlewares/validarLivro.js";

import {
    registrarLog
} from "../middlewares/registrarLog.js";

const router = Router();

// GET /livro
router.get(
    "/",
    listarLivros
);

// GET /livro/:id
router.get(
    "/:id",
    buscarLivroPorId
);

// GET /livro/:id/detalhes
router.get(
    "/:id/detalhes",
    buscarDetalhesLivro
);

// GET /livro/:id/disponibilidade
router.get(
    "/:id/disponibilidade",
    buscarDisponibilidadeLivro
);

// POST /livro
router.post(
    "/",
    autenticar,
    validarLivro,
    registrarLog,
    criarLivro
);

// PATCH /livro/:id
router.patch(
    "/:id",
    autenticar,
    registrarLog,
    atualizarLivro
);

// DELETE /livro/:id
router.delete(
    "/:id",
    autenticar,
    registrarLog,
    deletarLivro
);

export default router;