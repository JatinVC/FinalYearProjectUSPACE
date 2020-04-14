import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Reviews from '../components/ReviewCard'
import Subject from '../components/Subject'
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
function TeacherReview(){
    const [subjects, setSubjects] = useState([]);

    function getSubjects(){
        axios.get('http://localhost:8000/api/discussion/categories')
        .then(res=>{
            if(res.data.success){
                setSubjects(res.data.category);
            }
        });
    }

    useEffect(()=>{
        getSubjects();
    }, []);

    var renderSubjects = subjects.map((subject)=>{
        return(<Subject key={subject.cat_id} subject={subject}></Subject>)
    });

    return(
        <Grid container direction='row'>
        <Grid xs={2}>
            <Reviews/>
        </Grid>
        <Grid container direction='row' xs={10}>
           {renderSubjects}
        </Grid>
        </Grid>
        
    )
}
export default TeacherReview