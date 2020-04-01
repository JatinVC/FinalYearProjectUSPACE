import React from 'react'
import Grid from '@material-ui/core/Grid'
import Explain4TRNB from '../components/Explain4TRNB'
import Subject from '../components/Subject'
function TeacherReview(){
    return(
        <Grid container direction='row'>
        <Grid xs={2}>
            <Explain4TRNB/>
        </Grid>
        <Grid container direction='row' xs={10}>
           
              <Subject/>
           
        </Grid>
        </Grid>
        
    )
}
export default TeacherReview