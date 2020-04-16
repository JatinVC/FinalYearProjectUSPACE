import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Ricky from '../Img/Ricky.jpeg';
import David from '../Img/David.jpeg';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    Width: '100%',
  },
  media: {
    height: 340,
  },
});

export default function MediaCard(props) {
    const classes = useStyles();
  
    return (
      <Grid container direction='row' spacing={2}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
              Project
            </Typography>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.project.project_title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/projectmanager/${props.project.project_id}`}>Join</Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }