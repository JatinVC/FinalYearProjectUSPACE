import React from 'react'
import {Typography, Grid, Avatar} from '@material-ui/core';

export default function Comment(props) {
    return(
        <div>
            <Grid direction="row">
                <Grid xs={1}>
                    <Avatar alt={props.comment.username} src={`https://ui-avatars.com/api/?name=${props.comment.username}`}></Avatar>
                </Grid>
                <Grid xs={1}>
                    <Typography variant="h6">{props.comment.username}</Typography>
                </Grid>
            </Grid>
            <Typography variant="caption">{props.comment.comment_date}</Typography>
            <Typography variant="body1">{props.comment.comment_content}</Typography>
        </div>
    );
}
