require("express-async-errors");

/* essa lib permite que você use funções assíncronas diretamente 
facilitando o tratamento de erros assíncronos
*/
const express = require("express");
const userRouter = require("./routes/userRoutes");
const errorHandler = require("./middlewares/error");
const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use(errorHandler);

app.listen(8080, () => { 
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
