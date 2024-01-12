require('dotenv').config()
const express = require('express');
const { Pool } = require('pg')

const app = express();

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE
})


// List all students
app.get('/students', (req, res) => {
  // SELECT * FROM students
  pool.query(`SELECT students.id, students.name, email, year, gpa, majors.name as major FROM students 
    LEFT JOIN majors ON students.major_id = majors.id 
    ORDER BY students.id`
  )
  .then(results => {
    console.log(results.rows)
    res.render('index', { students: results.rows })
  })
});

// Get edit form for a student
app.get('/students/:id/edit', (req, res) => {
  // SELECT * FROM students WHERE id = ?
  const id = req.params.id
  Promise.all([
    pool.query(`SELECT * FROM students WHERE id = $1`, [id]),
    pool.query(`SELECT * FROM majors`)
  ])
  .then(([students, majors]) => {
    res.render('edit', { student: students.rows[0], majors: majors.rows })
  })
});

// Create a student
app.post('/students', (req, res) => {
  // INSERT INTO students (name, email, year, gpa) VALUES (*, *, *, *);
  const { name, email, year, gpa } =  req.body
  pool.query(`INSERT INTO students (email, name, year, gpa) VALUES ($1, $2, $3, $4);`, [email, name, year, gpa])
  .then(() => {
    res.redirect('/students')
  })
});

// Update a student
app.post('/students/:id', (req, res) => {
  // UPDATE students SET email = ?, name = ?, year = ?, gpa = ? WHERE id = ?
  const id = req.params.id;
  const { name, email, year, gpa, major_id } = req.body;
  pool.query(`
    UPDATE students SET email = $1, name = $2, year = $3, gpa = $4, major_id = $5
    WHERE id = $6`
  , [email, name, year, gpa, major_id, id]).then(() => {
    res.redirect('/students');
  })
});

// Delete a student
app.post('/students/:id/delete', (req, res) => {
  // DELETE FROM students WHERE id = ?
  const id = req.params.id
  pool.query('DELETE FROM students WHERE id = $1', [id])
  .then(() => {
    res.redirect('/students')
  })
});


app.get('/', (req, res) => {
  res.redirect('/students')
})

app.listen(3000, () => {
  console.log('Server Start at 3000');
})