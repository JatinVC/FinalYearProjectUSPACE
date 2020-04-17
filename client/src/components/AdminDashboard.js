import React, {useState, useEffect} from 'react';
import ModeratorDashboard from './ModeratorDashboard';
import Axios from 'axios';
import {FormControl} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import {Select} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function AdminDashboard() {
    const [userList, setUserList] = useState([{
        userId: 1,
        username: ''
    }]);
    const [user, setUser] = useState({
        userId: 1
    });

    const handleChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value});
        event.preventDefault();
    };

    function getUsers(){
        Axios.get('http://localhost:8000/api/getusers')
        .then(res=>{
            setUserList(res.data.users.map((user)=>{
                return{
                    userId: user.user_id,
                    username: user.username
                }
            }));
        });
    }

    useEffect(()=>{
        getUsers();
    }, [])

    function postUser(){
        Axios.post(`http://localhost:8000/api/changerole/${user.userId}`)
        .then(res=>{
            if(res.data.success){
                console.log('operation successful');
            }else{
                console.log('operation unsuccessful');
            }
        });
    }

    var renderUsers=userList.map((user)=>{
        return(<option key={user.userId} value={user.userId}>{user.username}</option>)
    });

    return (
        <div>
            <Grid container>
                <Typography>
                    Change user role
                </Typography>
                <FormControl variant="filled">
                    <InputLabel id="topic-select-label" disableAnimation>User</InputLabel>
                    <Select
                    name="userId"
                    native
                    value={user.userId}
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
                onClick={postUser}
                >
                Change Role
                </Button>
            </Grid>
            <ModeratorDashboard></ModeratorDashboard>
        </div>
    )
}
