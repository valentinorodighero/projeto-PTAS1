import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

//Variaveis
const Livro = [
    {
        id: 1 , titulo: 'O Hobbit' , autor: 'John Ronald Reuel Tolkien' ,
        Ano_lancamento: '1937' , genero: 'fantasia' , tipo: 'romance'
    },
    {
        id: 2 , titulo: '1984' , autor: 'George Orwell' ,
        Ano_lancamento: '1949' , genero: 'distopia , ficção científica' ,tipo: 'Romance'
    },
    {
        id: 3 , titulo: 'O Senhor dos Anéis: A Sociedade do Anel' , autor: 'John Ronald Reuel Tolkien' ,
        Ano_lancamento: '1954' , genero: 'fantasia' , tipo: 'romance'
    },
    {
        id: 4 , titulo: 'O Senhor dos Anéis: As duas torres' , autor: 'John Ronald Reuel Tolkien' ,
        Ano_lancamento: '1954' , genero: 'fantasia' , tipo: 'romance'
    },
    {
        id: 5 , titulo: 'O Senhor dos Anéis: O retorno do rei' , autor: 'John Ronald Reuel Tolkien' ,
        Ano_lancamento: '1954' , genero: 'fantasia' , tipo: 'romance'
    },
    {
        id: 6 , titulo: 'A revolução dos bichos' , autor: 'George Orwell' ,
        Ano_lancamento: '1945' , genero: 'fábula , crítica politica' , tipo: 'romance'
    },
    {
        id: 7 , titulo: 'O cortiço' , autor: 'Aluísio Azevedo' ,
        Ano_lancamento: '1890' , genero: 'romance naturalista' , tipo: 'romance'
    },
    {
        id: 8 , titulo: 'Dom Casmurro' , autor: 'Machado de Assis' ,
        Ano_lancamento: '1899' , genero: 'romance realista' , tipo: 'romance'
    },
    {
        id: 9 , titulo: 'Battle Royale' , autor: 'Koushun Takami' ,
        Ano_lancamento: '1999' , genero: 'Ficção distópica , Ação e suspense' , tipo: 'romance'
    },
    {
        id: 10 , titulo: 'Enciclopédia do Corpo Humano' , autor: 'Pé da letra' ,
        Ano_lancamento: '2023' , genero: 'Educação' , tipo: 'enciclopédia'
    },
    
];
//aqui Edicoes guarda cada diferente publicação de uma obra, e o atributo 'edicao' guarda a edição daquela publicação
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

//representa cada exemplar fisico que a biblioteca possui
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

//representa os leitores cadastrados na biblioteca
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

//Middlewares

//autenticação
function Autenticar(req, res, next){
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({erro: 'Token não fornecido'});
    }

    if(token !== 'Bearer biblioteca123'){
        return res.status(403).json({erro: 'Token inválido'});
    }

    console.log('Token válido, acesso permitido');

    next();
};

//validação do corpo do livro
function ValidarLivro(req, res, next){
    const { titulo, autor, Ano_lancamento, genero, tipo } = req.body;
    
    if(
        !titulo || !autor || !Ano_lancamento || !genero || !tipo ||
        titulo.trim() == '' || autor.trim() == '' || Ano_lancamento.trim() == '' || genero.trim() == '' || tipo.trim() == ''
    ){
        return res.status(400).json({erro: 'Todos os campos são obrigatórios e não podem estar vazios'});
    };
    next();
};

//validar do corpo da edição
function ValidarEdicao(req, res, next){
    const { livro_id, ISBN, editora, Datpub, idioma, edicao } = req.body;

    if(// esse "!Number.isInteger(Number(livro_id))" verifica se o livro_id é um numero
        !livro_id || !ISBN || !editora || !Datpub || !idioma || !edicao ||
        !Number.isInteger(Number(livro_id)) || ISBN.trim() == '' || editora.trim() == '' || Datpub.trim() == '' || idioma.trim() == '' || edicao.trim() == ''
    ){
        return res.status(400).json({erro: 'Todos os campos são obrigatórios e não podem estar vazios'});
    };
    next();
};

// validar do corpo do exemplar
function ValidarExemplar(req, res, next){
    const { livro_id, edicao_id, status, DatAdqui, loc, COD } = req.body;

    if(
        !livro_id || !edicao_id || !status || !DatAdqui || !loc || !COD ||
        !Number.isInteger(Number(livro_id)) || !Number.isInteger(Number(edicao_id)) || status.trim() == '' || DatAdqui.trim() == '' || loc.trim() == '' || COD.trim() == ''
    ){
        return res.status(400).json({erro: 'Todos os campos são obrigatórios e não podem estar vazios'});
    }

    next();
};

