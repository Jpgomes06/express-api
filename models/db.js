const { dotenv } = require('dotenv');
const { Sequelize } = require('sequelize');

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

// sequelize.authenticate()//função para verificar a conexão com o bando de dados
// .then(function(){
//     console.log("conexão com o banco de dados realizada com sucesso!")
// }).catch(function(){
//     console.log("Erro: conexão com o banco de dados nao realizada com sucesso!")
// })  //essa função authenticate só é usada para testar se a api conectou com o banco, ou seja, usa-se ela quando estiver desenvolvendo a api somente

module.exports = sequelize




// const sequelize = new Sequelize('users', 'root', 'dev123', {
//     host: 'localhost',
//     dialect: 'mysql'
// });




//const sequelize = new Sequelize('database', 'username', 'password', {
   // host: 'localhost',
   //dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//});  