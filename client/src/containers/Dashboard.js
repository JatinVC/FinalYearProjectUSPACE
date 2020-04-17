import React, {useContext, useState} from 'react'
import AdminDashboard from '../components/AdminDashboard';
import ModeratorDashboard from '../components/ModeratorDashboard';
import UserDashboard from '../components/UserDashboard';
import { AuthContext } from '../contexts/auth-context';

export default function Dashboard() {
    const role = localStorage.getItem('role')
    // const [roleUser, setRoleUser] = useState(role);

    const userRole = () =>{
        console.log(role);
        if(role==1){
            return(<AdminDashboard></AdminDashboard>);
        }else if(role==2){
            return(<ModeratorDashboard></ModeratorDashboard>);
        }else if(role==1){
            return(<UserDashboard></UserDashboard>);
        }
    }

    return (
        <div>
            {userRole()}
        </div>
    )
}
