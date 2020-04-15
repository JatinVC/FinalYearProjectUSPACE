var router = require('express').Router();
var _ = require('lodash');
 var async = require('async');


//get all projects associated with current user by checking project and projectuser tables
router.get('/groupmanager/projects/:user_id', (req, res, next)=>{
    var userProjectSql = `SELECT * FROM project WHERE project_user=${req.params.user_id}`;
    var userGroupSql = `Select prou_project, project_id, project_title FROM projectusers LEFT JOIN project ON projectusers.prou_project = project.project_id WHERE projectusers.prou_userb=${req.params.user_id}`;

    var userProjectQuery = (callback)=>{
        db.query(userProjectSql, callback);
    }
    var userGroupQuery = (callback)=>{
        db.query(userGroupSql, callback);
    }

    async.parallel({
        userprojects: userProjectQuery,
        invprojects: userGroupQuery
    }, (err, results)=>{
        if(err){
            res.status(500).json({
                success: false,
                message: err
            });
        }else{
            _.forEach(results.userprojects[0], userproject=>{
                userproject.invprojects=_.filter(results.invprojects[0], {prou_project: userproject.project_id});
            });
            res.json({
                success: true,
                userprojects: results.userprojects[0],
                invprojects: results.invprojects[0]
            });
        }
    });
});

//create new project
router.post('/groupmanager/createproject/:user_id', (req, res, next)=>{
    let title = req.body.title;
    var sql = `INSERT INTO project(project_title, project_user) VALUES('${title}','${req.params.user_id}')`;
    db.query(sql, (err, results)=>{
        if(results){
            res.json({
                success: true,
                message: 'project created successfully'
            });
        }else{
            res.status(400).json({
                success: false,
                message: err
            });
        }
    });
});

//add user to project
router.post('/groupmanager/projects/:project_id/owner/:usera_id/adduser/:userb_id', (req, res, next)=>{
    var sql=`INSERT INTO projectusers(prou_project, prou_usera, prou_userb) VALUES('${req.params.project_id}','${req.params.usera_id}','${req.params.userb_id}')`;
    db.query(sql, (err, results)=>{
        if(results){
            res.json({
                success: true,
                message: 'user added'
            });
        }else{
            res.status(400).json({
                success: false,
                message: err
            });
        }
    });
});

//delete project
router.post('/groupmanager/projects/:project_id/deleteproject', (req, res, next)=>{
    var sql = `DELETE FROM project WHERE project_id='${req.params.project_id}'`;
    db.query(sql, (err, results)=>{
        if(err){
            res.status(500).json({
                success: false,
                message: err
            });
        }else{
            res.json({
                success: true,
                message: 'project deleted'
            });
        }
    });
});

//get all tasks associated with current project
router.get('/groupmanager/projects/:project_id/gettasks', (req, res, next)=>{
    var sql = `SELECT * FROM tasks WHERE task_project = '${req.params.project_id}'`;
    db.query(sql, (err, results)=>{
        if(results){
            res.json({
                success: true,
                tasks: results
            });
        }else{
            res.status(500).json({
                success: false,
                message: err
            });
        }
    });
});

//create task
router.post('/groupmanager/projects/:project_id/createtask/:user_id', (req, res, next)=>{
    var sql = `INSERT INTO tasks(task_project, task_content, task_user) VALUES ('${req.params.project_id}','${req.body.taskContent}','${req.params.user_id}')`;
    db.query(sql, (err, results)=>{
        if(err){
            res.status(400).json({
                success: false,
                message: err
            });
        }else{
            res.json({
                success: true,
                message: 'task created'
            });
        }
    });
});

//delete task
router.post('/groupmanager/projects/:project_id/deletetask/:task_id', (req, res, next)=>{
    var sql = `DELETE FROM tasks WHERE task_id=${req.params.task_id}`;
    db.query(sql, (err, results)=>{
        if(err){
            res.status(500).json({
                success: false,
                message: err
            });
        }else{
            res.json({
                success: true,
                message: 'task deleted'
            });
        }
    });
});

module.exports.router = router;