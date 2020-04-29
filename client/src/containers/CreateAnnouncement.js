import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import {FormControl} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import {Select} from '@material-ui/core';
import {buildURL} from '../_helpers/url-builder';

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


export default function CreateAnnouncement(props) {
    const classes = useStyles();
    const [announcementData, setAnnouncementData] = useState({
        aTitle: '',
        aContent: '',
    });

    const handleChange = (event) => {
        setAnnouncementData({...announcementData, [event.target.name]:event.target.value});
        event.preventDefault();
    };

    function handlePost(event){
        let requestPayload = {
            aTitle: announcementData.aTitle,
            aContent: announcementData.aContent,
            userId: localStorage.getItem('id')
        };

        Axios.post(buildURL('/api/announcement/create'), requestPayload)
        .then(res=>{
            if(res.data.success){
                props.history.push('/dashboard');
            }else{
                console.log('error in creating announcement');
            }
        }); 
        
        event.preventDefault();
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                Create Announcement
                </Typography>
                <form className={classes.form} onSubmit={handlePost}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        value={announcementData.aTitle}
                        onChange={handleChange}
                        name="aTitle"
                        variant="outlined"
                        required
                        fullWidth
                        id="Title"
                        label="Title"
                        autoFocus
                    />
                    </Grid>
                    
                    <Grid item xs={12} >
                    <TextField
                        value={announcementData.aContent}
                        onChange={handleChange}
                        multiline rows="19"
                        variant="outlined"
                        required
                        fullWidth
                        name="aContent"
                        label="Announcement Content"
                    />
                    
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handlePost}
                >
                    Create Announcement
                </Button>
                </form>
            </div>
        </Container>
    );
}
