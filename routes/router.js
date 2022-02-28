var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
    res.send('노드서버 8080포트에서 데이터 연동된것임 난 리액트내용아님');
})
router.get('/company', function(req, res){
    res.send('localhost:8080/user/company 서버에서 전송된 내용임');
})


module.exports = router;