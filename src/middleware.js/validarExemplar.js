export function validarExemplar(req, res, next) {

    const {
        livro_id,
        edicao_id,
        status,
        DatAdqui,
        loc,
        COD
    } = req.body;

    if (
        !livro_id ||
        !edicao_id ||
        !status ||
        !DatAdqui ||
        !loc ||
        !COD ||

        !Number.isInteger(Number(livro_id)) ||
        !Number.isInteger(Number(edicao_id)) ||

        status.trim() === "" ||
        DatAdqui.trim() === "" ||
        loc.trim() === "" ||
        COD.trim() === ""
    ) {
        return res.status(400).json({
            erro: "Todos os campos são obrigatórios e não podem estar vazios"
        });
    }

    next();
}