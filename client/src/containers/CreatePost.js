import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import { MenuItem } from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import {Select} from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreatePost(props) {
    const classes = useStyles();
    const [topicList, setTopicList] = useState([]);
    const [catList, setCatList] = useState([]);
    const [postData, setPostData] = useState({
        postTitle: '',
        postContent: '',
        postCat: '',
        postTopic: '',
        postUser: ''
    });

    function getCategory(){
        Axios.get('http://localhost:8000/api/discussion/categories')
        .then(res=>{
            if(res.data.success){
                setCatList(res.data.category);
            }else{
                console.log('error getting categories');
            }
        });
    }

    function getTopics(){
        Axios.get('http://localhost:8000/api/discussion/topics')
        .then(res=>{
            if(res.data.success){
                setTopicList(res.data.topics);
            }else{
                console.log('error getting topics');
            }
        });
    }  


    const handleChange = (event) => {
        setPostData({...postData, [event.target.name]:event.target.value});
    };

    useEffect(()=>{
        getTopics();
        getCategory();
    }, []);

    var topicItems=topicList.map((topic)=>{
        return (<option value={topic.topic_id}>{topic.topic_sub}</option>);
    });

    var catItems=catList.map((category)=>{
        return(<option value={category.cat_id}>{category.cat_name}</option>);
    })
    function handlePost() {
      Axios.post("http://localhost:8000/discussion/createpost/1",{
        title:postData.postTitle,
        category:postData.postCat,
        topic:postData.postTopic,
        content:postData.postContent
      })
      .then(res=>{
        console.log("Postsuccessful");
        props.history.push('/');

      } );
    }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Post
        </Typography>
        <form className={classes.form} noValidate onSubmit={handlePost}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="Post Title"
                variant="outlined"
                required
                fullWidth
                id="Title"
                label="Title"
                autoFocus
              />
            </Grid>
            <Grid container xs={12}  direction="row" >
              <Grid item xs={6}>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="topic-select-label">Topic</InputLabel>
                <Select
                native
                value={postData.postTopic}
                onChange={handleChange}
                >
                {topicItems}
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                native
                value={postData.postCat}
                onChange={handleChange}
                >
                {catItems}
                </Select>
            </FormControl>
            </Grid>
            </Grid>
            
           
            <Grid item xs={12} >
              <TextField
              value={postData.postContent}
              onChange={handleChange}
                multiline rows="19"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Post Content"
               
                id="password"
              />
            
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Post
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}