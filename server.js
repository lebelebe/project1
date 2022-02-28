var express = require('express');
var projectlink = require('./routes/router');
var reactdata = require('./routes/react')
var app = express();

var portnum = 8080;

app.listen(portnum, function(){
    console.log('서버구동');
});

app.get('/', function(req, res){
    res.send('글자노출해봄');
});
app.use('/user', projectlink);

app.use('/react', reactdata);

