import { Edicao, Exemplar } from "./data.js";

export function listarEdicoes() {
    return Edicao;
}

export function buscarEdicaoPorISBN(isbn) {

    return Edicao.find(
        i => i.ISBN === isbn
    );
}

export function criarEdicao(dados) {

    const novaEdicao = {
        id: Math.max(
            ...Edicao.map(i => i.id)
        ) + 1,

        livro_id: Number(dados.livro_id),

        ISBN: dados.ISBN,
        editora: dados.editora,
        Datpub: dados.Datpub,
        idioma: dados.idioma,
        edicao: dados.edicao
    };

    Edicao.push(novaEdicao);

    return novaEdicao;
}

export function deletarEdicao(id) {

    const index = Edicao.findIndex(
        i => i.id === id
    );

    if (index === -1) {
        return {
            status: 404,
            erro: "Edição não encontrada"
        };
    }

    const possuiExemplar =
        Exemplar.some(
            i => i.edicao_id === id
        );

    if (possuiExemplar) {
        return {
            status: 400,
            erro:
                "Não é possível excluir a edição, pois ela possui exemplares associados"
        };
    }

    const edicaoRemovida =
        Edicao[index];

    Edicao.splice(index, 1);

    return { edicaoRemovida };
}