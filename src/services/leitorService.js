import { leitores } from "./data.js";

// GET /leitores
export function listarLeitores() {
    return leitores;
}

// GET /leitores/:id
export function buscarLeitorPorId(id) {

    return leitores.find(
        leitor => leitor.id === id
    );
}

// POST /leitores
export function criarLeitor(dados) {

    const novoLeitor = {
        id:
            Math.max(
                ...leitores.map(
                    leitor => leitor.id
                )
            ) + 1,

        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,

        // todo leitor novo começa sem multa
        multa: 0
    };

    leitores.push(novoLeitor);

    return novoLeitor;
}

// PUT /leitores/:id
export function atualizarLeitor(id, dados) {

    const leitor = leitores.find(
        leitor => leitor.id === id
    );

    if (!leitor) {
        return null;
    }

    leitor.nome = dados.nome;
    leitor.email = dados.email;
    leitor.telefone = dados.telefone;
    leitor.multa = dados.multa;

    return leitor;
}

// DELETE /leitores/:id
export function deletarLeitor(id) {

    const indice = leitores.findIndex(
        leitor => leitor.id === id
    );

    if (indice === -1) {
        return {
            status: 404,
            erro: "Leitor não encontrado"
        };
    }

    const leitorRemovido =
        leitores[indice];

    leitores.splice(indice, 1);

    return {
        leitorRemovido
    };
}