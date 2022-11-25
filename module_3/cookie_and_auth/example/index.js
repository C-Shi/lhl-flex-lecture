const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));


/* ********************************* */
app.post('/login', (req, res) => {
  res.redirect('/');
})

app.post('/logout', (req, res) => {

  res.redirect('/')
})

app.post('/register', (req, res) => {
  res.redirect('/')
})

app.get('/', (req, res) => {

  // pass the user object to the EJS
  res.render('index', { user: null });
})

app.listen(3001, () => {
  console.log('Server running at port 3001');
})
