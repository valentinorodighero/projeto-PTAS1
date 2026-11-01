import { Livro, Edicao, Exemplar } from "./data.js";

export function listarLivros(filtros = {}) {

    const {
        titulo,
        autor,
        Ano_lancamento,
        genero,
        tipo
    } = filtros;

    let resultado = Livro;

    if (titulo) {
        resultado = resultado.filter(i =>
            i.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    }

    if (autor) {
        resultado = resultado.filter(i =>
            i.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }

    if (Ano_lancamento) {
        resultado = resultado.filter(
            i => i.Ano_lancamento == Ano_lancamento
        );
    }

    if (genero) {
        resultado = resultado.filter(i =>
            i.genero.toLowerCase().includes(genero.toLowerCase())
        );
    }

    if (tipo) {
        resultado = resultado.filter(i =>
            i.tipo.toLowerCase() === tipo.toLowerCase()
        );
    }

    return resultado;
}

export function buscarLivroPorId(id) {
    return Livro.find(i => i.id === id);
}

export function buscarDetalhesLivro(id) {

    const livro = Livro.find(i => i.id === id);

    if (!livro) return null;

    const edicoes = Edicao.filter(
        i => i.livro_id === id
    );

    const exemplares = Exemplar.filter(
        i => i.livro_id === id
    );

    return {
        ...livro,
        edicoes,
        exemplares
    };
}

export function buscarDisponibilidadeLivro(id) {

    const livro = Livro.find(
        i => i.id === id
    );

    if (!livro) return null;

    const disponiveis = Exemplar.filter(
        i =>
            i.livro_id === id &&
            i.status === "disponível"
    );

    return {
        livro_id: id,
        quantidade: disponiveis.length,
        livrosDisponiveis: disponiveis
    };
}

export function criarLivro(dados) {

    const novoLivro = {
        id:
            Math.max(
                ...Livro.map(i => i.id)
            ) + 1,

        titulo: dados.titulo,
        autor: dados.autor,
        Ano_lancamento:
            Number(dados.Ano_lancamento),
        genero: dados.genero,
        tipo: dados.tipo
    };

    Livro.push(novoLivro);

    return novoLivro;
}

export function atualizarLivro(id, dados) {

    const livro = Livro.find(
        i => i.id === id
    );

    if (!livro) return null;

    const {
        titulo,
        autor,
        Ano_lancamento,
        genero,
        tipo
    } = dados;

    if (titulo) livro.titulo = titulo;
    if (autor) livro.autor = autor;
    if (Ano_lancamento)
        livro.Ano_lancamento =
            Ano_lancamento;
    if (genero) livro.genero = genero;
    if (tipo) livro.tipo = tipo;

    return livro;
}

export function deletarLivro(id) {

    const index = Livro.findIndex(
        i => i.id === id
    );

    if (index === -1) {
        return {
            status: 404,
            erro: "Livro não encontrado"
        };
    }

    const possuiEdicao = Edicao.some(
        i => i.livro_id === id
    );

    const possuiExemplar = Exemplar.some(
        i => i.livro_id === id
    );

    if (
        possuiEdicao ||
        possuiExemplar
    ) {
        return {
            status: 400,
            erro:
                "Não é possível excluir o livro, pois ele possui edições ou exemplares associados"
        };
    }

    const livroRemovido = Livro[index];

    Livro.splice(index, 1);

    return { livroRemovido };
}