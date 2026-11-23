import { Router } from "express";

import {
  listarEmprestimos,
  buscarEmprestimosLeitor,
  listarPendentes,
  criarEmprestimo,
  devolverEmprestimo,
} from "../controllers/emprestimoController.js";

import { autenticar } from "../middleware/autenticar.js";

import { validarEmprestimo } from "../middleware/validarEmprestimos.js";

import { checarDatas } from "../middleware/checarDatas.js";

import { alterarStatusExemplar } from "../middleware/alterarStatusExemplar.js";

import { registrarLog } from "../middleware/registrarLog.js";

const router = Router();

// GET /emprestimos
router.get("/", listarEmprestimos);

// GET /emprestimos/leitor/:id
router.get("/leitor/:id", buscarEmprestimosLeitor);

// GET /emprestimos/pendentes
router.get("/pendentes", listarPendentes);

// POST /emprestimos
router.post(
  "/",
  autenticar,
  validarEmprestimo,
  checarDatas,
  alterarStatusExemplar,
  registrarLog,
  criarEmprestimo,
);

// PATCH /emprestimos/:id/devolver
router.patch("/:id/devolver", autenticar, registrarLog, devolverEmprestimo);

export default router;
