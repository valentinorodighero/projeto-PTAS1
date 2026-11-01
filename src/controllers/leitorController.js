import * as leitorService from "../services/leitorService.js";

// GET /leitores
export function listarLeitores(req, res) {

    const leitores =
        leitorService.listarLeitores();

    res.status(200).json(leitores);
}

// GET /leitores/:id
export function buscarLeitorPorId(
    req,
    res
) {

    const id =
        Number(req.params.id);

    const leitor =
        leitorService.buscarLeitorPorId(
            id
        );

    if (!leitor) {

        return res.status(404).json({
            erro: "Leitor não encontrado"
        });
    }

    res.status(200).json(leitor);
}

// POST /leitores
export function criarLeitor(
    req,
    res
) {

    const novoLeitor =
        leitorService.criarLeitor(
            req.body
        );

    res.status(201).json(
        novoLeitor
    );
}

// PUT /leitores/:id
export function atualizarLeitor(
    req,
    res
) {

    const id =
        Number(req.params.id);

    const leitorAtualizado =
        leitorService.atualizarLeitor(
            id,
            req.body
        );

    if (!leitorAtualizado) {

        return res.status(404).json({
            erro: "Leitor não encontrado"
        });
    }

    res.status(200).json(
        leitorAtualizado
    );
}

// DELETE /leitores/:id
export function deletarLeitor(
    req,
    res
) {

    const id =
        Number(req.params.id);

    const resultado =
        leitorService.deletarLeitor(
            id
        );

    if (resultado.erro) {

        return res.status(
            resultado.status
        ).json({
            erro: resultado.erro
        });
    }

    res.status(200).json({
        mensagem:
            "Leitor removido com sucesso",

        leitorRemovido:
            resultado.leitorRemovido
    });
}