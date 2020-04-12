import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function OutlinedCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Explain to use the page
          </Typography>
          <Typography variant="h5" component="h2">
            Group Manager
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Be nice, Be cool
          </Typography>
          <Typography variant="body2" component="p">
          On this page you can join the room to talk with the other student
          ,find a room that you are interesting and click to join
            <br />
            {'"Remember:Always be nice"'}
          </Typography>
        </CardContent>
       
      </Card>
    );
  }