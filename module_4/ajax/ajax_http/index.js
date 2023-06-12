const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alex', age: 23 },
    { id: 3, name: 'Bob', age: 24}
]

app.get('/users', (req, res) => {
    res.render('users', { users })
})

app.post('/users', (req, res) => {
    users.push({
        id: users.length + 1,
        name: req.body.name,
        age: Number(req.body.age)
    })

    res.render('users', { users })
})

app.get('/users-ajax', (req, res) => {
    res.render('users-ajax', { users })
})

app.post('/users-ajax', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: Number(req.body.age)
    }

    users.push(newUser);

    res.json(newUser)
})

app.listen(3000, () => {
    console.log('app start')
})