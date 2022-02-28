var express = require('express');
var projectlink = require('./routes/router');
var app = express();

app.get('/', function(req, res){
    res.send('localhost:8080/ 글자노출하게됨');
})
app.use('/user', projectlink);

app.listen(8080, function(){
  console.log('서버구동확인콘솔정보출력')
});
