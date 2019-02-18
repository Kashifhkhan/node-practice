let express = require('express');
let app = express();

app.get('/', function(req,res){
    res.send('Hello world!')
});

app.listen(8080, ()=> console.log('listing 8080'));