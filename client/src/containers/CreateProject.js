import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import {Button} from '@material-ui/core';
import Axios from 'axios';
import {buildURL} from '../_helpers/url-builder';

const CreateProject=(props)=>{
    const [project, setProject] = useState({
        projectTitle: '',
        projectUser: localStorage.getItem('id'),
    });
    const [message, setMessage] = useState('');
    function createProject(){
        let requestPayload = {
            title: project.projectTitle
        };
        Axios.post(buildURL(`/api/groupmanager/createproject/${project.projectUser}`), requestPayload)
        .then(res=>{
            if(res.data.success){
                props.history.push('/projectmanager');
            }else{
                setMessage('project creation failed');
            }
        });
    }

    const handleChange = (event) => {
        setProject({...project, [event.target.name]:event.target.value});
        event.preventDefault();
    };

    return(
      <Grid container direction='row'>
        <Grid item xs={3}>
            <TextField
            multiline rows="1"
            name="projectTitle"
            variant="outlined"
            required
            fullWidth
            label="Project Title"
            autoFocus
            onChange={handleChange}
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={createProject}
            >
                Create Project
            </Button>
        </Grid>
        {message}
      </Grid>
    )
}
export default CreateProject