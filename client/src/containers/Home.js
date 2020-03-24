import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import About from '../Img/About.jpg';
const useStyles = makeStyles({
    root: {
    maxWidth:1000
    },
    media:{
        height:500,
    }
    
  });
const Home = () =>{
    const classes = useStyles();
    return(
        <Grid container direction="row" >
            <Grid item xs={2}>
            
            </Grid>
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Typography variant='h4' color="primary">About us</Typography>
                            <CardMedia
                            className={classes.media}
                            image={About}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Introduction
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This website is a platform for students to communicate and online learning, students or teachers can post announcement posts, others can comment and like. You can also search for related posts by searching for keywords. If students want to seek help from the teacher, they can check the teacher's related information and free time and the students' evaluation of the teacher. Students can log in to their own accounts through this website to view their materials and information.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                     </Card>
                 </Grid>
                 <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Typography variant='h4' color="primary">MainFuction</Typography>
                            <CardMedia
                            className={classes.media}
                            image={About}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                MainFuction-Discussion
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This is an announcement platform Anyone can post any information, it can be help information, or dating information, or even daily activities, everyone can like comments and favorites.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                     </Card>
                 </Grid>
                 <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Typography variant='h4' color="primary">MainFuction</Typography>
                            <CardMedia
                            className={classes.media}
                            image={About}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                MainFuction-TeacherReview
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This website can see all relevant information of teachers, email address, mobile phone number, past teaching experience, teaching subject, etc.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                     </Card>
                 </Grid>
                 <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Typography variant='h4' color="primary">MainFuction</Typography>
                            <CardMedia
                            className={classes.media}
                            image={About}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                MainFuction-GroupManager
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            TThis website allows students to be assigned to group chat rooms. Students can enter chat rooms for communication and learning. Chat rooms can be set with access passwords. The number of chat rooms and creation qualifications are managed by developers.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                     </Card>
                 </Grid>
            </Grid>
            <Grid item xs={2}>
                
            </Grid>
        </Grid>
    
    )
}
export default Home