// const http = require('http');
// const hostname = '127.0.011'
// const port = 3000
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader =('Content-Type', 'text/plain')
//   res.end('Hello World\n <h1>How this possible</h1>')
// })
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })



// Node js Basick Tutorials

// const express = require('express');
// const app = express()
// const port = 3000
// app.get('/', (req, res) => {
//     res.send('<h1>Welcome For Learning Node js</h1>')
// })
// app.listen(port, () => {
//     console.log(`Example app listerr http://localhost:${port}`)
// })

// const express = require('express');
// const app = express()
// const port = 3000

// app.get('/users/:id', (req, res) => {
//     const userId = req
//     console.log(req.params.id);
// })
// app.get ('/', (req, res) => {
//     res.send('Hello World 40000 ')
// })
// app.listen(port, () => {
//     console.log(`Example app listerr http://localhost:${port}`)
// })

// ================================

const s1 = require('./Lesson1/student');
console.log(s1.getName());
console.log(s2, s1.getAge)