var router = require('express').Router();

//TODO: let user view and change data
router.get('/profile/:stid', (req, res, next)=>{
    var sql = `SELECT * FROM users WHERE stid='${req.params.stid}'`;
    db.query(sql, (err, results)=>{
        if(results){
            res.render('profile', {results});
        }
    });
});

router.get('/changeprofile/:stid', (req, res, send)=>{
    
});
module.exports.router = router;