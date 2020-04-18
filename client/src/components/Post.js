import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Head1 from './IMG/Head1.jpg'
// import place from './IMG/place.jpg'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import Comment from './Comment';
import { buildURL } from '../_helpers/url-builder';
import {Avatar} from '@material-ui/core';

const options = [
    'Add friend',
    'Check profile'
  ]
  const ITEM_HEIGHT = 48;
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



const Post=(props)=>{

    const [expanded, setExpanded] = React.useState(false);
    const {match: {params}} = props;
    const preventDefault = event => event.preventDefault();
    const [postData, setPostData] = useState({
      postTitle: '',
      postContent: '',
      postDate: '',
      postUser: '',
      postLikes: ''
    });
    const [commentData, setCommentData] = useState([]);
    const [postComment, setPostComment] = useState({
      commentContent: '',
      commentUser: localStorage.getItem('id'),
      commentPost: params.postId
    });

    function getPostData(){
      Axios.get(buildURL(`/api/discussion/showpost/${params.postId}`))
      .then(response=>{
        if(response.data.success){
          setPostData({
            postTitle: response.data.post[0].post_title,
            postContent: response.data.post[0].post_content,
            postDate: response.data.post[0].post_date,
            postUser: response.data.post[0].username,
            postLikes: response.data.post[0].post_likes
          });
          setCommentData(response.data.comments);
        }
      });
    }

    useEffect(()=>{
      getPostData();
    }, [])
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const classes = useStyles();
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleChange = (event) => {
      setPostComment({...postComment, [event.target.name]:event.target.value});
      event.preventDefault();
    };

    var comments = commentData.map((comment)=>{
      return(<Comment key={comment.comment_id} comment={comment}></Comment>);
    }); 

    function createComment(){
      let requestPayload = {
        user_id: postComment.commentUser,
        post_id: params.postId,
        comment: postComment.commentContent
      }
      Axios.post(buildURL(`/api/discussion/${params.postId}/createcomment/${postComment.commentUser}`), requestPayload)
      .then(res=>{
        if(res.data.success){
          console.log(res.data.message);
          getPostData();
        }else{
          console.log(res.data.message);
        }
      });
      setPostComment({
        ...postComment,commentContent:''
      });
    }

    return(
        <Grid container direction="row">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}> 
            <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={postData.postUser} src={`https://ui-avatars.com/api/?name=${postData.postUser}`}></Avatar>
        }
        action={
            <div>
          <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
            <MoreVertIcon />
            </IconButton>
      <Menu id="long-menu"  anchorEl={anchorEl} keepMounted open={open}  onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map(option => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      </div>
        }
        title={postData.postUser}
        subheader={postData.postDate}
      />
     
      <CardContent>
        <Typography variant="h6" component="p">
        {postData.postTitle}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
        {postData.postContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <TextField
                multiline rows="10"
                variant="outlined"
                required
                fullWidth
                name="commentContent"
                onChange={handleChange}
                value={postComment.commentContent}
                label="Comment"
               
                id="Comment"
              />
           
            
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>The Comments:</Typography>
          {comments}
          
        </CardContent>
      </Collapse>
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={createComment}
          >
            Submit your Comment
          </Button>
      </Card></Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}
export default Post