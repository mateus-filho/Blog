const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../db/connection.js');

// Define o modelo de dados para a tabela 'posts' no banco de dados
const Posts = connection.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false     
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

// Exporta o modelo de dados para ser utilizado em outras partes da aplicação
module.exports = Posts;