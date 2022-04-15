const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/breed', (req, res) => {
  res.render('breed', { breed: req.body.breed })
})

app.post('/login', (req, res) => {
  console.log(req.body)
  res.redirect('/');
})

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000, () => {
  console.log('Server running at port 3000');
})