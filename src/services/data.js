const Livro = [
    {
        id: 1 , titulo: 'O Hobbit' , autor: 'John Ronald Reuel Tolkien' ,
        Ano_lancamento: 1937 , genero: 'fantasia' , tipo: 'romance'
    },
    {
        id: 2 , titulo: '1984' , autor: 'George Orwell' ,
        Ano_lancamento: 1949 , genero: 'distopia , ficção científica' ,tipo: 'Romance'
    },
    {
        id: 3 , titulo: 'O Senhor dos Anéis: A Sociedade do Anel' , autor: 'John Ronald Reuel Tolkien' ,
        Ano_lancamento: 1954 , genero: 'fantasia' , tipo: 'romance'
    },
    {
        id: 4 , titulo: 'O Senhor dos Anéis: As duas torres' , autor: 'John Ronald Reuel Tolkien' ,
        Ano_lancamento: 1954 , genero: 'fantasia' , tipo: 'romance'
    },
    {
        id: 5 , titulo: 'O Senhor dos Anéis: O retorno do rei' , autor: 'John Ronald Reuel Tolkien' ,
        Ano_lancamento: 1954 , genero: 'fantasia' , tipo: 'romance'
    },
    {
        id: 6 , titulo: 'A revolução dos bichos' , autor: 'George Orwell' ,
        Ano_lancamento: 1945 , genero: 'fábula , crítica politica' , tipo: 'romance'
    },
    {
        id: 7 , titulo: 'O cortiço' , autor: 'Aluísio Azevedo' ,
        Ano_lancamento: 1890 , genero: 'romance naturalista' , tipo: 'romance'
    },
    {
        id: 8 , titulo: 'Dom Casmurro' , autor: 'Machado de Assis' ,
        Ano_lancamento: 1899 , genero: 'romance realista' , tipo: 'romance'
    },
    {
        id: 9 , titulo: 'Battle Royale' , autor: 'Koushun Takami' ,
        Ano_lancamento: 1999 , genero: 'Ficção distópica , Ação e suspense' , tipo: 'romance'
    },
    {
        id: 10 , titulo: 'Enciclopédia do Corpo Humano' , autor: 'Pé da letra' ,
        Ano_lancamento: 2023 , genero: 'Educação' , tipo: 'enciclopédia'
    },
    
];

const Edicao = [
    {
        id: 101 , livro_id: 1 , ISBN: '978-8595084742' ,
        editora: 'HarperCollins' , Datpub: '15-07-2019',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:102 , livro_id: 1 , ISBN: '978-6555114188' ,
        editora: 'HarperCollins' , Datpub: '22-12-2025',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:103 , livro_id: 2 , ISBN: '978-8535914849' ,
        editora: 'Companhia das Letras' , Datpub: '21-07-2009',
        idioma: 'Português' , edicao: '1'
    },
    {
        id:104 , livro_id: 3 , ISBN: '978-8595084759' ,
        editora: 'HarperCollins' , Datpub: '25-11-2019',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:105 , livro_id: 3 , ISBN: '978-6555117929' ,
        editora: 'HarperCollins' , Datpub: '01-01-2025',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:106 , livro_id: 4 , ISBN: '978-8595084766' ,
        editora: 'HarperCollins' , Datpub: '25-11-2025',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:107 , livro_id: 5 , ISBN: '978-8595084773' ,
        editora: 'HarperCollins' , Datpub: '25-11-2025',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:108 , livro_id: 2 , ISBN: '978-6555522266' ,
        editora: 'Principis' , Datpub: '01-01-2021',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:109 , livro_id: 6 , ISBN: '978-8535909555' ,
        editora: 'Companhia das Letras' , Datpub: '01-03-2017',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:110 , livro_id: 7 , ISBN: '978-8578886431' ,
        editora: 'Panda Books' , Datpub: '10-01-2007',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:111 , livro_id: 7 , ISBN: '978-8582850343' ,
        editora: 'Penguin-Companhia' , Datpub: '23-06-2016',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:112 , livro_id: 8 , ISBN: '978-8594318602' ,
        editora: 'Principis' , Datpub: '02-05-2019',
        idioma: 'Português' , edicao: '3' 
    },
    {
        id:113 , livro_id: 9 , ISBN: '978-8525056122' ,
        editora: 'Alt' , Datpub: '01-04-2014',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:114 , livro_id: 10 , ISBN: '978-6558885474' ,
        editora: 'Pé da letra' , Datpub: '24-03-2023',
        idioma: 'Português' , edicao: '1' 
    },
];

