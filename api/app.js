const express = require('express')
    , http = require('http')
    , path = require('path');
const app = express();
const session = require('express-session');
const sql = require('mysql');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cookies = require('cookies');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var connection = sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'hkuforum'
});
connection.connect();
global.db = connection;

var server = http.createServer((req, res)=>{
    var cookies = new cookies(req, res);
    var lastVisit = cookies.get('LastVisit', {signed: true});

    cookies.set('lastVisit', new Date().toISOString(), {signed: true});
    if(!lastVisit){
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome, first time visitor!');
    }else{
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome back! Nothing much has changed since your last visit at ' + lastVisit + '.');
    }
});

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//router routes
var post = require('./routes/posts');
var index = require('./routes/index');
var auth = require('./routes/auth');
var user = require('./routes/user');

//routing the mounting
app.use('/api', post.router);
app.use('/', index.router);
app.use('/', auth.router);
app.use('/', user.router);


module.exports = app;
app.listen(8080);