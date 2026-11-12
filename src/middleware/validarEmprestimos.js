import {
    Livro,
    Exemplar,
    leitores,
    Emprestimos
} from "../services/data.js";

export function validarEmprestimo(req, res, next) {

    const {
        leitor_id,
        exemplar_id
    } = req.body;

    if (
        !leitor_id ||
        !exemplar_id ||
        !Number.isInteger(Number(leitor_id)) ||
        !Number.isInteger(Number(exemplar_id))
    ) {
        return res.status(400).json({
            erro: "Todos os campos são obrigatórios e devem ser números"
        });
    }

    const exemplar = Exemplar.find(
        i => i.id === Number(exemplar_id)
    );

    if (!exemplar) {
        return res.status(404).json({
            erro: "Exemplar não encontrado"
        });
    }

    if (exemplar.status !== "disponível") {
        return res.status(400).json({
            erro: "Exemplar não disponível para empréstimo"
        });
    }

    const livro = Livro.find(
        i => i.id === exemplar.livro_id
    );

    if (
        livro &&
        livro.tipo === "enciclopédia"
    ) {
        return res.status(400).json({
            erro: "Enciclopédias não podem ser emprestadas"
        });
    }

    const leitor = leitores.find(
        i => i.id === Number(leitor_id)
    );

    if (!leitor) {
        return res.status(404).json({
            erro: "Leitor não encontrado"
        });
    }

    const emprestimosAtivos =
        Emprestimos.filter(
            i =>
                i.leitor_id === Number(leitor_id) &&
                i.status === "em andamento"
        );

    if (emprestimosAtivos.length >= 3) {
        return res.status(400).json({
            erro: "Você já atingiu o limite de livros alugados"
        });
    }

    if (leitor.multa > 0) {
        return res.status(400).json({
            erro: "Leitor com multa em aberto"
        });
    }

    next();
}