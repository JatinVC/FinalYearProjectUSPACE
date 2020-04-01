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
import math from '../Img/math.jpg'
import chinese from '../Img/chinese.png'
import engineering from '../Img/engineering.jpg'
import business from '../Img/business.jpg'
import history from '../Img/history.jpg'
import media from '../Img/media.jpg'
import physics from '../Img/physics.jpg'
import science from '../Img/science.jpg'
import art from '../Img/art.jpg'
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    Width: '100%',
  },
  media: {
    height: 240,
  },
});

export default function MediaCard() {
    const classes = useStyles();
  
    return (
      <Grid container direction='row' spacing={2}>
        <Grid item xs={4}>
      <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={math}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Math
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It is math
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Link to='/Explain4TR'>Check</Link>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={chinese}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Chinese
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It is chinese
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Check 
          </Button>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={business}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Business
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It is business
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Check 
          </Button>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={engineering}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Engineering
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It is engineering
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Check 
          </Button>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={history}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Histroy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It is history
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Check 
          </Button>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={media}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Media
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It is media
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Check 
          </Button>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={physics}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Physics
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             It is physics
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Check 
          </Button>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={science}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Science
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             It is science
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Check 
          </Button>
         
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
              Subject
            </Typography>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={art}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Art
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             It is art
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Check 
          </Button>
         
        </CardActions>
      </Card>
        </Grid>
        
      </Grid>
    );
  }