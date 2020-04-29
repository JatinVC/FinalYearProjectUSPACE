import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
    maxWidth:1000
    },
    media:{
        height:500,
    }
    
  });

export default function AnnouncementCard(props) {
    const classes = useStyles();
    return (
    <Grid item xs={12}> 
        <Card className={classes.root}>
            <CardActionArea>
                <Typography variant='h4' color="primary">{props.announcement.a_title}</Typography>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.announcement.a_date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.announcement.a_content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    )
}
