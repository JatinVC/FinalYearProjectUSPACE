import React, {useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Head1 from '../Img/Head1.jpg'
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {Badge} from '@material-ui/core';
import Axios from 'axios';

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
  
const PostCard =(props) =>{

    const classes = useStyles();
   
    const [anchorEl, setAnchorEl] = useState(null);
    // const [likes, setLikes] = useState();
    const open = Boolean(anchorEl);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    // const updateLikes = event =>{
    //   Axios.post(`http://localhost:8000/api/discussion/${props.post.post_id}/likepost`)
    //   .then(res=>{
    //     if(res.data.success){
    //       Axios.get(`http://localhost:8000/api/discussion/${props.post.post_id}/getlikes`)
    //       .then(res=>{
    //         if(res.data.success){
    //           setLikes(res.data.post_likes);
    //         }
    //       });
    //     }
    //   });
    //   event.preventDefault();
    // };
    // setLikes(props.post.post_likes);
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
    <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt="Cindy Baker" src={Head1} /> //handle avatar generation later
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
        title={props.post.post_user}
        subheader={props.post.post_date}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.post.post_topic}
        </Typography>
      </CardContent>
        <CardContent>
          <Typography variant='h6'>
          {props.post.post_title}
          </Typography>
          <Typography paragraph>
          {props.post.post_content}
          </Typography>
          <IconButton aria-label="add to favorites" >
            {/* <Badge badgeContent={props.post.post_likes} color="secondary"> */}
              <FavoriteIcon />
            {/* </Badge> */}
          </IconButton>
          <Link className={classes.link} to={`/discussion/${props.post.post_id}`}>Add a Comment</Link>
        </CardContent>
      </Card>
  )
}

export default PostCard;