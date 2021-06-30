const express = require('express')
const app = express()
const port = 30010

app.get('/', (req, res) => {
  res.send('Hello World! Nice Working  i love this system')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})