const express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

//register handler
app.get('/', (req, res)=>{
   // res.send('<h1>Hello Express!</h1>');
   res.send({
        name: 'Vikas',
        likes: ['Biking', 'Cities']
   });
});

app.get('/about', (req, res)=>{
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Some error occurred'
   });
});

app.listen(3000);