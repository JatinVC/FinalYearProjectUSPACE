//Get Home Page
var router = require('express').Router();

router.get('/', (req, res, next)=>{
    var message='';
    res.render('login', {message});
});

module.exports.router = router;
