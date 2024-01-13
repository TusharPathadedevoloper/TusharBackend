
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tushar', (req, res) => {
    res.send('Hello Tushar!')
  })

 app.get('/login', (req, res) => {
    res.send('<h1>please login for further process</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})