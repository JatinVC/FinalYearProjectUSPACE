import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Head1 from '../Img/Head1.jpg'
import place from '../Img/place.jpg'
import Menu from '@material-ui/core/Menu';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles';
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
  
const PostCard =() =>{
   
    const [expanded, setExpanded] = React.useState(false);
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
    return(
    <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt="Cindy Baker" src={Head1} />
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
        title="Kitty Yan"
        subheader="September 14, 2019"
      />
      <CardMedia
        className={classes.media}
        image={place}
        title="Good place"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Today was amazing! that's a great story in my life!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
          <Typography paragraph>The story:</Typography>
          <Typography paragraph>
          I woke up before my alarm clock rang and found breakfast already made for me! Is not the best! The school bus was late, my seat on it was saved, and all of my teachers were absent! I really don’t think tomorrow could be any better than today.
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
  )
}

export default PostCard