import React from 'react'
import Grid from '@material-ui/core/Grid'
import Explain4TRNB2 from '../components/Explain4TRNB2'
import Subject from '../components/Subject'
import Room from '../components/Room'
function TeacherReview(){
    return(
        <Grid container direction='row'>
        <Grid xs={2}>
            <Explain4TRNB2/>
        </Grid>
        <Grid container direction='row' xs={10}>
           
              <Room/>
           
        </Grid>
        </Grid>
        
    )
}
export default TeacherReview