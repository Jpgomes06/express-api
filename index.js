const express = require('express'); // importa o express
const userRouter = require('./src/routes/users')

const server = express(); // cria uma variável chamada server que chama a função express

server.use(express.json()); //use = servidor use isso//utilize o que está no ()

server.use('/users', userRouter);  
//no use é possivel passar um parâmetro extra, todas as rotas que estão no userRouter
//são derivadas da rota anteriores, ou seja, as checklists

server.listen(3000, () => { 
    console.log("Servidor iniciado")  
}); // faz com que o servidor seja executado na porta 3000 do seu localhost:3000


// frameworks - conjunto de bibliotecas (funcionalidades)
// biblioteca - conjunto de funcionalidades
// API - interface pro meu back end ---------- interface de audio 
// (GET - é uma entrada no aparelho, post - é uma entrada no aparelho...)
