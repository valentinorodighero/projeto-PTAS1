import * as emprestimoService from "../services/emprestimoService.js";

// GET /emprestimos
export function listarEmprestimos(req, res) {

    const emprestimos =
        emprestimoService.listarEmprestimos();

    res.status(200).json(emprestimos);
}

// GET /emprestimos/leitor/:id
export function buscarEmprestimosLeitor(
    req,
    res
) {

    const id =
        Number(req.params.id);

    const resultado =
        emprestimoService.buscarEmprestimosLeitor(
            id
        );

    if (resultado.erro) {

        return res.status(
            resultado.status
        ).json({
            erro: resultado.erro
        });
    }

    res.status(200).json(
        resultado.emprestimos
    );
}

// GET /emprestimos/pendentes
export function listarPendentes(
    req,
    res
) {

    const pendentes =
        emprestimoService.listarPendentes();

    res.status(200).json(
        pendentes
    );
}

// POST /emprestimo
export function criarEmprestimo(
    req,
    res
) {

    const {
        leitor_id,
        exemplar_id
    } = req.body;

    const resultado =
        emprestimoService.criarEmprestimo(
            leitor_id,
            exemplar_id
        );

    if (!resultado.sucesso) {

        return res.status(
            resultado.status
        ).json({
            erro: resultado.erro,
            multaGerada:
                resultado.multaGerada,
            multaTotal:
                resultado.multaTotal
        });
    }

    res.status(201).json(
        resultado.emprestimo
    );
}

// PATCH /emprestimos/:id/devolver
export function devolverEmprestimo(
    req,
    res
) {

    const id =
        Number(req.params.id);

    const resultado =
        emprestimoService.devolverEmprestimo(
            id
        );

    if (!resultado.sucesso) {

        return res.status(
            resultado.status
        ).json({
            erro: resultado.erro
        });
    }

    res.status(200).json({
        mensagem:
            "Empréstimo devolvido com sucesso",

        emprestimo:
            resultado.emprestimo
    });
}