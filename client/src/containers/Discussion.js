import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';
import PostCard from '../components/PostCard'
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import {Link as ReLink} from 'react-router-dom';
 
const useStyles = makeStyles(theme => ({
    rooted: {
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    rooted2: {
        Width:'100%',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
    }));
function Discussion (){


    const classes = useStyles();
    const preventDefault = event => event.preventDefault();
    const [posts, setPosts] = useState([]);

    //get all posts, store in state, pass them as a prop
    function getPosts(){
      axios.get('http://localhost:8000/api/discussion/showposts')
      .then(res=>{
        if(res.data.success){
          setPosts(res.data.posts);
        }else{
          console.log('issue getting posts');
        }
      });
    }


    useEffect(()=>{
      getPosts();
    }, []);

    var postCards = posts.map((post)=>{
      return(<PostCard post={post} key={post.post_id}></PostCard>);
    });

    return(
        <Grid container direction="row" >
            <Grid item xs={2}>
                <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                 <Typography className={classes.heading}>Life's Aim</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Our aim is build a powerful place for the student community, make the distance between student and their dream closer together.
                    </Typography>
                </ExpansionPanelDetails>
             </ExpansionPanel>
             <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                   <Typography className={classes.heading}>Need Help?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                  Contact us by:<br/>
                  Email:xxxx<br/>
                  Phone number:12345678<br/>
                  Whatsapp:xxxx<br/>
                  Wechat id:xxxxx
                 </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </Grid>

            <Grid item xs={8}>
            {postCards}
            </Grid>
            <Grid item xs={2}>
            <Typography variant='h6'>Want to make an announcement?</Typography>
                <br/>
                <Button component={ReLink} variant="outlined" color="primary" to='/createpost'>
                  <AddIcon/>  Add a post
                </Button>
            <hr/>
            <Typography variant='h6'>You may also like:</Typography>
            
            <Typography variant='h6' className={classes.rooted}>
            <br/>
                <Link href="#" onClick={preventDefault}>
                Baidu
                </Link>
                <br/>
                <Link href="#" onClick={preventDefault}>
                Yahoo
                </Link>
                <br/>
                <Link href="https://www.google.com">
                Google
                </Link>
                <hr/>
            </Typography>
            </Grid>
        </Grid>
    );
}
export default Discussion