import React, {useState, useEffect} from 'react';
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

export default function AddUser(props) {
    const [userList, setUserList] = useState([{
        user_id: 1,
        username: ''
    }]);
    const [user, setUser]=useState({
        user_id: 1
    });
    const [message, setMessage]=useState('');
    const {match: {params}} = props;

    function getUsers(){
        Axios.get(`http://localhost:8000/api/getusers`)
        .then(res=>{
            if(res.data.success){
                setUserList(res.data.users);
            }
        });
    }

    function addUser(){
        Axios.post(`http://localhost:8000/api/groupmanager/projects/${params.projectId}/owner/${localStorage.getItem('id')}/adduser/${user.user_id}`)
        //groupmanager/projects/:project_id/owner/:usera_id/adduser/:userb_id
        .then(res=>{
            if(res.data.success){
                props.history.push(`/projectmanager/${params.projectId}`);
            }else{
                setMessage('Add user failed, please try again');
            }
        });
    }

    useEffect(()=>{
        getUsers();
    }, [])

    const handleChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value});
        event.preventDefault();
    };

    var renderUsers=userList.map(user=>{
        return(<option key={user.user_id} value={user.user_id}>{user.username}</option>)
    });

    return (
        <div>
            <Grid container>
                <Typography>
                    Add user to project
                </Typography>
                <FormControl variant="filled">
                    <InputLabel id="topic-select-label" disableAnimation>User</InputLabel>
                    <Select
                    name="user_id"
                    native
                    value={user.user_id}
                    onChange={handleChange}
                    >
                    {renderUsers}
                    </Select>
                </FormControl>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={addUser}
                >
                Add user
                </Button>
            </Grid>
            {message}
        </div>
    )
}
