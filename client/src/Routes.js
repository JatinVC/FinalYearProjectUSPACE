import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Discussion from './containers/Discussion';
import TeacherReview from './containers/TeacherReview';
import Explain4TRNB from './components/Explain4TRNB';
import GroupManager from './containers/GroupManager';
import IndividualRoom from './components/IndividualRoom';
import CreatePost from './containers/CreatePost';
import { PrivateRoute } from './_services/PrivateRoute';
import Post from './components/Post';
export default function Routes(){
    return(
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                {/* restricted routes below for all users */}
                <PrivateRoute path='/discussion' exact component={Discussion} />
                <PrivateRoute path='/teacherReview' exact component={TeacherReview} />
                <PrivateRoute path='/explain4trnb' exact component={Explain4TRNB} />
                <PrivateRoute path='/projectmanager' exact component={GroupManager} />
                <PrivateRoute path='/individualroom' exact component={IndividualRoom} />
                <PrivateRoute path='/createpost' exact component={CreatePost} />
                <PrivateRoute path='/discussion/:postId' exact component={Post} />
            </Switch>
    );
}