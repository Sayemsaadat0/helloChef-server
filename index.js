const express = require('express')
const cors = require('cors')
const app = express()
const port = 6969
const chef = require('./data/chef.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('server 6969 is working')
})

app.get('/chef', (req,res)=>{
    res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})