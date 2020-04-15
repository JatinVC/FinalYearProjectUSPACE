const express = require('express')
    , http = require('http')
    , path = require('path');
const app = express();
const sql = require('mysql');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

var connection = sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'hkuforum'
});
connection.connect();
global.db = connection;

var server = http.createServer(app);
server.listen(8000);

//allowing requests CORS (Cross origin resource sharing)
app.use(function(req, res, next) {
    app.options('*', cors());
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Referer, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
  });

app.set('port', process.env.PORT || 8000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

//router routes
var post = require('./routes/posts');
var auth = require('./routes/auth');
var user = require('./routes/user');
var groupmanager = require('./routes/groupmanager');

//routing the mounting
app.use('/api', post.router);
app.use('/api', auth.router);
app.use('/api', user.router);
app.use('/api', groupmanager.router);


module.exports = app;