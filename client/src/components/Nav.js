import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from './Drawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Menu} from '@material-ui/core';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import {Badge} from '@material-ui/core';
import {MenuItem} from '@material-ui/core';
import {authService} from '../_services/auth.service';
import {AuthContext} from '../contexts/auth-context';

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

const Nav = (props) =>{
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { authenticated, updateAuth } = useContext(AuthContext);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  function handleDrawerOpen() {
    setDrawerOpen(true);
  }
  
  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  function handleLogout(){
    authService.logout();
    updateAuth();
    // redirect to home page
    // this.props.history.push("/");
  }

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            { authenticated && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: drawerOpen,
              })}
            >
                <MenuIcon />
              </IconButton>
            )}
            <AcUnitIcon/>
            <Typography variant="h6" className={classes.title}>
              Life
            </Typography>
            {/* <MenuItem>
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem> */}

            <div>
              <div>
                {authenticated?(
                  <Button
                    type="submit"
                    color="inherit"
                    onClick={handleLogout}
                    >
                      Logout
                    </Button>
                ):(
                  <Button 
                    component={Link} 
                    to='/login' 
                    style={{color:'white'}}>
                      Login
                    </Button>
                )}
              </div>
            </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        {renderMenu}
        <Drawer
            open={drawerOpen}
            handleDrawerClose={handleDrawerClose}
        />
      </div>
    );
  
}
export default Nav;