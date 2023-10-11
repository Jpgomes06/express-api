class ApiError extends Error { //A classe ApiError esta herdando (pegando emprestado) tudo que tem na classe erro
  constructor(message, statusCode) { //A classe pai (Error) tem um construtor que a classe filho ApiError usa como modelo para as suas chamadas
    super(message); //chama o construtor da classe pai (Error) com o parâmetro message
    this.statusCode = statusCode;
  }
};

module.exports = ApiError;
