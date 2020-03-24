import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }));

export default function AppDrawer(props) {
    const { open, handleDrawerClose, ...other } = props;
    const classes = useStyles();
    const theme = useTheme();

        if(other) {
        
    }
    //     function handleDrawerOpen() {
    //     setOpen(true);
    // }

    //     function handleDrawerClose() {
    //     setOpen(false);
    // }

    return (
        <div>
        <Drawer 
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />
            <List>
            <ListItem button 
                component={Link}
                to="/"
                onClick={handleDrawerClose}
            >
                <ListItemText primary={'Home'} />
            </ListItem>

            <ListItem button
                component={Link}
                to="/discussion"
                onClick={handleDrawerClose}
            >
                <ListItemText primary={'Discussion'} />
            </ListItem>
            <ListItem button
                component={Link}
                to="/projectmanager"
                onClick={handleDrawerClose}
            >
                <ListItemText primary={'Project Manager'} />
            </ListItem>
            </List>
        </Drawer>
        </div>
    );
}

