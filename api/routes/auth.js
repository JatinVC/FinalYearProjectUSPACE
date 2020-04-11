var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const jwtSecret = 'Jatintinislitboi';

// signup refactor for frontend react
router.post('/signup', (req, res, next) =>{
    var username = req.body.username;
    var plainPassword = req.body.password;
    var name = req.body.firstName + ' ' + req.body.lastName;
    var email = req.body.email;
    var studentId = req.body.studentId;
    bcrypt.genSalt(saltRounds, (err, salt)=>{
        bcrypt.hash(plainPassword, salt, (err, hash)=>{
            var sql = "INSERT INTO `users`(`realname`,`username`,`password`, `user_email`, `user_stid`, `user_role`) VALUES ('" + name + "','" + username + "','" + hash + "','" + email + "','" + studentId + "','"+3+"')";
            db.query(sql, (err, result)=>{
                if(result){
                    res.json({
                        success: true,
                        message: 'User registered',
                        user: result[0]
                    });
                }else{
                    res.status(400).json({
                        success: false,
                        message: 'User not registered'
                    })
                }
            });
        })
    })
});

//Login refactor
router.post('/login', (req, res, next)=>{
    let username = req.body.username;
    let password = req.body.password;
    let sql="SELECT user_stid, username, password, user_role FROM `users` WHERE `username`='"+username+"'";
    db.query(sql, (err, results)=>{
        if(results){
            bcrypt.compare(password, results[0].password, (err, result)=>{
                if(result){
                    var user = {
                        username: results[0].username, 
                        userrole: results[0].user_role
                    }

                    var token = jwt.sign(user, jwtSecret, {
                        algorithm: 'HS256',
                        expiresIn: 60*60*24 //expires in a day
                    });

                    res.cookie('token', token, {maxAge: 60*60*24*1000});
                    res.json({
                        success: true,
                        message: 'User Authenticated',
                        token: token
                    });
                }else{
                    res.status(401).json({
                        success: false,
                        message: 'User Authentication Failed',
                        error: err
                    });
                }
            });
        }else{
            res.status(401).json({
                success: false,
                message: 'User Authentication Failed',
                error: err
            });
        }
    });

});

//logout refactor
router.get('/logout', (req, res, next)=>{
    res.clearCookie('token');
});

//check if token is authorized

module.exports.router = router;