const express = require('express');
const { Pool } = require('pg');
const config = require('./config');

const app = express();
const pool = new Pool(config);

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');

// List all students
app.get('/students', (req, res) => {
  pool.query('SELECT * FROM students ORDER BY id;')
    .then(result => {
      students = result.rows
      res.render('index', { students })
    })
});

// Get edit form for a student
app.get('/students/:id/edit', (req, res) => {
  pool.query(`SELECT * FROM students WHERE id = $1;`, [req.params.id])
    .then(result => {
      student = result.rows[0]
      res.render('edit', { student })
    })
});

// Create a student
app.post('/students', (req, res) => {
  const { name, email, year, gpa } = req.body;
  pool.query('INSERT INTO students (name, email, year, gpa) VALUES ($1, $2, $3, $4);', [name, email, year, gpa])
    .then(result => {
      res.redirect('back')
    })
});

// Update a student
app.post('/students/:id', (req, res) => {
  const { name, email, year, gpa } = req.body;
  pool.query('UPDATE students SET name = $1, email = $2, year = $3, gpa = $4 WHERE id = $5;', [name, email, year, gpa, req.params.id])
    .then(result => {
      res.redirect('/students')
    })
});

// Delete a student
app.post('/students/:id/delete', (req, res) => {
  pool.query('DELETE FROM students WHERE id = $1', [req.params.id])
    .then(result => {
      res.redirect('/students')
    })
});


app.get('/', (req, res) => {
  res.redirect('/students')
})

app.listen(3000, () => {
  console.log('Server Start')
})