const {sequelize} = require("./db");

const {Musician, Band} = require("./index") // pull them from index, where we make our association

// const {Band} = require('./Band') //why is this bad? Because our Band doesn't have an association here!

//Destructuring Syntax
// const {banana} = require('./fruit')

// const banana = require('./fruit').banana

describe('Musician Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a musician', async() => {
		const testMusician = await Musician.create({name : 'Prince'})
		expect(testMusician.name).toBe('Prince')
	})

	test('musicians can play an instrument', async () => {
		const testMusician = await Musician.create({name: 'Jimi Hendrix', instrument : "Guitar"});
		expect(testMusician.instrument).toBe('Guitar');
	})

	test('can create a band', async () => {
		const testBand = await Band.create({name : 'TLC'})
		expect(testBand.name).toBe('TLC')
	})

	test('bands have a genre', async() => {
		const testBand = await Band.create({name : 'Spice Girls', genre : 'Pop'})
		expect(testBand.genre).toBe('Pop')
	})

	test('Bands can have many musicians', async () => {
		const BTS = await Band.create({name : 'BTS', genre : 'Pop'})

		const jungkook = await Musician.create({name : 'Jungkook', instrument : 'vocals'});
		const jimin = await Musician.create({name : 'Jimin', instrument : 'vocals' });
		const suga = await Musician.create({name : 'Suga', instrument : 'rap'});

		await BTS.addMusician(jungkook) //addMusician is a 'magic method' we get from Sequelize, once we declare an association
		await BTS.addMusician(jimin)
		await BTS.addMusician(suga)

		const musicians = await BTS.getMusicians() // another association 'magic method'

		expect(musicians.length).toBe(3)
		expect(musicians[0] instanceof Musician).toBeTruthy

	})
    // test('deleting an instance', async() =>{
    //     const deletTest = await Band.create({name: 'absho'})
    //     console.log(deletTest.name)
    //     await absho.destroy()
    //     expect(deletTest.name).toBe(destroy)
    // })
	

})