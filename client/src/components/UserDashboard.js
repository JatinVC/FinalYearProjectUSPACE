import React,{useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import {FormControl} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import {Select} from '@material-ui/core'; 
import {Link as ReLink} from 'react-router-dom'
import {buildURL} from '../_helpers/url-builder';

export default function UserDashboard() {

    const [categoriesList, setCategoriesList] = useState([{
        cat_id: 1,
        cat_name: ''
    }]);

    function getCategories(){
        Axios.get(buildURL('/api/discussion/categories'))
        .then(res=>{
            if(res.data.success){
                setCategoriesList(res.data.category);
            }else{
                console.log('couldnt get categories');
            }
        })
    }

    useEffect(()=>{
        getCategories();
    }, [])

    var renderCategories = categoriesList.map(category=>{
        return(<div key={category.cat_id}><Button component={ReLink} key={category.cat_id} to={`/discussion/category/${category.cat_id}`}>{category.cat_name}</Button></div>);
    });

    return (
        <div>
            <Typography variant="h6">View Posts in Subject</Typography>
            {renderCategories}
        </div>
    )
}
