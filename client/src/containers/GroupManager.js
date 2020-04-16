import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Explain4TRNB2 from '../components/Explain4TRNB2'
import Room from '../components/Room'
import axios from 'axios';
function TeacherReview(){
    const [projects, setProjects] = useState({
        userprojects: [],
        invprojects: []
    });

    function getProjects(){
        axios.get(`http://localhost:8000/api/groupmanager/projects/${localStorage.getItem('id')}`)
        .then(res=>{
            setProjects({
                userprojects: res.data.userprojects,
                invprojects: res.data.invprojects
            });
        });
    }

    useEffect(()=>{
        getProjects();
    }, []);

    const renderUserProjects = projects.userprojects.map((project)=>{
        return(<Room key={project.project_id} project={project}></Room>);
    });
    const renderInvProjects = projects.invprojects.map((project)=>{
        return(<Room key={project.project_id} project={project}></Room>);
    });
    return(
        <Grid container direction='row'>
            <Grid xs={3}>
                <Explain4TRNB2/>
            </Grid>
            <Grid xs={9}>
                {renderUserProjects}
                {renderInvProjects}
            </Grid>
        </Grid>
        
    )
}
export default TeacherReview