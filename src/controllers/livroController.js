import * as livroService from "../services/livroService.js";

// GET /livro
export function listarLivros(req, res) {

    const livros = livroService.listarLivros(
        req.query
    );

    res.status(200).json(livros);
}

// GET /livro/:id
export function buscarLivroPorId(req, res) {

    const id = Number(req.params.id);

    const livro =
        livroService.buscarLivroPorId(id);

    if (!livro) {
        return res.status(404).json({
            erro: "Livro não encontrado"
        });
    }

    res.status(200).json(livro);
}

// GET /livro/:id/detalhes
export function buscarDetalhesLivro(req, res) {

    const id = Number(req.params.id);

    const detalhes =
        livroService.buscarDetalhesLivro(id);

    if (!detalhes) {
        return res.status(404).json({
            erro: "Livro não encontrado"
        });
    }

    res.status(200).json(detalhes);
}

// GET /livro/:id/disponibilidade
export function buscarDisponibilidadeLivro(req, res) {

    const id = Number(req.params.id);

    const disponibilidade =
        livroService.buscarDisponibilidadeLivro(id);

    if (!disponibilidade) {
        return res.status(404).json({
            erro: "Livro não encontrado"
        });
    }

    res.status(200).json(disponibilidade);
}

// POST /livro
export function criarLivro(req, res) {

    const novoLivro =
        livroService.criarLivro(
            req.body
        );

    res.status(201).json(novoLivro);
}

// PATCH /livro/:id
export function atualizarLivro(req, res) {

    const id = Number(req.params.id);

    const livroAtualizado =
        livroService.atualizarLivro(
            id,
            req.body
        );

    if (!livroAtualizado) {
        return res.status(404).json({
            erro: "Livro não encontrado"
        });
    }

    res.status(200).json({
        mensagem:
            "Livro atualizado com sucesso",
        livro: livroAtualizado
    });
}

// DELETE /livro/:id
export function deletarLivro(req, res) {

    const id = Number(req.params.id);

    const resultado =
        livroService.deletarLivro(id);

    if (resultado.erro) {
        return res.status(
            resultado.status
        ).json({
            erro: resultado.erro
        });
    }

    res.status(200).json({
        mensagem:
            "Livro excluído com sucesso",
        livroRemovido:
            resultado.livroRemovido
    });
}