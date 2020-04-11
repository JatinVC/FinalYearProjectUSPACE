var router = require('express').Router();
var _ = require('lodash');
var moment = require('moment');

//post all the information to the database
router.post('/createpost/:user_id', function(req, res, next){
    //when user presses submit, all the data submitted will go into the database
    var post = req.body;
    var title = post.title;
    var catId = post.category;
    var topicId = post.topic;
    var content = post.content;
    //get current users id as well done by checking the user that is signed in, and then select the user id and store in variable
    var user_id = req.params.user_id;
    var sql = `INSERT INTO post(post_title,post_content,post_cat,post_topic,post_user) VALUES ('${title}','${content}','${catId}', '${topicId}', '${user_id}')`;
    db.query(sql, function(err, results){
        if(results){
            res.json({
                success:true,
                message:'successfully posted'
            })
        }else{
            res.status(400).json({
                success: false,
                message: 'Error posting',
                error: err
            });
        }
    });
});

//show posts on seperate page
router.get('/discussion/showposts', function(req, res, next){
    var sql = `SELECT * FROM post`;
    db.query(sql, function(err, results){
        if(results){
            _.each(results, (element)=>{
                element.post_date = moment(element.post_date).format("MMMM D YYYY, h:mm a");
            });
            res.json({
                success: true,
                posts: results
            });
        }else{
            console.log(err);
            res.status(400).json({
                success: false,
                message: err
            });
        }
    });
});

//make post with a specific topic be seen
router.get('/discussion/showposts/:topicid', (req, res, next)=>{
    let topicId = req.params.topicid; 
    var sql = `SELECT * FROM post WHERE post_topic = '${topicId}'`
    db.query(sql, (err, results)=>{
        if(results){
            _.each(results, (element)=>{
                element.post_date = moment(element.post_date).format("MMMM Do YYYY, h:mm:ss a");
            });
            res.json({
                success: true, 
                posts: results
            });
        }else{
            console.log(err);
            res.status(400).json({
                success: false,
                message: err
            });
        }
    });
});

//post on an individual page, with comments
router.get('/discussion/showposts/:post_id', (req, res, next)=>{
    var sql = `SELECT * FROM post WHERE post_id='${req.params.post_id}' UNION SELECT * FROM comments WHERE comment_post='${req.params.post_id}'`
    db.query(sql, (err, results)=>{
        if(results){
            _.each(results, (element)=>{
                element.post_date = moment(element.post_date).format("MMMM Do YYYY, h:mm:ss a");
            });
            res.json({
                success: true,
                post: results
            });
        }else{
            res.status(404).json({
                success: false,
                message: err
            });
        }
    });
});

//create comment on specific post
router.post('/discussion/:post_id/createcomment/:user_id', (req, res, next)=>{
    let user = req.params.user_id;
    let post = req.params.post_id;
    let content = req.body.comment;
    var sql = `INSERT INTO comments(comment_user, comment_content, comment_post) VALUES(?,?,?)`;
    db.query(sql, [user, content, post], (err, results)=>{
        if(results){
            res.json({
                success: true,
                message: 'comment posted successfully'
            });
        }else{
            res.status(400).json({
                success: false,
                message: 'error posting comment',
                error: err
            });
        }
    });
});

//update likes counter
router.post('/discussion/:post_id/likepost', (req, res, next)=>{
    var sql = `UPDATE post SET post_likes = post_likes+1 WHERE post_id='${req.params.post_id}'`;
    db.query(sql, (err, result)=>{
        if(results){
            res.json({
                success: true,
                message: 'like added'
            });
        }else{
            res.status(400).json({
                success: false,
                message: err
            });
        }
    });
});

//get current likes
router.get('/discussion/:post_id/getlikes', (req, res, next)=>{
    var sql = `SELECT post_likes FROM post WHERE post_id='${req.params.post_id}'`;
    db.query(sql, (err, result)=>{
        if(result){
            res.json({
                success: true,
                likes: result
            });
        }else{
            res.status(400).json({
                success: false,
                message: 'error getting likes'
            })
        }
    });
});

//get topics
router.get('/discussion/topics', (req, res, next)=>{
    var sql = `SELECT * FROM topic`;
    db.query(sql, (err, result)=>{
        if(result){
            res.json({
                success: true,
                topics: result
            });
        }else{
            res.status(400).json({
                success: false,
                error: err
            });
        }
    });
});

//get categories
router.get('/discussion/categories', (req, res, next)=>{
    var sql=`SELECT * FROM category`;
    db.query(sql, (err, result)=>{
        if(result){
            res.json({
                success: true,
                category: result
            });
        }else{
            res.status(400).json({
                success:false,
                error: err
            });
        }
    });
});
module.exports.router = router;