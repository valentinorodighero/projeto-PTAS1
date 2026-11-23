import { Router } from "express";

import {
  listarExemplares,
  listarDisponiveis,
  criarExemplar,
  atualizarExemplar,
  deletarExemplar,
} from "../controllers/exemplarController.js";

import { autenticar } from "../middleware/autenticar.js";

import { validarExemplar } from "../middleware/validarExemplar.js";

import { registrarLog } from "../middleware/registrarLog.js";

const router = Router();

// GET /exemplares
router.get("/", listarExemplares);

// GET /exemplares/disponiveis
router.get("/disponiveis", listarDisponiveis);

// POST /exemplares
router.post("/", autenticar, validarExemplar, registrarLog, criarExemplar);

// PATCH /exemplares/:id
router.patch("/:id", autenticar, registrarLog, atualizarExemplar);

// DELETE /exemplares/:id
router.delete("/:id", autenticar, registrarLog, deletarExemplar);

export default router;
