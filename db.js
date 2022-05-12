const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize('ab-db','areta','Zeko@0922',{
    dialect: 'sqlite',
    storage: './sqlite',
    logging: false

})



module.exports = {
    sequelize,
    Sequelize
};