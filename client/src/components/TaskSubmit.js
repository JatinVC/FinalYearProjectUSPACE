import React from 'react'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
const useStyles = makeStyles({
    root: {
    maxWidth:1000
    
    },
    media:{
        height:500,
    }

    
  });
const TaskSubmit=()=>{
    const classes = useStyles();
    return(
        <Grid container xs={12} space={2}  direction='row' >
        <Grid item xs={2}></Grid>
            <Grid item xs={8}>
            <br/>
            <Grid container xs={12} direction='row'spacing={2}  >
                <Grid item xs={4} >
                <Card className={classes.root}>
                        <CardActionArea>

                <Typography variant="h6">Task Name: stay at home</Typography>
                <Typography variant="h6">Task Date: 2020/4/2</Typography>
                <Typography variant="h6">Task Description: <br/>stay at home</Typography>
                          
                        </CardActionArea>

      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              finish task
          </Button>
                     </Card>
                </Grid>
                
                <Grid item xs={4} >
                <Card className={classes.root}>
                        <CardActionArea>

                <Typography variant="h6">Task Name: stay at home</Typography>
                <Typography variant="h6">Task Date: 2020/4/2</Typography>
                <Typography variant="h6">Task Description: <br/>stay at home</Typography>
                          
                        </CardActionArea>

      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              finish task
          </Button>
                     </Card>
                </Grid>
                <Grid item xs={4} >
                <Card className={classes.root}>
                        <CardActionArea>
                <Typography variant="h6">Task Name: stay at home</Typography>
                <Typography variant="h6">Task Date: 2020/4/2</Typography>
                <Typography variant="h6">Task Description: <br/>stay at home</Typography>
                        </CardActionArea>

      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              finish task
          </Button>
                     </Card>
                </Grid>
                <Grid item xs={4} >
                <Card className={classes.root}>
                        <CardActionArea>
                <Typography variant="h6">Task Name: stay at home</Typography>
                <Typography variant="h6">Task Date: 2020/4/2</Typography>
                <Typography variant="h6">Task Description: <br/>stay at home</Typography>
                        </CardActionArea>

      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              finish task
          </Button>
                     </Card>
                </Grid>
                <Grid item xs={4} >
                <Card className={classes.root}>
                        <CardActionArea>
                <Typography variant="h6">Task Name: stay at home</Typography>
                <Typography variant="h6">Task Date: 2020/4/2</Typography>
                <Typography variant="h6">Task Description: <br/>stay at home</Typography>
                        </CardActionArea>

      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              finish task
          </Button>
                     </Card>
                </Grid>
                <Grid item xs={4} >
                <Card className={classes.root}>
                        <CardActionArea>
                <Typography variant="h6">Task Name: stay at home</Typography>
                <Typography variant="h6">Task Date: 2020/4/2</Typography>
                <Typography variant="h6">Task Description: <br/>stay at home</Typography>
                        </CardActionArea>

      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              finish task
          </Button>
                     </Card>
                </Grid>
                
                
                
            </Grid>
            </Grid>
        <Grid item xs={2}></Grid>
        </Grid>
    )
}
export default TaskSubmit