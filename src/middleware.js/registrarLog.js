export function registrarLog(req, res, next) {

    console.log(
        `${new Date().toISOString()} - ${req.method} ${req.originalUrl}`,
        "Autenticação e validação conferidas"
    );

    next();
}