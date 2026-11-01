export function validarLivro(req, res, next) {

    const {
        titulo,
        autor,
        Ano_lancamento,
        genero,
        tipo
    } = req.body;

    if (
        typeof titulo !== "string" ||
        typeof autor !== "string" ||
        typeof genero !== "string" ||
        typeof tipo !== "string"
    ) {
        return res.status(400).json({
            erro: "Título, autor, gênero e tipo devem ser texto"
        });
    }

    if (
        !titulo.trim() ||
        !autor.trim() ||
        !genero.trim() ||
        !tipo.trim()
    ) {
        return res.status(400).json({
            erro: "Todos os campos são obrigatórios e não podem estar vazios"
        });
    }

    if (!Number.isInteger(Number(Ano_lancamento))) {
        return res.status(400).json({
            erro: "Ano_lancamento deve ser um número"
        });
    }

    next();
}