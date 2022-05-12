const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const myBand = await Band.create({name: 'abraham'})
        expect(myBand.name).toBe('abraham');
        console.log(myBand)
    })
    test('band has a genre', async() =>{
                const myBand = await Band.create({genre: 'lalibela'})
                expect(myBand.genre).toBe('lalibela')
                console.log(myBand)
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const mySingers = await Musician.create({name: 'afro', instrument: 'saxfone'})
        expect(mySingers.name).toBe('afro');
        expect(mySingers.instrument).toBe('saxfone')
        console.log(mySingers)
    })
    test('a band may have many musicians', async() =>{
            const kochaB = await Band.create({name: 'kochaB', genre: 'bati'})

            const teddy = await Musician.create({name: 'teddy', instrument: 'keyboard'})
            const abraham = await Musician.create({name: 'abraham', instrument: 'washint'})
            const epha =await Musician.create({name: 'epha', instrument: 'washint'})

            await kochaB.addMusician(teddy)
            await kochaB.addMusician(abraham)

            await kochaB.addMusician(epha)

            const musicians = await kochaB.getMusicians()

            expect(musicians.length).toBe(3)
            expect(musicians[0] instanceof Musician).toBeTruthy
    })
})