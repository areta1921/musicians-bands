const {sequelize} = require('./db');
const {Band, Musician,Song} = require('./index')

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
        Band.findAll({
            where:{
                 name: 'abraham'
            }
        })
        console.log(myBand.toJSON())
    })
    test('band has a genre', async() =>{
                const myBand = await Band.create({genre: 'lalibela'})
                expect(myBand.genre).toBe('lalibela')
                // console.log(myBand)
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const mySingers = await Musician.create({name: 'afro', instrument: 'saxfone'})
        expect(mySingers.name).toBe('afro');
        expect(mySingers.instrument).toBe('saxfone')
        // console.log(mySingers)
    })
    
    test('update the name field', async() =>{
    const nani = await Musician.update({name: 'nani'},{
        where: {
            name: null
        }
    }) 
    console.log(nani)
    
    })
    test('delet the filed data', async() =>{
     const jambo = await Musician.create({name: 'jambo'})
     await jambo.destroy()
    })

    test('find all data', async() =>{
      const abc = await Band.create({name: 'ABRAHAM',genre: 'alawkewum'})
      Band.findAll()
    //   console.log(abc.toJSON());
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
              

                        let  b = await Band.findAll({include: Musician})
                        console.log('my test******',b)
            expect(musicians.length).toBe(3)
            expect(musicians[0] instanceof Musician).toBeTruthy
           
    })

            test('can create songs', async() => {
                const song1 = await Song.create({title: 'lu', year: 1992})
                expect(song1.title).toBe('lu')
                expect(song1.year).toBe(1992)
                console.log(song1.toJSON())
            })
            test('many to many relationship', async() =>{
                song2 = await Song.create({title: 'fiker', year: 2002})
                expect(song2.title).toBe('fiker')
                expect(song2.year).toBe(2002)
                console.log(song2.toJSON())
            })
        

})