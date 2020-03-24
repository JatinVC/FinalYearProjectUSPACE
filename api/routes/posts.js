var router = require('express').Router();
var _ = require('lodash');
var moment = require('moment');

//get page
router.get('/discussion/createpostpage/:stid', function(req, res, next){
    res.render('createpost', {message: '', stid: req.params.stid});
});

//post all the information to the database
router.post('/discussion/createpost/:stid', function(req, res, next){
    //TODO: when user presses submit, all the data submitted will go into the database
    var post = req.body;
    var title = post.title;
    var catId = post.category;
    var topicId = post.topic;
    var content = post.content;
    //TODO: get current users id as well done by checking the user that is signed in, and then select the user id and store in variable
    var stid = req.params.stid;
    var sql = `INSERT INTO post(post_title,post_content,post_cat,post_topic,post_user) VALUES ('${title}','${content}','${catId}', '${topicId}', '${stid}')`;
    db.query(sql, function(err, results){
        if(results){
            var message = "Successfully posted";
            res.render('createpost', {message:message, stid: stid});
        }else{
            var message = "Error Posting, check log";
            console.log(err);
            res.render('createpost',{message:message, stid: stid});
        }
    });
});

//show posts on seperate page
router.get('/discussion/showposts', function(req, res, next){
    var sql = `SELECT * FROM post`;
    db.query(sql, function(err, results){
        if(results){
            _.each(results, (element)=>{
                element.post_date = moment(element.post_date).format("MMMM Do YYYY, h:mm:ss a");
            });
            res.render('showpost', {results});
        }else{
            console.log(err);
        }
    });
});

//TODO: make post with a specific topic be seen
router.get('/discussion/showposts/:topicid', (req, res, next)=>{
    let topicId = req.params.topicid; 
    var sql = `SELECT * FROM post WHERE post_topic = '${topicId}'`
    db.query(sql, (err, results)=>{
        if(results){
            _.each(results, (element)=>{
                element.post_date = moment(element.post_date).format("MMMM Do YYYY, h:mm:ss a");
            });
            res.render('showpost', {results});
        }else{
            console.log(err);
        }
    });
});

module.exports.router = router;