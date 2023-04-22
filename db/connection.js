const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'blog.sqlite'
});

module.exports = connection;