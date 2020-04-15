import React from 'react'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import {Link} from 'react-router-dom';
import Axios from 'axios';
const useStyles = makeStyles({
    root: {
    maxWidth:1000
    
    },
    media:{
        height:500,
    }

    
  });
const TaskSubmit=(props)=>{
    const classes = useStyles();
    return(
        <Grid container xs={12} space={2}  direction='row' >
            <Grid item xs={8}>
                <br/>
                    <Grid container xs={12} direction='row'spacing={2}  >
                        <Grid item xs={4} >
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <Typography variant="h6">{props.task.task_content}</Typography>
                                </CardActionArea>
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                component={Link}
                                onClick={()=>props.deleteTask(props.task.task_id)}
                                >
                                    Finish task
                                </Button>
                            </Card>
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}
export default TaskSubmit