import * as exemplarService from "../services/exemplarService.js";

// GET /exemplares
export function listarExemplares(req, res) {

    const exemplares =
        exemplarService.listarExemplares();

    res.status(200).json(exemplares);
}

// GET /exemplares/disponiveis
export function listarDisponiveis(req, res) {

    const exemplaresDisponiveis =
        exemplarService.listarDisponiveis();

    if (exemplaresDisponiveis.length === 0) {

        return res.status(200).json({
            mensagem:
                "Nenhum exemplar disponível no momento"
        });
    }

    res.status(200).json(
        exemplaresDisponiveis
    );
}

// POST /exemplar
export function criarExemplar(req, res) {

    const novoExemplar =
        exemplarService.criarExemplar(
            req.body
        );

    res.status(201).json(
        novoExemplar
    );
}

// PATCH /exemplar/:id
export function atualizarExemplar(
    req,
    res
) {

    const id =
        Number(req.params.id);

    const exemplarAtualizado =
        exemplarService.atualizarExemplar(
            id,
            req.body
        );

    if (!exemplarAtualizado) {

        return res.status(404).json({
            erro: "Exemplar não encontrado"
        });
    }

    res.status(200).json({
        mensagem:
            "Exemplar atualizado com sucesso",

        exemplar:
            exemplarAtualizado
    });
}

// DELETE /exemplar/:id
export function deletarExemplar(
    req,
    res
) {

    const id =
        Number(req.params.id);

    const resultado =
        exemplarService.deletarExemplar(
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
            "Exemplar excluído com sucesso",

        exemplarRemovido:
            resultado.exemplarRemovido
    });
}