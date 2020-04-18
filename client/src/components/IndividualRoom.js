import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import Task from './Task';
import _ from 'lodash';
import { Card, CardActionArea } from '@material-ui/core';
import {Button} from '@material-ui/core';
import {buildURL} from '../_helpers/url-builder';

const options = [
    'Detail of the room',
    'Clear screen'
  ]
  const ITEM_HEIGHT = 48;
  const useStyles = makeStyles(theme => ({
    rooted: {
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    rooted2: {
        Width:'100%',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
    }));
  
const IndividualRoom = (props) =>{

    const classes = useStyles();
    const [tasks, setTasks] = useState([]);
    const {match: {params}} = props;
    function getTasks(){
      Axios.get(buildURL(`/api/groupmanager/projects/${params.projectId}/gettasks`))
      .then(res=>{
        if(res.data.success){
          setTasks(res.data.tasks);
        }
      });
    }

    function deleteTask(task){
      Axios.post(buildURL(`/api/groupmanager/projects/${params.projectId}/deletetask/${task}`))
      .then(res=>{
          if(res.data.success){
            const data = _.filter(tasks, (element)=>element.task_id!=task);
            setTasks(data);
            console.log('task deleted');
          }
      });
    }
    
    useEffect(()=>{
      getTasks();
    }, []);

    var renderTasks = tasks.map((task)=>{
      return(<Task key={task.task_id} task={task} projectId={params.projectId} deleteTask={deleteTask}></Task>);
    });
    
    return(
      <Grid container item direction="column" xs={12}>
        <Grid item direction="row">
          <Card>
            <CardActionArea>
              <Button component={Link} variant="outlined" color="primary" to={`/projectmanager/${params.projectId}/createtask`}>
                Add Task
              </Button>
              <Button component={Link} variant="outlined" color="primary" to={`/projectmanager/${params.projectId}/adduser`}>
                Add User
              </Button>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid container direction="row" >
          {renderTasks}
        </Grid>
      </Grid>
    );       
}

export default IndividualRoom