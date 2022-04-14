const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`hitting route ${req.url}`);
  return next();
})

app.post('/breed', (req, res, next) => {
  console.log(`You are creating a cat profile`);
  console.log(req.body)
  next();
}, (req, res) => {
  // res.sendFile('breed.html', { root: __dirname } )
  res.render('breed', { breed: req.body.breed })
})

app.get('/', (req, res) => {
  // res.sendFile('index.html', { root: __dirname })
  res.render('index');
})

app.listen(3000, () => {
  console.log('Server running at port 3000');
})