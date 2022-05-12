const {sequelize, DataTypes, Model} = require('./db');

const { Musician } = require('./Musician');
const { Band } = require('./Band');


//Create our Association!
Musician.belongsTo(Band) //adds a foreign key on the musician table, for the band they belong to
Band.hasMany(Musician) //gives us Sequelize magic methods

module.exports = { Musician, Band }; // make sure we export our models with the associations added!