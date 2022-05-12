const {Sequelize, DataTypes, Model} = require('sequelize');

// Creates a database named 'sequelize'
// Lets us add our models (tables) later!

const sequelize = new Sequelize('database', 'username','password', {
	dialect: 'sqlite', // what type of sql?
	storage : './music.sqlite', //file location for our db
	logging: false
} )



module.exports = {sequelize, DataTypes, Model};