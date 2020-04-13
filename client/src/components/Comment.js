import React from 'react'
import {Typography} from '@material-ui/core';

export default function Comment(props) {
    return(
        <div>
            <Typography variant="h6">{props.comment.username}</Typography>
            <Typography variant="caption">{props.comment.comment_date}</Typography>
            <Typography variant="body1">{props.comment.comment_content}</Typography>
        </div>
    );
}
