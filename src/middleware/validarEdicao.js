export function validarEdicao(req, res, next) {

    const {
        livro_id,
        ISBN,
        editora,
        Datpub,
        idioma,
        edicao
    } = req.body;

    if (
        !livro_id ||
        !ISBN ||
        !editora ||
        !Datpub ||
        !idioma ||
        !edicao ||
        !Number.isInteger(Number(livro_id)) ||
        ISBN.trim() === "" ||
        editora.trim() === "" ||
        Datpub.trim() === "" ||
        idioma.trim() === "" ||
        edicao.trim() === ""
    ) {
        return res.status(400).json({
            erro: "Todos os campos são obrigatórios e não podem estar vazios"
        });
    }

    next();
}