import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Discussion from './containers/Discussion';
import TeacherReview from './containers/TeacherReview';
import GroupManager from './containers/GroupManager';
import IndividualRoom from './components/IndividualRoom';
import CreatePost from './containers/CreatePost';
import { PrivateRoute } from './_services/PrivateRoute';
import Post from './components/Post';
import Reviews from './components/Reviews';
import CreateProject from './containers/CreateProject';
import CreateTask from './components/CreateTask';
import AddUser from './components/AddUser';
import Dashboard from './containers/Dashboard';
import CatDiscussion from './containers/CatDiscussion';

export default function Routes(){
    return(
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                {/* restricted routes below for all users */}
                <PrivateRoute path='/dashboard' exact component={Dashboard} />
                <PrivateRoute path='/discussion' exact component={Discussion} />
                <PrivateRoute path='/teacherreview' exact component={TeacherReview} />
                <PrivateRoute path='/projectmanager' exact component={GroupManager} />
                <PrivateRoute path='/createpost' exact component={CreatePost} />
                <PrivateRoute path='/discussion/:postId' exact component={Post} />
                <PrivateRoute path='/discussion/category/:catId' exact component={CatDiscussion} />
                <PrivateRoute path='/teacherreview/:catId' exact component={Reviews} />
                <PrivateRoute path='/projectmanager/createproject' exact component={CreateProject} />
                <PrivateRoute path='/projectmanager/:projectId' exact component={IndividualRoom} />
                <PrivateRoute path='/projectmanager/:projectId/createtask' exact component={CreateTask} />
                <PrivateRoute path='/projectmanager/:projectId/adduser' exact component={AddUser} />
            </Switch>
    );
}