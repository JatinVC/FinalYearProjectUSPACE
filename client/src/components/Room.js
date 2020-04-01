import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Ricky from './IMG/Ricky.jpeg';
import David from './IMG/David.jpeg';
import Typography from '@material-ui/core/Typography';
import math from './IMG/math.jpg'
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    Width: '100%',
  },
  media: {
    height: 340,
  },
});

export default function MediaCard() {
    const classes = useStyles();
  
    return (
      <Grid container direction='row' spacing={2}>
        <Grid item xs={4}>
      <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
              Room
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Ricky}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ricky's room
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Come to talk about assignment!!!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Link to='/IndividualRoom'>join</Link>
         
        </CardActions>
      </Card>
        </Grid>

        <Grid item xs={4}>
      <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
              Room
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={David}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              David's room
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Come to talk about Games!!!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Link to='/IndividualRoom'>join</Link>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
              Room
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Ricky}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ricky's room
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Come to talk about assignment!!!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Link to='/IndividualRoom'>join</Link>
         
        </CardActions>
      </Card>
        </Grid>

        <Grid item xs={4}>
      <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
              Room
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={David}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              David's room
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Come to talk about Games!!!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Link to='/IndividualRoom'>join</Link>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
              Room
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Ricky}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ricky's room
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Come to talk about assignment!!!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Link to='/IndividualRoom'>join</Link>
         
        </CardActions>
      </Card>
        </Grid>

        <Grid item xs={4}>
      <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
              Room
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={David}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              David's room
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Come to talk about Games!!!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Link to='/IndividualRoom'>join</Link>
         
        </CardActions>
      </Card>
        </Grid>

        </Grid>
    );
  }