//Registra o Log
function RegistrarLog(req, res, next){
    console.log(
        `${new Date().toISOString()} - ${req.method} ${req.originalUrl}`,
        "Autenticação e validação conferidas"
    );
    next();
};

//Faz varias da verificações que permitem fazer um emprestimo
function ValidarEmprestimo(req, res, next){
    const {leitor_id , exemplar_id} = req.body;

    if(
        !leitor_id || !exemplar_id || !Number.isInteger(Number(leitor_id)) ||
        !Number.isInteger(Number(exemplar_id))
    ){
        return res.status(400).json({erro: 'Todos os campos são obrigatórios e não podem estar vazios e devem ser numeros'});
    }

    const EsseExemplar = Exemplar.find(i => i.id == Number(exemplar_id))

    if(!EsseExemplar){
        return res.status(404).json({erro: 'Exemplar não encontrado'})
    }

    if(EsseExemplar.status != "disponível"){
        return res.status(400).json({erro: 'Exemplar não disponível para empréstimo'})
    }

    // Regra 1 da biblioteca: enciclopédias não podem ser emprestadas
    const EsseLivro = Livro.find(i => i.id == EsseExemplar.livro_id)

    if(EsseLivro.tipo == 'enciclopédia'){
        return res.status(400).json({erro: 'Enciclopédias não podem ser emprestadas'});
    }

    // Regra 2 da biblioteca: um leitor não pode ter mais de 3 livros empretados ao mesmo tempo
    const quanEmprestimo = Emprestimos.filter(i => i.leitor_id == leitor_id && i.status == "em andamento");

    if(quanEmprestimo.length >= 3){
        return res.status(400).json({erro: 'você já atingiu o limite de livros alugados'});
    }

    const EsseLeitor = leitores.find(i => i.id == Number(leitor_id))

    if(!EsseLeitor){
        return res.status(404).json({erro: 'Leitor não encontrado'});
    }

    // Regra 3 da biblioteca: um leitor não pode ter emprestimos em andamento se tiver multa em aberto
    if(EsseLeitor.multa > 0){
        return res.status(400).json({erro: 'Leitor com multa em aberto'});
    }

    next();
};

function AlterarStatusExemplar(req, res, next){
    const Exemplar_id = req.body.exemplar_id;

    const exemplar = Exemplar.find(i => i.id == Exemplar_id);

    exemplar.status = "indisponível";

    next();
};

function ChecarDatas( req,res, next){
    const leitor_id = Number(req.body.leitor_id);
    
    const leitor = leitores.find(i => i.id === leitor_id);
    
    const dataAtual = new Date();
    
    const emprestimosAtivos = Emprestimos.filter(
        i => i.leitor_id === leitor_id &&
        i.status === "em andamento"
    );

    const emprestimoAtrasado = emprestimosAtivos.find(i => {
    
        const dataDevolucao = new Date(i.data_devolucao);

        return dataAtual > dataDevolucao;
    });
    
    if (emprestimoAtrasado) {
    
        const multa = 15
    
        leitor.multa += multa;
    
        return res.status(400).json({
            erro: "Você possui empréstimos atrasados",
            multaGerada: multa,
            multaTotal: leitor.multa
        });
    }
    
    next();
}

//Rotas

//ROTAS de pesquisa GET

//rota inicial
app.get('/', (req, res) =>{
    res.send("Biblioteca está no ar");
});

//pesquisa por ID
app.get('/livro/:id', (req, res) =>{
    const id = req.params.id;

    const Slivro = Livro.find(i => i.id == parseInt(id));

    if(!Slivro){
        return res.status(404).json({erro:"Livro não encontrada"});
    };

    res.status(200).json(Slivro);
});

//busca o livro e retorna o livro, as edições e exemplares dele
app.get('/livro/:id/detalhes', (req, res) =>{
    const id = req.params.id;

    const livro = Livro.find(i => i.id == id);

    if(!livro){
        return res.status(404).json({error:' Livro não encontrado'});
    }

    const edicoes = Edicao.filter(i => i.livro_id == id);

    const exemplares = Exemplar.filter(i => i.livro_id == id);

    res.status(200).json({
        // os tres pontoa ... serve para os separa em valores separados, e não como um array
        ...livro,
        edicoes,
        exemplares
    })
});

