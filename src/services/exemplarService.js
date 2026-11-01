import { Exemplar } from "./data.js";

export function listarExemplares() {
    return Exemplar;
}

export function listarDisponiveis() {

    return Exemplar.filter(
        i => i.status === "disponível"
    );
}

export function criarExemplar(dados) {

    const novoExemplar = {
        id:
            Math.max(
                ...Exemplar.map(i => i.id)
            ) + 1,

        livro_id:
            Number(dados.livro_id),

        edicao_id:
            Number(dados.edicao_id),

        status: dados.status,
        DatAdqui: dados.DatAdqui,
        loc: dados.loc,
        COD: dados.COD
    };

    Exemplar.push(novoExemplar);

    return novoExemplar;
}

export function atualizarExemplar(id, dados) {

    const exemplar = Exemplar.find(
        i => i.id === id
    );

    if (!exemplar) return null;

    if (dados.status)
        exemplar.status = dados.status;

    if (dados.loc)
        exemplar.loc = dados.loc;

    return exemplar;
}

export function deletarExemplar(id) {

    const index =
        Exemplar.findIndex(
            i => i.id === id
        );

    if (index === -1) {
        return {
            status: 404,
            erro: "Exemplar não encontrado"
        };
    }

    const exemplarRemovido =
        Exemplar[index];

    Exemplar.splice(index, 1);

    return {
        exemplarRemovido
    };
}