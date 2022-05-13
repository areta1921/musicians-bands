const {Sequelize, sequelize} = require('./db');

let Song = sequelize.define('song',{
    artistName: Sequelize.STRING,
    title: Sequelize.STRING,
    
    });
    
    module.exports = {
       Song
    };