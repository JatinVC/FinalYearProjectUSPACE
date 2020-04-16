var router = require('express').Router();
var bcrypt = require('bcrypt');
var saltRounds=10;

//get user profile
router.get('/profile/:user_id', (req, res, next)=>{
    var sql = `SELECT * FROM users WHERE user_id='${req.params.user_id}'`;
    db.query(sql, (err, results)=>{
        if(results){
            res.json({
                success: true,
                account: results
            });
        }else{
            res.json({
                success: false,
                message: 'Not able to find account'
            });
        }
    });
});

//change password
router.post('/changepassword/:user_id', (req, res, next)=>{
    let plainPassword = req.body.password;
    bcrypt.genSalt(saltRounds, (err, salt)=>{
        bcrypt.hash(plainPassword, salt, (err, hash)=>{
            var sql = `UPDATE users SET password=? WHERE (user_id="${req.params.user_id}")`;
            db.query(sql, [hash], (err, results)=>{
                if(results){
                    res.json({
                        success: true,
                        message: 'password updated manually'
                    });
                }else{
                    res.status(401).json({
                        success: false,
                        message: 'error'
                    });
                }
            });
        });
    });
});

// change approved by mod value
router.post('/approve/:user_id', (req, res, next)=>{
    let approveValue = 1;
    var sql = `UPDATE users SET approved_by_mod=? WHERE(user_id='${req.params.user_id}')`;
    db.query(sql, [approveValue], (err, results)=>{
        if(results){
            res.json({
                success: true,
                message: 'User Approved'
            });
        }else{
            res.status(403).json({
                success: false,
                message: 'Error approving user'
            })
        }
    });
});

// change user role for admin only
router.post('/changerole/:user_id/torole/:newrole', (req, res, next)=>{
    var sql = `UPDATE users SET user_role=? WHERE(user_id='${req.params.user_id}')`;
    db.query(sql, [req.params.newrole], (err, results)=>{
        if(results){
            res.json({
                success: true,
                message: 'Role changed'
            });
        }else{
            res.status(403).json({
                success: false,
                message: 'Unable to change role'
            });
        }
    });
});

//get all users
router.get('/getusers', (req, res, next)=>{
    var sql = `SELECT * FROM users`;
    db.query(sql, (err, results)=>{
        if(results){
            res.json({
                success: true,
                users: results
            });
        }else{
            res.status(500).json({
                success: false,
                message: 'could not get users'
            });
        }
    });
});

module.exports.router = router;