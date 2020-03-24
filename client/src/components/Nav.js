import React, { Component } from 'react'
import  AppBar  from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Nav extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                    HKUConnect
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Nav;
