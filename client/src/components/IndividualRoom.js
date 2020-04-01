import React from 'react'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Ricky from './IMG/Ricky.jpeg'
import Grid from '@material-ui/core/Grid'
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
const options = [
    'Detail of the room',
    'Clear screen'
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
  
const IndividualRoom =() =>{
   
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
     <Grid container direction="column" xs={12}>
         <Grid>
    <Card className={classes.root}>
        
      <CardHeader
        
        avatar={
            
            <Avatar alt="Cindy Baker" src={Ricky} />
        }
        action={
            
            <div>
            <Link to="/GroupManager">Back</Link>
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
        title="Welcome to Ares's Room!!!!"
        subheader="September 14, 2019"
      />
     
      </Card>
      </Grid>
            <Grid container direction="row" >
                <Grid item xs={2} >
                <Typography variant="h5">Room person(4/12)</Typography>
                <Typography variant="h6">Jack <br/> Ares <br/> Nick <br/> David</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography ></Typography>
                </Grid>

            </Grid>
      </Grid>
      
    );
        
}

export default IndividualRoom