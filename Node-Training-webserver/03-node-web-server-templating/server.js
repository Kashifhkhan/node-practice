const express = require('express');
//require hbs

var app = express();

//set hbs as view engine

app.use(express.static(__dirname+'/public'));

//register handler
app.get('/', (req, res)=>{
    //render home.hbs and pass few attribute values
});

app.get('/about', (req, res)=>{
    //render about.hbs and pass few attribute values
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Some error occurred'
   });
});

app.listen(3000);