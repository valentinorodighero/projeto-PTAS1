import express from "express";

import livroRoutes from "./routes/livroRoutes.js";
import edicaoRoutes from "./routes/edicaoRoutes.js";
import exemplarRoutes from "./routes/exemplarRoutes.js";
import leitorRoutes from "./routes/leitorRoutes.js";
import emprestimoRoutes from "./routes/emprestimoRoutes.js";

const app = express();

app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
    res.send("Biblioteca está no ar");
});

// Rotas do sistema
app.use("/livro", livroRoutes);

app.use("/edicoes", edicaoRoutes);

app.use("/exemplares", exemplarRoutes);

app.use("/leitores", leitorRoutes);

app.use("/emprestimos", emprestimoRoutes);

// Tratamento para rota inexistente
app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não existente",
        metodo: req.method,
        rota: req.originalUrl
    });
});

export default app;