const config =  require('./config');
const path = require('path');
const methodOverride = require('method-override')
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, 'public')))

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'))
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


var data = require('./news.json');

var news = []
    for (let i =0; i<Object.getOwnPropertyNames(data).length; i++){
        news.push(data[i]);
    }


app.get('/games', (req, res) => {
    res.render('games');
})

app.get('/title/:id', (req, res) => {
    const { id } = req.params;
    const newz = news.find(c => c.num === parseInt(id));
    res.render('newsBYid', {newz});
})


app.get('/news', (req, res) => {
    var info = []
    for (let i =0; i<5; i++){
        info.push(data[i]);
    }
    res.render('news', {news});
})


app.get('/allnews', (req, res) => {
    res.render('allnews',{news});
})


app.get('/', (req, res) => {
    res.render('home');
})


app.post('/search', (req, res) => {
    // console.log(req.body);
    const{search:s} = req.body;
    // console.log(s); 
    var found = [];
    var head = `Search Results for: ${s}`;
    for(let newz of news){
        // console.log(newz);
        if ((newz.title.toUpperCase()).includes(s.toUpperCase())){
            // console.log('***********************');
            found.push(newz);
        }
    }
    if(found.length === 0){
        found.push({ content: '', title: 'Sorry, but nothing matched your search terms.', image:'https://cdn-icons-png.flaticon.com/512/6134/6134116.png' });
        head = "Nothing Found";

    }
    // console.log(found);
    res.render('search', {found,head})  
})


app.get('/login', (req, res) => {
    res.render('login');
})


app.get('/register', (req, res) => {
    res.render('register');
})


app.listen(config.port, () => {
    console.log(`LISTENING ON PORT ${config.port}`)
})