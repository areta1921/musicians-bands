const express = require('express')
const {sequelize} = require('./db')
const {Musician, Band} = require('./index.js')

const app = express()

const port = 8080



app.get('/musicians', async(req, res) =>{
    let musicians = await Musician.findAll()
    res.send(musicians)
})


app.get('/bands', async(req,res) =>{
    let bands = await Band.findAll({include: Musician})
    res.json({bands})
})


app.get('/musicians/:id', async(req, res) =>{
const ab = req.params.id
const ac = await Musician.findByPk(ab)
res.json(ac)

})

app.get('/bands/:id', async(req, res) =>{
  const ad = req.params.id
  let av = await Band.findByPk(ad)
  res.json({av})
})


app.listen(port, async() =>{
      await seed()
    console.log(`listining port ${port}`)
})


async function seed() {
  await sequelize.sync({force: true})

const jano = await Band.create({name: 'jano'})

const lk = await Musician.create({name: 'aster'})
const yj = await Musician.create({name: 'abraham'})
const we = await Musician.create({name: 'reta'})
const ad = await Musician.create({name: 'aster'})

const lalibela = await Band.create({name: 'lalibeal'})

const aster = await Musician.create({name: 'aster', age: 34})
const abraham = await Musician.create({name: 'abraham', age: 22})
const reta = await Musician.create({name: 'reta', age: 45})
const kebede = await Musician.create({name: 'kebede', age: 34})

await jano.addMusician(lk)
await jano.addMusician(yj)
await jano.addMusician(we)
await jano.addMusician(ad)


await lalibela.addMusician(aster)
await lalibela.addMusician(abraham)
await lalibela.addMusician(reta)
await lalibela.addMusician(kebede)

console.log('musicians and band added to the db!!');

}
