import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

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
]
app.get("/", (req, res) => {
    res.send("Bem-vindo à API da biblioteca!");
});

app.get("/leitores", (req, res) => {
    res.json(leitores);
});

app.get("/leitores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const leitor = leitores.find(l => l.id === id);
    if (!leitor) 
        return res.status(404).send("Leitor não encontrado.");
    
    res.json(leitor);
});

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

app.delete("/leitores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const indice = leitores.findIndex(l => l.id === id);
    if (indice === -1) {
        return res.status(404).send("Leitor não encontrado.");
    }

    leitores.splice(indice, 1);

    res.json({ error: "Leitor removido com sucesso." });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});