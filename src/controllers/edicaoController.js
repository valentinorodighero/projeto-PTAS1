import * as edicaoService from "../services/edicaoService.js";

// GET /edicoes
export function listarEdicoes(req, res) {

    const edicoes =
        edicaoService.listarEdicoes();

    res.status(200).json(edicoes);
}

// GET /edicoes/isbn/:isbn
export function buscarEdicaoPorISBN(
    req,
    res
) {

    const isbn = req.params.isbn;

    const edicao =
        edicaoService.buscarEdicaoPorISBN(
            isbn
        );

    if (!edicao) {
        return res.status(404).json({
            erro: "ISBN não encontrado"
        });
    }

    res.status(200).json(edicao);
}

// POST /edicao
export function criarEdicao(req, res) {

    const novaEdicao =
        edicaoService.criarEdicao(
            req.body
        );

    res.status(201).json(novaEdicao);
}

// DELETE /edicao/:id
export function deletarEdicao(req, res) {

    const id =
        Number(req.params.id);

    const resultado =
        edicaoService.deletarEdicao(id);

    if (resultado.erro) {

        return res.status(
            resultado.status
        ).json({
            erro: resultado.erro
        });
    }

    res.status(200).json({
        mensagem:
            "Edição excluída com sucesso",

        edicaoRemovida:
            resultado.edicaoRemovida
    });
}