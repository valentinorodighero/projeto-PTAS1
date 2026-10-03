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
        Ano_lancamento: '2023' , genero: 'Educação' , tipo: 'Enciclopédia'
    },
    
];
//aqui Edicoes guarda cada diferente publicação de uma obra, e o atributo 'edicao' guarda a edição daquela publicação
const Edicao = [
    {
        id: 101 , livro_id: '1' , ISBN: '978-8595084742' ,
        editora: 'HarperCollins' , Datpub: '15-07-2019',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:102 , livro_id: '1' , ISBN: '978-6555114188' ,
        editora: 'HarperCollins' , Datpub: '22-12-2025',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:103 , livro_id: '2' , ISBN: '978-8535914849' ,
        editora: 'Companhia das Letras' , Datpub: '21-07-2009',
        idioma: 'Português' , edicao: '1'
    },
    {
        id:104 , livro_id: '3' , ISBN: '978-8595084759' ,
        editora: 'HarperCollins' , Datpub: '25-11-2019',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:105 , livro_id: '3' , ISBN: '978-6555117929' ,
        editora: 'HarperCollins' , Datpub: '01-01-2025',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:106 , livro_id: '4' , ISBN: '978-8595084766' ,
        editora: 'HarperCollins' , Datpub: '25-11-2025',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:107 , livro_id: '5' , ISBN: '978-8595084773' ,
        editora: 'HarperCollins' , Datpub: '25-11-2025',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:108 , livro_id: '2' , ISBN: '978-6555522266' ,
        editora: 'Principis' , Datpub: '01-01-2021',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:109 , livro_id: '6' , ISBN: '978-8535909555' ,
        editora: 'Companhia das Letras' , Datpub: '01-03-2017',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:110 , livro_id: '7' , ISBN: '978-8578886431' ,
        editora: 'Panda Books' , Datpub: '10-01-2007',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:111 , livro_id: '7' , ISBN: '978-8582850343' ,
        editora: 'Penguin-Companhia' , Datpub: '23-06-2016',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:112 , livro_id: '8' , ISBN: '978-8594318602' ,
        editora: 'Principis' , Datpub: '02-05-2019',
        idioma: 'Português' , edicao: '3' 
    },
    {
        id:113 , livro_id: '9' , ISBN: '978-8525056122' ,
        editora: 'Alt' , Datpub: '01-04-2014',
        idioma: 'Português' , edicao: '1' 
    },
    {
        id:114 , livro_id: '10' , ISBN: '978-6558885474' ,
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
        id: 303 , livro_id: 2 , edicao_id: 103 , status:'disponível' , DatAdqui: '05-05-2026' , loc: 'Est: 2 - Prat: 1' ,COD:'EXP0037'
    },
    {
        id: 304 , livro_id: 3 , edicao_id: 104 , status:'disponível' , DatAdqui: '07-03-2026' , loc: 'Est: 1 - Prat: 1' ,COD:'EXP0038'
    },
    {
        id: 305 , livro_id: 3 , edicao_id: 104 , status:'disponível' , DatAdqui: '07-03-2026' , loc: 'Est: 1 - Prat: 1' ,COD:'EXP0040'
    },
    {
        id: 306 , livro_id: 3 , edicao_id: 105 , status:'indisponível' , DatAdqui: '08-03-2026' , loc: 'Est: 1 - Prat: 2' ,COD:'EXP0042'
    },
    {
        id: 307 , livro_id: 4 , edicao_id: 106 , status:'disponível' , DatAdqui: '08-03-2026' , loc: 'Est: 1 - Prat: 1' ,COD:'EXP0043'
    },
    {
        id: 308 , livro_id: 4 , edicao_id: 106 , status:'indisponível' , DatAdqui: '08-03-2026' , loc: 'Est: 1 - Prat: 1' ,COD:'EXP0044'
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
        id: 316 , livro_id: 8 , edicao_id: 112 , status:'indisponível' , DatAdqui: '14-05-2026' , loc: 'Est: 2 - Prat: 3' ,COD:'EXP0063'
    },
    {
        id: 317 , livro_id: 8 , edicao_id: 112 , status:'indisponível' , DatAdqui: '14-05-2026' , loc: 'Est: 2 - Prat: 3' ,COD:'EXP0064'
    },
    {
        id: 318 , livro_id: 9 , edicao_id: 113 , status:'disponível' , DatAdqui: '27-05-2026' , loc: 'Est: 1 - Prat: 3' ,COD:'EXP0070'
    },
    {
        id: 319 , livro_id: 10 , edicao_id: 114 , status:'indisponível' , DatAdqui: '30-05-2026' , loc: 'Est: 3 - Prat: 1' ,COD:'EXP0071'
    },

];

//Middlewares

//autenticação
function Autenticar(req, res, next){
    const token = req.headers.autorization;

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

    if(
        !livro_id || !ISBN || !editora || !Datpub || !idioma || !edicao ||
        livro_id.trim() == '' || ISBN.trim() == '' || editora.trim() == '' || Datpub.trim() == '' || idioma.trim() == '' || edicao.trim() == ''
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
        livro_id.trim() == '' || edicao_id.trim() == '' || status.trim() == '' || DatAdqui.trim() == '' || loc.trim() == '' || COD.trim() == ''
    ){
        return res.status(400).json({erro: 'Todos os campos são obrigatórios e não podem estar vazios'});
    }
};

//Registra o Log
function RegistrarLog(req, res, next){
    console.log(
        `${new Date().toISOString()} - ${req.method} ${req.originalUrl}`,
        "Autenticação e validação conferidas"
    );
    next();
};

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

//ROTAS POST

//POST para adicionar um novo livro
app.post('/livro',[Autenticar, ValidarLivro, RegistrarLog], (req, res) =>{
    const { titulo, autor, Ano_lancamento, genero, tipo } = req.body;

    if(!titulo || !autor || !Ano_lancamento || !genero || !tipo){
        return res.status(400).json({erro: 'Todos os campos são obrigatórios'});
    }

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
    const { livro_id, ISBN, editora, Datpub, idioma, edicao } = req.body;

    if(!livro_id || !ISBN || !editora || !Datpub || !idioma || !edicao){
        return res.status(400).json({erro: 'Todos os campos são obrigatórios'});
    }

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
    const { livro_id, edicao_id, status, DatAdqui, loc, COD } = req.body;

    if(!livro_id || !edicao_id || !status || !DatAdqui || !loc || !COD){
        return res.status(400).json({erro: 'Todos os campos são obrigatórios'});
    }

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

//Rotas patch

//rota de atualização de livros
app.patch('/livro/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    
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
    
    const PossuiExemplar = Exemplar.some(i => i.livro_id == id);

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

    -POST-

    POST /livro - para adicionar um novo livro
    POST /edicao - para adicionar uma nova edição
    POST /exemplar - para adicionar um novo exemplar

    -PATCH-

    PATCH /livro/:id - rota de atualização de livros
    PATCH /exemplar/:id - atualiza um exemplar, seu staus ou localização que são os dois atributos que podem ser alterados
        
        P.S.: Não existe rota de atualização de edição, pois não faz sentido atualizar uma edição, pois ela é única e não muda

    -DELETE-

    DELETE /livro/:id - rota de exclusão de livro, que não tenham edições ou exemplares associados a eles
    DELETE /edicao/:id - rota de exclusão de edição, que não tenham exemplares associados a ela
    DELETE /exemplar/:id - rota de exclusão de exemplar

    
*/