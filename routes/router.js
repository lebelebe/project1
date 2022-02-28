var express = require('express')
var router = express.Router();

router.get('/', function(req, res){
    res.send('얘는 /user');
});
router.get('/company', function(req, res){
    res.send('얘는 /user/company');
});




module.exports = router;