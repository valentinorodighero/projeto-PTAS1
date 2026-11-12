export function autenticar(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            erro: "Token não fornecido"
        });
    }

    if (token !== "Bearer biblioteca123") {
        return res.status(403).json({
            erro: "Token inválido"
        });
    }

    console.log(
        "Token válido, acesso permitido"
    );

    next();
}
