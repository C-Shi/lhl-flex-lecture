
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');


// List all students
app.get('/students', (req, res) => {
  res.render('index', { students: [] })
});

// Get edit form for a student
app.get('/students/:id/edit', (req, res) => {
  res.render('edit', { student: {} })
});

// Create a student
app.post('/students', (req, res) => {
  res.redirect('/students')
});

// Update a student
app.post('/students/:id', (req, res) => {
  res.redirect('/students')
});

// Delete a student
app.post('/students/:id/delete', (req, res) => {
  res.redirect('/students')
});


app.get('/', (req, res) => {
  res.redirect('/students')
})

app.listen(3000, () => {
  console.log('Server Start at 3000');
})