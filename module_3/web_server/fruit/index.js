const express = require('express');
const app = express();
let port = 3000;

// config for EJS template
app.set('view engine', 'ejs');

// public folder
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`reaching URL: ${req.url}`)
    next()
})


app.get('/', (req, res) => {
    // use res because it is information going out
    res.render('index');
})

app.get('/:fruit', (req, res) => {
    let currentFruit = req.params.fruit // apple

    console.log('this is not in middleware')

    res.render('fruit', { fruit: currentFruit, developer: 'Cheng Shi' }) // { fruit: 'apple' }
})

app.listen(port, () => {
    console.log(`server start at port ${port}`)
})

