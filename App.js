const config =  require('./config');
const path = require('path');
const methodOverride = require('method-override')
const express = require('express');
const app = express();

let connectdb = require('./connections/db')
connectdb()
let Register = require('./connections/data')

app.use(express.static(path.join(__dirname, 'public')))

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))

// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


var data = require('./news.json');

var news = []
    for (let i =0; i<Object.getOwnPropertyNames(data).length; i++){
        news.push(data[i]);
    }


app.get('/games', (req, res) => {
    // res.render('games');
    res.render('games1');
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
    res.render('login', {Invalid : ""});
})


app.post('/login', async (req, res) => {
    try{
        const{ email,password } = req.body;  
        const check = await Register.findOne({useremail:email});
        console.log(check.userpassword)
        console.log(password)
    if(check.userpassword === password){
        res.render("home")
       }else{
        // alert("Invalid Credentials")
        res.render("login", {Invalid : "Incorrect Password"})
    }

    }
    catch(error){
        res.render("login", {Invalid : "Invalid Credentials"})
    }
})


app.get('/register', (req, res) => {
    res.render('register', {Invalid : ""});
})


app.post('/register', async (req, res) => {
    try{
        const{ name,email,password } = req.body;
        console.log(`${name}  -  ${email}  -  ${password}`)
        var regex = /^(?!.{a-zA-Z})(\w+\s+\w+ ?)$/;
        if (regex.test(name) == false){
            res.render("register", {Invalid : "Invalid Name"})
            return;
        }
        const User = Register({
            username: name,
            useremail: email,
            userpassword: password
        })
        // console.log(User);
        const registered = await User.save();
        // console.log(`${name}  -  ${email}  -  ${password}`)
        res.render("home");
    }
    catch(error){
        res.render("register", {Invalid : `${error}`})
    }
})


app.get('*', (req, res) => {
    found = []
    found.push({ content: '', title: 'Sorry, but nothing matched your search terms.', image:'https://cdn-icons-png.flaticon.com/512/6134/6134116.png' });
    head = "404 Not Found";
    res.render('search', {found,head})
})


app.listen(config.port, () => {
    console.log(`LISTENING ON PORT ${config.port}`)
})