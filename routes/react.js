var express = require('express')
var react = express.Router();


react.get('/me', function(req, res){
    res.send('나의소개');
});
react.get('/portfolio', function(req, res){
    res.send('포트폴리오');
});
react.get('/preinterview', function(req, res){
    res.send('사전면접');
});
react.get('/contact', function(req, res){
    res.send('면접제안');
});



module.exports = react;

