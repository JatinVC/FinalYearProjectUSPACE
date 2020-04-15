import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
const Task=()=>{
    return(
    <Grid container direction='row'>
        <Grid item xs={3}></Grid>
       
        <Grid item xs={6} spacing={2} container direction='row'  >
      
            <Grid item xs={8} >
            <br/>  <br/>  
            <TextField
                name="postTitle"
                variant="outlined"
                required
                fullWidth
               
                label="Task Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={4}>
            <br/>  <br/>  
            <TextField
                name="postTitle"
                variant="outlined"
                required
                fullWidth
               
                label="Task User"
                autoFocus
              />
           
                </Grid>
                <Grid item xs={9}>
                <TextField
                 multiline rows="10"
                name="postTitle"
                variant="outlined"
                required
                fullWidth
               
                label="Task Content"
                autoFocus
              />
                </Grid>
        </Grid>

        <Grid item xs={3}></Grid>
    </Grid>
    )
}
export default Task