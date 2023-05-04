const express = require('express')
const cors = require('cors')
const app = express()
const port = 6969
const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json')


app.use(cors())

app.get('/', (req, res) => {
  res.send('server 6969 is working')
})

app.get('/chef', (req,res)=>{
    res.send(chef)
})


app.get('/chefData/:id', (req,res)=>{
   const getId = req.params.id
   const id=parseInt(getId);
  const selectedchef = chef.filter(c => c.id === id);
  console.log(selectedchef)
  res.send(selectedchef)
});

app.get('/recipe', (req,res)=>{
  res.send(recipe)
})

 app.get('/recipe/:id', (req,res)=>{
   const recipeID = req.params.id
   const id=parseInt(recipeID);
  const selectedchef = recipe.filter(c => parseInt(c.chefId) === id);
  console.log(selectedchef)
  res.send(selectedchef)
});
 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})