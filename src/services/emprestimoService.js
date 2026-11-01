import {
    Emprestimos,
    Exemplar,
    Livro,
    leitores
} from "./data.js";

// GET /emprestimos
export function listarEmprestimos() {
    return Emprestimos;
}

// GET /emprestimos/leitor/:id
export function buscarEmprestimosLeitor(id) {

    const leitor = leitores.find(
        i => i.id === id
    );

    if (!leitor) {
        return {
            status: 404,
            erro: "Leitor não encontrado"
        };
    }

    const emprestimos = Emprestimos.filter(
        i => i.leitor_id === id
    );

    return {
        emprestimos
    };
}

// GET /emprestimos/pendentes
export function listarPendentes() {

    return Emprestimos.filter(
        i => i.status === "em andamento"
    );
}

// Validação completa do empréstimo
export function validarEmprestimo(
    leitor_id,
    exemplar_id
) {

    const exemplar = Exemplar.find(
        i => i.id === Number(exemplar_id)
    );

    if (!exemplar) {
        return {
            status: 404,
            erro: "Exemplar não encontrado"
        };
    }

    if (
        exemplar.status !== "disponível"
    ) {
        return {
            status: 400,
            erro:
                "Exemplar não disponível para empréstimo"
        };
    }

    const livro = Livro.find(
        i => i.id === exemplar.livro_id
    );

    if (
        livro &&
        livro.tipo === "enciclopédia"
    ) {
        return {
            status: 400,
            erro:
                "Enciclopédias não podem ser emprestadas"
        };
    }

    const leitor = leitores.find(
        i => i.id === Number(leitor_id)
    );

    if (!leitor) {
        return {
            status: 404,
            erro: "Leitor não encontrado"
        };
    }

    const emprestimosAtivos =
        Emprestimos.filter(
            i =>
                i.leitor_id === Number(leitor_id) &&
                i.status === "em andamento"
        );

    if (emprestimosAtivos.length >= 3) {
        return {
            status: 400,
            erro:
                "Você já atingiu o limite de livros alugados"
        };
    }

    if (leitor.multa > 0) {
        return {
            status: 400,
            erro:
                "Leitor com multa em aberto"
        };
    }

    return {
        sucesso: true
    };
}

// Verifica atrasos e gera multa
export function verificarAtrasos(
    leitor_id
) {

    const leitor = leitores.find(
        i => i.id === Number(leitor_id)
    );

    if (!leitor) {
        return {
            status: 404,
            erro: "Leitor não encontrado"
        };
    }

    const hoje = new Date();

    const emprestimoAtrasado =
        Emprestimos.find(
            i =>
                i.leitor_id === Number(leitor_id) &&
                i.status === "em andamento" &&
                hoje > new Date(i.data_devolucao)
        );

    if (emprestimoAtrasado) {

        const multa = 15;

        leitor.multa += multa;

        return {
            status: 400,
            erro:
                "Você possui empréstimos atrasados",
            multaGerada: multa,
            multaTotal: leitor.multa
        };
    }

    return {
        sucesso: true
    };
}

// POST /emprestimo
export function criarEmprestimo(
    leitor_id,
    exemplar_id
) {

    const validacao =
        validarEmprestimo(
            leitor_id,
            exemplar_id
        );

    if (!validacao.sucesso) {
        return validacao;
    }

    const atraso =
        verificarAtrasos(
            leitor_id
        );

    if (!atraso.sucesso) {
        return atraso;
    }

    const exemplar = Exemplar.find(
        i => i.id === Number(exemplar_id)
    );

    exemplar.status =
        "indisponível";

    const dataEmprestimo =
        new Date();

    const dataDevolucao =
        new Date(dataEmprestimo);

    dataDevolucao.setDate(
        dataDevolucao.getDate() + 7
    );

    const novoEmprestimo = {
        id:
            Math.max(
                ...Emprestimos.map(
                    i => i.id
                )
            ) + 1,

        leitor_id:
            Number(leitor_id),

        exemplar_id:
            Number(exemplar_id),

        data_emprestimo:
            dataEmprestimo
                .toISOString()
                .slice(0, 10),

        data_devolucao:
            dataDevolucao
                .toISOString()
                .slice(0, 10),

        status:
            "em andamento"
    };

    Emprestimos.push(
        novoEmprestimo
    );

    return {
        sucesso: true,
        emprestimo:
            novoEmprestimo
    };
}

// PATCH /emprestimos/:id/devolver
export function devolverEmprestimo(id) {

    const emprestimo =
        Emprestimos.find(
            i => i.id === id
        );

    if (!emprestimo) {
        return {
            status: 404,
            erro:
                "Empréstimo não encontrado"
        };
    }

    if (
        emprestimo.status ===
        "devolvido"
    ) {
        return {
            status: 400,
            erro:
                "Empréstimo já foi devolvido"
        };
    }

    emprestimo.status =
        "devolvido";

    const exemplar =
        Exemplar.find(
            i =>
                i.id ===
                emprestimo.exemplar_id
        );

    if (exemplar) {
        exemplar.status =
            "disponível";
    }

    return {
        sucesso: true,
        emprestimo
    };
}