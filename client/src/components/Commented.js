import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Head1 from './IMG/Head1.jpg'
import place from './IMG/place.jpg'
import Button from '@material-ui/core/Button'
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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
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


const Commented=()=>{

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
        <Grid container direction="row">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}> 
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
     
      <CardContent>
        <Typography variant="h6" color="first" component="p">
        Today was amazing! that's a great story in my life!
        </Typography>
        <br/>
        <Typography variant="body2" color="third" component="p">
        I woke up before my alarm clock rang and found breakfast already made for me! Is not the best! The school bus was late, my seat on it was saved, and all of my teachers were absent! I really don’t think tomorrow could be any better than today.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <TextField
                multiline rows="10"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Comment"
               
                id="password"
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
          <Typography paragraph>
         Comment1: I like this girl 
         <br/>
         Comment2:Oh, the sky is beautiful
         <br/>
         Comment3:Yo, 1+1=2 check it out
          </Typography>
          
        </CardContent>
      </Collapse>
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit you Comment
          </Button>
      </Card></Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}
export default Commented