//procura um livro e retorna a disponibilidade dele
app.get('/livro/:id/disponibilidade', (req, res) =>{
    const id = req.params.id;

    const livro = Livro.find(i => i.id == id);

    if(!livro){
        return res.status(404).json({error:' Livro não encontrado'});
    }

    const LivrosDisponivel = Exemplar.filter(i => i.livro_id == id && i.status == 'disponível');

    if(LivrosDisponivel.length == 0){
        //esse ? depois de livro serve para não quebrar o código caso o livro seja null ou undefined
        return res.send(`No momento o livro: ${livro?.titulo} não está disponivel`)
    }
    res.status(200).json({
        livro_id: id,
        quantidades: LivrosDisponivel.length,
        LivrosDisponivel
    })
});

// pesquisa de texto com queryString, se não tiver uma query ela funciona como uma rota /livro e lista todos os livros
app.get('/livro', (req, res) =>{
    //Isso aqui é uma desentruturação de objeto
    const {titulo , autor , Ano_lancamento , genero , tipo} = req.query;

    let resultado = Livro;
    
    if(titulo){
        // o includes aqui possibilita uma pesquisa parcial
        resultado = resultado.filter( i => i.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }
    if(autor){
        //mesma coisa na pesquisa por titulo
        resultado = resultado.filter( i => i.autor.toLowerCase().includes(autor.toLowerCase()));
    }
    if(Ano_lancamento){
        resultado = resultado.filter( i => i.Ano_lancamento.toLowerCase() == Ano_lancamento.toLowerCase());
    }
    if(genero){
        // como os livros podem ter varios generos e existem subgeneros, como romance naturalista o .includes() ajuda a contronar isso
        resultado = resultado.filter( i => i.genero.toLowerCase().includes(genero.toLowerCase()));
    }
    if(tipo){
        resultado = resultado.filter( i => i.tipo.toLowerCase() == tipo.toLowerCase());
    }
    res.status(200).json(resultado);
});

//todas as edições
app.get('/edicoes', (req, res) =>{
    res.status(200).json(Edicao);
});

//pesquisar edição por ISBN
app.get('/edicoes/isbn/:isbn', (req, res) =>{
    const ISBN = req.params.isbn;

    const edicao = Edicao.find(is => is.ISBN == ISBN);

    if (!edicao) {
        return res.status(404).json({ erro: 'ISBN não encontrado' });
    }

    res.status(200).json(edicao);
});

//todos os exemplares
app.get('/exemplares',  (req, res) =>{
    res.status(200).json(Exemplar);
});

//lista todos os exemplares disponiveis
app.get('/exemplares/disponiveis', (req, res) =>{
    const Sdisponivel = Exemplar.filter(i => i.status == 'disponível');
    
    if(Sdisponivel.length == 0){
       return res.send("Nenhun Livro disponível no momento");
    }

    res.status(200).json(Sdisponivel);
});

//lista todos os leitores cadastrados
app.get("/leitores", (req, res) => {
    res.json(leitores);
});

//lista um leitor específico pelo ID
app.get("/leitores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const leitor = leitores.find(l => l.id === id);
    if (!leitor) 
        return res.status(404).send("Leitor não encontrado.");
    
    res.json(leitor);
});

//lista todos os emprestimos
app.get('/emprestimos', (req, res) => {
    res.status(200).json(Emprestimos);
});

//procura os emprestimos de um leitor
app.get('/emprestimos/leitor/:id', (req,res) =>{
    const id = parseInt(req.params.id);

    const leitor = leitores.find(i => i.id === id);

    if (!leitor){ 
        return res.status(404).send("Leitor não encontrado.");
    }

    const EmpreResultado = Emprestimos.filter(i => i.leitor_id === id);
    
    res.status(200).json(EmpreResultado);
});

//lista todos os emprestimos pendentes
app.get('/emprestimos/pendentes', (req,res) =>{
    const EmpreResultado = Emprestimos.filter(i => i.status === "em andamento");
    
    res.status(200).json(EmpreResultado);
});

//ROTAS POST

//POST para adicionar um novo livro
app.post('/livro',[Autenticar, ValidarLivro, RegistrarLog], (req, res) =>{
    const { titulo, autor, Ano_lancamento, genero, tipo } = req.body;

    const NewLivro = {
        id: Math.max(...Livro.map(i => i.id)) + 1,
        titulo,
        autor,
        Ano_lancamento,
        genero,
        tipo
    };
    Livro.push(NewLivro);
    res.status(201).json(NewLivro);
});

//POST para adicionar uma nova edição
app.post('/edicao', [Autenticar, ValidarEdicao, RegistrarLog], (req, res) =>{
    const { ISBN, editora, Datpub, idioma, edicao } = req.body;

    const livro_id = Number(req.body.livro_id);

    const NewEdicao = {
        id: Math.max(...Edicao.map(i => i.id)) + 1,
        livro_id,
        ISBN,
        editora,
        Datpub,
        idioma,
        edicao
    };
    Edicao.push(NewEdicao);
    res.status(201).json(NewEdicao);
});

