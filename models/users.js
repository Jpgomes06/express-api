const Sequelize = require("sequelize");
const db = require('./db');

const User = db.define("social-dev", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    full_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true      
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true      
    },
    birth_date: {
        type: Sequelize.DATEONLY,
        allowNull: false             
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false             
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false             
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    zip_code: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    profile_image: {
        type: Sequelize.STRING,
        allowNull: false 
    }
}, {
    timestamps: false // Desabilita as colunas createdAt e updatedAt
});

// User.sync(); //a função sync() cria a tabela no banco de dados caso nao esteja criada

module.exports = User;
