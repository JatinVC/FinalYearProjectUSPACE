var router = require('express').Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;

//signup
router.get('/signuppage', (req, res, next)=>{
    let message = '';
    res.render('signup', {message});
});
router.post('/signup', (req, res, next)=>{
    var message = '';
    var post = req.body;
    var uname = post.username;
    var pass = post.password;
    var name = post.firstname + " " + post.lastname;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(pass, salt, function(err, hash) {
            var sql = "INSERT INTO `users`(`realname`,`username`,`password`) VALUES ('" + name + "','" + uname + "','" + hash + "')";
            db.query(sql, function(err, result) {
                message = "Success, Your account has been cweated UWU";
                res.render('signup',{message: message});
             });
        });
    });
});

//login
router.post('/login', (req, res, next)=>{
    var message = '';
    var sesh = req.session;
    var post = req.body;
    var username = post.username;
    var password = post.password;

    var sql="SELECT stid, username, password FROM `users` WHERE `username`='"+username+"'";                           
    db.query(sql, (err, results)=>{
        if(results){
            bcrypt.compare(password, results[0].password, function(err, result) {
                // result == true
                if(result){
                    global.userId = results[0].stid;
                    global.user = results[0].username;
                    console.log(results[0].stid);
                    res.redirect('/home/'+userId);
                }else{
                    message = 'Wrong Credentials';
                    res.render('login', {message});
                }
            });
        }else{
            message = 'Wrong Credentials';
            res.render('login', {message});
        }
        if(err){
            message = 'Wrong Credentials';
            res.render('login', {message});
        }
    });
});

//landing page functionality
router.get('/home/:stid', (req, res, next)=>{
    let stid = req.params.stid;

    res.render('dashboard', {stid});

});

//logout
router.get('/home/logout', (req, res, next)=>{
    req.session.destroy((err)=>{
        res.redirect('/');
    });
});

module.exports.router = router;