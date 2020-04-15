import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Discussion from './containers/Discussion';
import TeacherReview from './containers/TeacherReview';
import ReviewCard from './components/ReviewCard';
import GroupManager from './containers/GroupManager';
import IndividualRoom from './components/IndividualRoom';
import CreatePost from './containers/CreatePost';
import { PrivateRoute } from './_services/PrivateRoute';
import Post from './components/Post';
import Reviews from './components/Reviews';
export default function Routes(){
    return(
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                {/* restricted routes below for all users */}
                <PrivateRoute path='/discussion' exact component={Discussion} />
                <PrivateRoute path='/teacherreview' exact component={TeacherReview} />
                <PrivateRoute path='/projectmanager' exact component={GroupManager} />
                <PrivateRoute path='/individualroom/:projectId' exact component={IndividualRoom} />
                <PrivateRoute path='/createpost' exact component={CreatePost} />
                <PrivateRoute path='/discussion/:postId' exact component={Post} />
                <PrivateRoute path='/teacherreview/:catId' exact component={Reviews} />
            </Switch>
    );
}