//POST para adicionar um novo exemplar
app.post('/exemplar', [Autenticar, ValidarExemplar, RegistrarLog], (req, res) =>{
    const { status, DatAdqui, loc, COD } = req.body;

    const livro_id = Number(req.body.livro_id);
    const edicao_id = Number(req.body.edicao_id);

    const NewExemplar = {
        id: Math.max(...Exemplar.map(i => i.id)) + 1,
        livro_id,
        edicao_id,
        status,
        DatAdqui,
        loc,
        COD
    };
    Exemplar.push(NewExemplar);
    res.status(201).json(NewExemplar);
});

//POST para adicionar um novo leitor
app.post("/leitores", (req, res) => {
    const { nome, email, telefone, multa } = req.body;
    const novoLeitor = {
        id: leitores.length + 1,
        nome,
        email,
        telefone,
        multa: 0
    };

    leitores.push(novoLeitor);
    res.status(201).json(novoLeitor);
});

app.post('/emprestimo', [Autenticar, ValidarEmprestimo, ChecarDatas, AlterarStatusExemplar,  RegistrarLog], (req, res) =>{
    const {leitor_id , exemplar_id} = req.body;

    const data_emprestimo = new Date();

    const data_devolucao = new Date(data_emprestimo);

    data_devolucao.setDate(data_devolucao.getDate() + 7);

    const NovoEmprestimo = {
        id: Math.max(...Emprestimos.map(i => i.id)) + 1,
        leitor_id: Number(leitor_id),
        exemplar_id: Number(exemplar_id),
        //tranforma os valores Date em string no mesmo formato que está nas variaveis
        data_emprestimo: data_emprestimo.toISOString().slice(0, 10),
        data_devolucao: data_devolucao.toISOString().slice(0, 10),
        status: "em andamento"
    };

    Emprestimos.push(NovoEmprestimo);

    res.status(201).json(NovoEmprestimo)
});

//Rotas PATCH/PUT

//rota de atualização de livros
app.patch('/livro/:id', (req, res) =>{
    const livro = Livro.find(i => i.id == req.params.id);

    if(!livro){
        return res.status(404).json({erro: 'Livro não encontrado'});
    }

    const { titulo, autor, Ano_lancamento, genero, tipo } = req.body;

    if(titulo) livro.titulo = titulo;
    if(autor) livro.autor = autor;
    if(Ano_lancamento) livro.Ano_lancamento = Ano_lancamento;
    if(genero) livro.genero = genero;
    if(tipo) livro.tipo = tipo;

    res.status(200).json({ mensagem: 'Livro atualizado com sucesso', livro });
});

//atualiza um exemplar, seu staus ou localização que são os dois atributos que podem ser alterados
app.patch('/exemplar/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    
    const exemplar = Exemplar.find(i => i.id == id);

    if(!exemplar){
        return res.status(404).json({erro: 'Exemplar não encontrado'});
    }

    const { status, loc } = req.body;

    if(status) exemplar.status = status;
    if(loc) exemplar.loc = loc;

    res.status(200).json({ mensagem: 'Exemplar atualizado com sucesso', exemplar });
});

//atualiza um leitor
app.put("/leitores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const leitor = leitores.find(l => l.id === id);
    if (!leitor) 
        return res.status(404).send("Leitor não encontrado.");

    const { nome, email, telefone, multa } = req.body;

    leitor.nome = nome;
    leitor.email = email;
    leitor.telefone = telefone;
    leitor.multa = multa;

    res.json(leitor);
});

app.patch('/emprestimos/:id/devolver', (req, res) => {
    const id = parseInt(req.params.id);
    const emprestimo = Emprestimos.find(i => i.id === id);

    if (!emprestimo) {
        return res.status(404).json({ erro: 'Empréstimo não encontrado' });
    }

    if (emprestimo.status === 'devolvido') {
        return res.status(400).json({ erro: 'Empréstimo já foi devolvido' });
    }

    emprestimo.status = 'devolvido';

    const exemplar = Exemplar.find(
        e => e.id === emprestimo.exemplar_id
    );
    
    if(exemplar){
        exemplar.status = 'disponível';
    }

    res.status(200).json({ mensagem: 'Empréstimo devolvido com sucesso', emprestimo });
});

//Rotas delete

