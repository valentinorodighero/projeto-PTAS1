API da Biblioteca 
API feita com Node.js e Express para gerenciar livros, edições, exemplares, leitores e empréstimos. 
Como executar 
npm install
node app.js

A API ficará disponível em http://localhost:3000. O projeto usa módulos ES, então o package.json deve conter "type":
"module". 
Os dados ficam em arrays na memória e são perdidos quando o servidor é reiniciado. 
Autenticação 
As rotas POST /livro, POST /edicao, POST /exemplar e POST /emprestimo exigem o cabeçalho: 
Authorization: Bearer biblioteca123

Endpoints 
Base URL: http://localhost:3000

Método Endpoint Descrição
GET / Verifica se a API está funcionando.
GET /livro Lista e filtra livros por título, autor, ano, gênero ou tipo.
GET /livro/:id Busca livro por ID.
GET /livro/:id/detalhes Mostra livro, edições e exemplares associados.
GET /livro/:id/disponibilidade Consulta exemplares disponíveis de um livro.
POST /livro Cadastra livro.
PATCH /livro/:id Atualiza dados de um livro.
DELETE /livro/:id Exclui livro sem edições ou exemplares associados.
GET /edicoes Lista edições.
GET /edicoes/isbn/:isbn Busca edição por ISBN.
POST /edicao Cadastra edição.DELETE /edicao/:id Exclui edição sem exemplares associados.
GET /exemplares Lista todos os exemplares.
GET /exemplares/disponiveis Lista exemplares disponíveis.
POST /exemplar Cadastra exemplar.
PATCH /exemplar/:id Atualiza status e/ou localização.
DELETE /exemplar/:id Exclui exemplar.
GET /leitores Lista leitores.
GET /leitores/:id Busca leitor por ID.
POST /leitores Cadastra leitor.
PUT /leitores/:id Atualiza dados do leitor.
DELETE /leitores/:id Exclui leitor.
GET /emprestimos Lista empréstimos.
GET /emprestimos/leitor/:id Lista empréstimos de um leitor.
GET /emprestimos/pendentes Lista empréstimos em andamento.
POST /emprestimo Registra empréstimo.
PATCH /emprestimos/:id/devolver Registra devolução. 

Exemplos de requisição 
Para enviar dados, use Body → raw → JSON no Postman. 
POST /leitores json { "nome": "Maria Silva", "email": "maria@email.com", "telefone": "99999-2222" } 
POST /emprestimo (também exige o token) json { "leitor_id": 1, "exemplar_id": 301 } 
PATCH /livro/1 json { "titulo": "Novo título" }Regras de empréstimo 
Enciclopédias não podem ser emprestadas.
Cada leitor pode ter até três empréstimos em andamento.
O exemplar precisa estar disponível e o leitor cadastrado.
Leitores com multa ou empréstimo atrasado não podem realizar novo empréstimo.
O prazo de devolução é definido para sete dias após o empréstimo. 

Respostas HTTP 
200: operação concluída.
201: registro criado.
400: dados inválidos ou regra de negócio não atendida.
401: token não fornecido.
403: token inválido.
404: registro ou rota não encontrada. 

Observações 
Os endpoints devem ser chamados exatamente como estão escritos na tabela. Por exemplo, o cadastro usa /emprestimo no
singular, mas as consultas usam /emprestimos.
A devolução altera o status do empréstimo e libera o exemplar, mas não calcula automaticamente multa por atraso.
