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
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Explain to use the page
          </Typography>
          <Typography variant="h5" component="h2">
            Teacher Review
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Be nice, Be cool
          </Typography>
          <Typography variant="body2" component="p">
          On this page you can view the contact information of each type of teacher by clicking on the different subjects in the upper Right corner. And check the teacher's teach style to choose the teacher that suits you best.
            <br />
            {'"Remember:Always be nice"'}
          </Typography>
        </CardContent>
       
      </Card>
    );
  }