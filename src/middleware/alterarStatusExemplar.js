import { Exemplar } from "../services/data.js";

export function alterarStatusExemplar(
    req,
    res,
    next
) {

    const exemplarId =
        Number(req.body.exemplar_id);

    const exemplar = Exemplar.find(
        i => i.id === exemplarId
    );

    if (!exemplar) {
        return res.status(404).json({
            erro: "Exemplar não encontrado"
        });
    }

    exemplar.status = "indisponível";

    next();
}