
const {Band} = require('./Band')
const {Musician} = require('./Musician')
const{Song} = require('./Song')



Musician.belongsTo(Band)
Band.hasMany(Musician)

Song.belongsToMany(Band,{through: 'bandSong'})
Band.belongsToMany(Song,{through: 'bandSong'})


module.exports = {
    Band,
    Musician,
    Song
};