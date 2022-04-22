const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const users = require('./utils/db');
const userHelper = require('./utils/userHelper')(users);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/breed', (req, res) => {
  res.render('breed', { breed: req.body.breed })
})

app.post('/login', (req, res) => {
  // set cookie in response
  const email = req.body.email;
  const password = req.body.password;
  const user = userHelper.loginUser(email, password);
  if (user) {
    res.cookie('user_id', user.id)
  }
  res.redirect('/');
})

app.post('/logout', (req, res) => {
  res.clearCookie('user_id')
  res.redirect('/');
})

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const user = userHelper.registerUser(name, email, password);
  res.cookie('user_id', user.id).redirect('/')
})

app.get('/', (req, res) => {
  const user = userHelper.findUser(req.cookies.user_id)
  res.render('index', { name: user ? user.name : undefined });
})

app.listen(3000, () => {
  console.log('Server running at port 3000');
})