const Exemplar = [
    {
        id: 301 , livro_id: 1 , edicao_id: 101 , status:'disponível' , DatAdqui: '12-04-2026' , loc: 'Est: 1 - Prat: 2' ,COD:'EXP0001'
    },
    {
        id: 302 , livro_id: 1 , edicao_id: 102 , status:'indisponível' , DatAdqui: '14-04-2026' , loc: 'Est: 1 - Prat: 3' ,COD:'EXP0012'
    },
    {
        id: 303 , livro_id: 2 , edicao_id: 103 , status:'indisponível' , DatAdqui: '05-05-2026' , loc: 'Est: 2 - Prat: 1' ,COD:'EXP0037'
    },
    {
        id: 304 , livro_id: 3 , edicao_id: 104 , status:'indisponível' , DatAdqui: '07-03-2026' , loc: 'Est: 1 - Prat: 1' ,COD:'EXP0038'
    },
    {
        id: 305 , livro_id: 3 , edicao_id: 104 , status:'disponível' , DatAdqui: '07-03-2026' , loc: 'Est: 1 - Prat: 1' ,COD:'EXP0040'
    },
    {
        id: 306 , livro_id: 3 , edicao_id: 105 , status:'disponível' , DatAdqui: '08-03-2026' , loc: 'Est: 1 - Prat: 2' ,COD:'EXP0042'
    },
    {
        id: 307 , livro_id: 4 , edicao_id: 106 , status:'disponível' , DatAdqui: '08-03-2026' , loc: 'Est: 1 - Prat: 1' ,COD:'EXP0043'
    },
    {
        id: 308 , livro_id: 4 , edicao_id: 106 , status:'disponível' , DatAdqui: '08-03-2026' , loc: 'Est: 1 - Prat: 1' ,COD:'EXP0044'
    },
    {
        id: 309 , livro_id: 5 , edicao_id: 107 , status:'indisponível' , DatAdqui: '08-03-2026' , loc: 'Est: 1 - Prat: 2' ,COD:'EXP0045'
    },
    {
        id: 310 , livro_id: 5 , edicao_id: 107 , status:'disponível' , DatAdqui: '08-03-2026' , loc: 'Est: 1 - Prat: 2' ,COD:'EXP0046'
    },
    {
        id: 311 , livro_id: 2 , edicao_id: 108 , status:'disponível' , DatAdqui: '05-05-2026' , loc: 'Est: 2- Prat: 1' ,COD:'EXP0039'
    },
    {
        id: 312 , livro_id: 6 , edicao_id: 109 , status:'disponível' , DatAdqui: '05-05-2026' , loc: 'Est: 2 - Prat: 1' ,COD:'EXP0041'
    },
    {
        id: 313 , livro_id: 7 , edicao_id: 110 , status:'disponível' , DatAdqui: '12-05-2026' , loc: 'Est: 2 - Prat: 2' ,COD:'EXP0060'
    },
    {
        id: 314 , livro_id: 7 , edicao_id: 110 , status:'disponível' , DatAdqui: '12-05-2026' , loc: 'Est: 2 - Prat: 2' ,COD:'EXP0061'
    },
    {
        id: 315 , livro_id: 7 , edicao_id: 111 , status:'disponível' , DatAdqui: '12-05-2026' , loc: 'Est: 2 - Prat: 2' ,COD:'EXP0062'
    },
    {
        id: 316 , livro_id: 8 , edicao_id: 112 , status:'disponível' , DatAdqui: '14-05-2026' , loc: 'Est: 2 - Prat: 3' ,COD:'EXP0063'
    },
    {
        id: 317 , livro_id: 8 , edicao_id: 112 , status:'disponível' , DatAdqui: '14-05-2026' , loc: 'Est: 2 - Prat: 3' ,COD:'EXP0064'
    },
    {
        id: 318 , livro_id: 9 , edicao_id: 113 , status:'disponível' , DatAdqui: '27-05-2026' , loc: 'Est: 1 - Prat: 3' ,COD:'EXP0070'
    },
    {
        id: 319 , livro_id: 10 , edicao_id: 114 , status:'disponível' , DatAdqui: '30-05-2026' , loc: 'Est: 3 - Prat: 1' ,COD:'EXP0071'
    },

];

const leitores = [
    {
        id: 1,
        nome: "João Lucas",
        email: "joao@email.com",
        telefone: "99999-1111",
        multa: 0
    },
    {
        id: 2,
        nome: "Kauan Prado",
        email: "kauan@email.com",
        telefone: "99999-2222",
        multa: 0
    },
    {
        id: 3,
        nome: "Gabriel Alcides",
        email: "gabriel@email.com",
        telefone: "99999-3333",
        multa: 0
    },
    {
        id: 4,
        nome: "Beatriz Souza",
        email: "beatriz@email.com",
        telefone: "99999-4444",
        multa: 0
    },
    {
        id: 5,
        nome: "Rosângela Maria",
        email: "rosangela@email.com",
        telefone: "99999-5555",
        multa: 0
    }
];

const Emprestimos =[
    {
        id: 500 , leitor_id: 1, exemplar_id: 302, data_emprestimo: '2026-08-14', data_devolucao: '2026-08-21', status: 'em andamento'
    },
    {
        id: 501 , leitor_id: 1, exemplar_id: 309, data_emprestimo: '2026-08-10', data_devolucao: '2026-08-17', status: 'em andamento'
    },
    {
        id: 502 , leitor_id: 2, exemplar_id: 319, data_emprestimo: '2026-08-01', data_devolucao: '2026-08-08', status: 'devolvido'
    },
    {
        id: 503 , leitor_id: 3, exemplar_id: 308, data_emprestimo: '2026-08-05', data_devolucao: '2026-08-12', status: 'devolvido'
    },
    {  
        id: 504 , leitor_id: 4, exemplar_id: 303, data_emprestimo: '2026-08-15', data_devolucao: '2026-08-22', status: 'em andamento'
    },
    {
        id: 505 , leitor_id: 5, exemplar_id: 304, data_emprestimo: '2026-08-20', data_devolucao: '2026-08-27', status: 'em andamento'
    }
];