import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import {Button} from '@material-ui/core';
import Axios from 'axios'
import { buildURL } from '../_helpers/url-builder'
const Task=(props)=>{
  const {match: {params}} = props;
  const [task, setTask] = useState({
    taskContent: '',
    taskProject: params.projectId,
    taskUser: localStorage.getItem('id')
  });
  const [message, setMessage] = useState('');

  function createTask(){
    let requestPayload = {
      taskContent: task.taskContent
    };
    Axios.post(buildURL(`/api/groupmanager/projects/${task.taskProject}/createtask/${task.taskUser}`), requestPayload)
    //groupmanager/projects/:project_id/createtask/:user_id
    .then(res=>{
      if(res.data.success){
        props.history.push(`/projectmanager/${task.taskProject}`);
      }else{
        setMessage('task creation failed')
      }
    });
  }

  const handleChange = (event) => {
    setTask({...task, [event.target.name]:event.target.value});
    event.preventDefault();
  };

  return(
    <Grid container direction='row'>
      <Grid item xs={3}>
        <TextField
        multiline rows="2"
        name="taskContent"
        variant="outlined"
        required
        fullWidth
        onChange={handleChange}
        label="Task Content"
        autoFocus
        />
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={createTask}
        >
          Create task
        </Button>
      </Grid>
      {message}
    </Grid>
  )
}
export default Task