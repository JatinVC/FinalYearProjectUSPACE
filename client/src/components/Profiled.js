import React, { Profiler } from 'react'
import Grid from '@material-ui/core/Grid'
import Head1 from './IMG/Head1.jpg'
import place from './IMG/place.jpg'
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
import { Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles';

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
  }));


const Profiled=()=>{
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
      <Grid container direction="row" xs={12}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt="Cindy Baker" src={Head1} />
        }
        title="Kitty Yan"
        subheader="Sign Sentence:I am a girl who the best happy in the world Wwwwwwwwwwww"
      />
      <CardContent>
        <Typography>HomeAddress:
FLAT 1504, BLOCK C, 
magic garden, 560 god'S ROAD<br/>Phone number:
61095222<br/>Email:
b6295142227@gmail.com</Typography>
      </CardContent>
      </Card>
      </Grid>
      <Grid item xs={3}></Grid>
      </Grid>
    )
}
export default Profiled;