//rota de exclusão de livro
app.delete('/livro/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    
    const Index = Livro.findIndex(i => i.id == id);

    if(Index === -1){
        return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    //só podem ser deletados livros que não possuam edições ou exemplares associados a eles
    const PossuiEdição = Edicao.some(i => i.livro_id == id);
    const PossuiExemplar = Exemplar.some(i => i.livro_id == id);

    if(PossuiEdição || PossuiExemplar){
        return res.status(400).json({ erro: 'Não é possível excluir o livro, pois ele possui edições ou exemplares associados' });
    }

    const livroRemovido = Livro[Index];

    Livro.splice(Index, 1);

    res.status(200).json({ mensagem: 'Livro excluído com sucesso', livroRemovido });
});

//rota de exclusão de edição
app.delete('/edicao/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    
    const Index = Edicao.findIndex(i => i.id == id);

    if(Index === -1){
        return res.status(404).json({ erro: 'Edição não encontrada' });
    }
    
    const PossuiExemplar = Exemplar.some(i => i.edicao_id == id);

    //não podemos excluir uma edição com exemplares associados
    if(PossuiExemplar){
        return res.status(400).json({ erro: 'Não é possível excluir a edição, pois ela possui exemplares associados' });
    }

    const edicaoRemovida = Edicao[Index];

    Edicao.splice(Index, 1);

    res.status(200).json({ mensagem: 'Edição excluída com sucesso', edicaoRemovida });
});

//rota de exclusão de exemplar
app.delete('/exemplar/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    
    const Index = Exemplar.findIndex(i => i.id == id);

    if(Index === -1){
        return res.status(404).json({ erro: 'Exemplar não encontrado' });
    }

    const exemplarRemovido = Exemplar[Index];

    Exemplar.splice(Index, 1);

    res.status(200).json({ mensagem: 'Exemplar excluído com sucesso', exemplarRemovido });
});

//rota de exclusão de leitor
app.delete("/leitores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const indice = leitores.findIndex(l => l.id === id);
    if (indice === -1) {
        return res.status(404).send("Leitor não encontrado.");
    }

    leitores.splice(indice, 1);

    res.json({ error: "Leitor removido com sucesso." });
});

//tratamento para rota não encontrada
app.use((req, res) =>{
    res.status(404).json({
        erro: 'Rota não existente',
        metodo: req.method,
        rota: req.originalUrl
    });
});

app.listen(PORT, () =>{
    console.log(
        `Servidor ouvindo na porta: http://localhost:${PORT}`
    );
});

/*
    MAPA DAS ROTAS DOS LIVROS, EDIÇÕES E EXEMPLARES

    -GET-

    GET /livro/:id - pesquisa por ID
    GET /livro/:id/detalhes - busca o livro e retorna o livro, as edições e exemplares dele
    GET /livro/:id/disponibilidade - procura um livro e retorna a disponibilidade dele
    GET /livro - pesquisa de texto com queryString, se não tiver uma query ela funciona como uma rota /livro e lista todos os livros
    GET /edicoes - todas as edições
    GET /edicoes/isbn/:isbn - pesquisar edição por ISBN
    GET /exemplares - todos os exemplares
    GET /exemplares/disponiveis - lista todos os exemplares disponiveis
    GET /leitores - lista todos os leitores cadastrados
    GET /leitores/:id - lista um leitor específico pelo ID
    Get /emprestimos - lista todos os emprestimos
    Get /emprestimos/leitor/:id - procura os emprestimos de um leitor
    Get /emprestimos/pendentes - lista todos os emprestimos pendentes

    -POST-

    POST /livro - para adicionar um novo livro
    POST /edicao - para adicionar uma nova edição
    POST /exemplar - para adicionar um novo exemplar
    POST /leitores - para adicionar um novo leitor
    POST /emprestimo - para adicionar um novo emprestimo

    -PATCH e PUT-

    PATCH /livro/:id - rota de atualização de livros
    PATCH /exemplar/:id - atualiza um exemplar, seu staus ou localização que são os dois atributos que podem ser alterados
    PUT /leitores/:id - atualiza um leitor
    PATCH /emprestimos/:id/devolver - rota de devolução de emprestimo

        P.S.: Não existe rota de atualização de edição, pois não faz sentido atualizar uma edição, pois ela é única e não muda

    -DELETE-

    DELETE /livro/:id - rota de exclusão de livro, que não tenham edições ou exemplares associados a eles
    DELETE /edicao/:id - rota de exclusão de edição, que não tenham exemplares associados a ela
    DELETE /exemplar/:id - rota de exclusão de exemplar
    DELETE /leitores/:id - rota de exclusão de leitor

*/