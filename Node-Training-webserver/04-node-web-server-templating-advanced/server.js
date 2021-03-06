const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear(); 
});
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));

//register handler
app.get('/', (req, res)=>{
   // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome'
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About page'
        });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Some error occurred'
   });
});

app.listen(3000);