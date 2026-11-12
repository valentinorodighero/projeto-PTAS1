import {
    leitores,
    Emprestimos
} from "../services/data.js";

export function checarDatas(
    req,
    res,
    next
) {

    const leitor_id =
        Number(req.body.leitor_id);

    const leitor = leitores.find(
        i => i.id === leitor_id
    );

    if (!leitor) {
        return res.status(404).json({
            erro: "Leitor não encontrado"
        });
    }

    const dataAtual = new Date();

    const emprestimosAtivos =
        Emprestimos.filter(
            i =>
                i.leitor_id === leitor_id &&
                i.status === "em andamento"
        );

    const emprestimoAtrasado =
        emprestimosAtivos.find(i => {

            const dataDevolucao =
                new Date(i.data_devolucao);

            return dataAtual > dataDevolucao;
        });

    if (emprestimoAtrasado) {

        const multa = 15;

        leitor.multa += multa;

        return res.status(400).json({
            erro:
                "Você possui empréstimos atrasados",
            multaGerada: multa,
            multaTotal: leitor.multa
        });
    }

    next();
}