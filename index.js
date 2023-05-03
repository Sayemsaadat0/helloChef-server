const express = require('express')
const cors = require('cors')
const app = express()
const port = 6969
const chef = require('./data/chef.json')
const chefRecipe = require('./data/chefRecipe.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('server 6969 is working')
})

app.get('/chef', (req,res)=>{
    res.send(chef)
})

app.get('/chefRecipe', (req,res)=>{
    res.send(chefRecipe)
})
app.get('/chefRecipe/:id', (req,res)=>{
   const id = req.params.id
  const selectedchef = chefRecipe.find(c => c._id === id)
  res.send(selectedchef)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})