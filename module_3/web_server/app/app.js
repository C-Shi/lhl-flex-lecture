// config
const express = require('express')
const app = express()
const port = 3000

// route
app.get('/', (req, res) => {
   // req => request -> contains all information from clients

   // res => response -> contains all information from us, going out
   res.send('<h1>Hello World!!!</h1>')
})

// start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})