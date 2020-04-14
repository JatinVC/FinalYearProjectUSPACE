import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    Width: '100%',
    Float: 'left'
  },
  media: {
    height: 240,
  },
});

export default function MediaCard(props) {
    const classes = useStyles();
  
    return (
      <Grid container direction='row' spacing={2}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.subject.cat_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.subject.cat_desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/teacherreview/${props.subject.cat_id}`}>Check</Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }