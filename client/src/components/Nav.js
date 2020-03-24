import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import clsx from 'clsx';
// import Drawer from './Drawer';

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

// const [drawerOpen, setDrawerOpen] = React.useState(false);

// function handleDrawerOpen() {
//   setDrawerOpen(true);
// }

// function handleDrawerClose() {
//   setDrawerOpen(false);
// }

const Nav = () =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: drawerOpen,
                })}
              >
                  <MenuIcon />
                </IconButton> */}
              <AcUnitIcon/>
              <Typography variant="h6" className={classes.title}>
                Life
              </Typography>
                  <Button component={Link} to='/'>Home</Button>
                  <Button component={Link} to='/discussion'>Discussion</Button>
                  <Button component={Link} to='/groupmanager'>Project Manager</Button>
                  <Button component={Link} to='/login'>Login</Button>
              <Button><Avatar className={classes.small}alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Button>
            </Toolbar>
          </AppBar>
          {/* <Drawer
              open={drawerOpen}
              handleDrawerClose={handleDrawerClose}
          /> */}
        </div>
      );
    
}
export default Nav;