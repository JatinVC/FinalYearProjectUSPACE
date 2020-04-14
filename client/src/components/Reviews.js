import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import Axios from 'axios';
import PostCard from './PostCard';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
 
});
export default function OutlinedCard(props) {
    const classes = useStyles();
    const [reviews, setReviews] = useState([]);


    function getReviews(){
      const {match: {params}} = props;
      Axios.get(`http://localhost:8000/api/teacherreview/${params.catId}`)
      .then(res=>{
        if(res.data.success){
          setReviews(res.data.reviews);
        }
      });
    }

    useEffect(()=>{
      getReviews();
    }, [])

    const renderReviews = reviews.map(post=>{
      return(<PostCard key={post.post_id} post={post}></PostCard>);
    });
  
    return (
      <Grid container direction="row">
        <Grid xs={2}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Explain to use the page
          </Typography>
          <Typography variant="h5" component="h2">
            Teacher Review
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Be nice, Be cool
          </Typography>
          <Typography variant="body2" component="p">
          On this page you can view the contact information of each type of teacher by clicking on the different subjects in the upper Right corner. And check the teacher's teach style to choose the teacher that suits you best.
            <br />
            {'"Remember:Always be nice"'}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to= 'TeacherReview'>Back</Link>
          <Button component={Link} variant="outlined" color="primary" to='/createpost'>
            <AddIcon/>  Add a post
          </Button>
        </CardActions>
        
      </Card>
      </Grid>
      <Grid xs={10} container direction="row" spacing={2}>
        {renderReviews}
      </Grid>
      </Grid>
    );
  }