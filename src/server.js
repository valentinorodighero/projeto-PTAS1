import app from './app.js';

app.listen(PORT, () =>{
    console.log(
        `Servidor ouvindo na porta: http://localhost:${PORT}`
    );
});