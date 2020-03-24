import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    rooted: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
  }));
 


const Nav = () =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <AcUnitIcon/>
              <Typography variant="h6" className={classes.title}>
                Life(a place for student)
              </Typography>
                <BrowserRouter>
                  <Button component={Link} to='/'>Home</Button>
                  <Button component={Link} to='/discussion'>Discussion</Button>
                  <Button component={Link} to='/groupmanager'>Project Manager</Button>
                  <Button component={Link} to='/login'>Login</Button>
                </BrowserRouter> 
              <Button><Avatar className={classes.rooted}alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} /></Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    
}
export default Nav