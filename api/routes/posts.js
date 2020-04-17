var router = require('express').Router();
var _ = require('lodash');
var moment = require('moment');
var async = require('async');

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
    var sql = `SELECT post_id, post_content, post_date, post_cat, post_topic, post_user, post_likes, username FROM post LEFT JOIN users ON post.post_user=users.user_id ORDER BY post_date DESC`;
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

//make post with a specific category be seen
router.get('/discussion/showposts/:categoryid', (req, res, next)=>{
    let categoryId = req.params.categoryid; 
    var sql = `SELECT * FROM post WHERE post_cat = '${categoryId}'`;
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
router.get('/discussion/showpost/:post_id', (req, res, next)=>{
    var postSql = `SELECT post_id, post_title, post_content, post_date, post_likes, username FROM post
    LEFT JOIN users ON post.post_user=users.user_id
    WHERE post_id='${req.params.post_id}'`;
    
    var commentSql = `SELECT comment_id, comment_content, comment_date, comment_user, username FROM comments 
    LEFT JOIN post ON post.post_id = comments.comment_post 
    LEFT JOIN users ON comments.comment_user = users.user_id
    WHERE post.post_id='${req.params.post_id}'`;

    var postQuery = (callback)=>{
        db.query(postSql, callback);
    }
    
    var commentQuery = (callback)=>{
        db.query(commentSql, callback);
    }

    async.parallel({
        post: postQuery,
        comment: commentQuery
    }, (err, results)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                success: false,
                message: err
            });
        }else{
            _.forEach(results.post[0], post=>{
                post.comments=_.filter(results.comment[0], {comment_post: post.post_id});
                post.post_date = moment(results.post_date).format("MMMM Do YYYY, h:mm:ss a");
            });
            res.json({
                success: true,
                post: results.post[0],
                comments: results.comment[0]
            });
        }
    });
});

//create comment on specific post
router.post('/discussion/:post_id/createcomment/:user_id', (req, res, next)=>{
    let user = req.params.user_id;
    let post = req.params.post_id;
    let content = req.body.comment;
    var sql = `INSERT INTO comments(comment_user, comment_content, comment_post) VALUES ('${user}','${content}','${post}')`;
    db.query(sql, (err, results)=>{
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
    var sql = `UPDATE post SET post_likes=post_likes+1 WHERE post_id='${req.params.post_id}'`;
    db.query(sql, (err, result)=>{
        if(result){
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
            console.log(result)
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

//get teacher reviews for a certain subject
router.get('/teacherreview/:cat_id', (req, res, next)=>{
    var sql = `SELECT post_id, post_content, post_date, post_cat, post_topic, post_user, post_likes, username FROM post LEFT JOIN users ON post.post_user=users.user_id WHERE (post_cat='${req.params.cat_id}' AND post_topic=5) ORDER BY post_date DESC`
    db.query(sql, (err, results)=>{
        if(results){
            _.each(results, (element)=>{
                element.post_date = moment(element.post_date).format("MMMM Do YYYY, h:mm:ss a");
            });
            res.json({
                success: true,
                reviews: results
            });
        }else{
            res.status(400).json({
                success: false,
                error: err
            });
        }
    });
});

//create new category
router.post('/discussion/createcat', (req, res, next)=>{
    var sql = `INSERT INTO category(cat_name, cat_desc) VALUES ('${req.body.catName}','${req.body.catDesc}')`;
    db.query(sql, (err, result)=>{
        if(err){
            res.status(400).json({
                success: false,
                message: 'category could not be created'
            });
        }else{
            res.json({
                success: true,
                message: 'category created'
            });
        }
    });
});
module.exports.router = router;