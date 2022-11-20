const express = require('express')
const app = express() // app is an object that manage all http traffic

const fruits = ['apple', 'orange', 'pineapple', 'banana', 'peach']

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use((req, res, next) => {
  console.log('Getting a request')
  next()
})

app.get('/', (req, res) => {
  res.render('index', { fruits });
  // res.sendFile('/index.html', { root: __dirname })
})

app.get('/:fruit', (req, res) => {
  res.render('fruit', { fruit: req.params.fruit })
  // res.sendFile(`/${req.params.fruit}.html`, { root: __dirname})
})




app.listen(3000, () => {
  console.log('Server Start 3000')
})