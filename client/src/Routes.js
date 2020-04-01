import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Discussion from './containers/Discussion';
import TeacherReview from './containers/TeacherReview'
import Explain4TRNB from './components/Explain4TRNB'
import GroupManager from './containers/GroupManager'
import IndividualRoom from './components/IndividualRoom'
export default () =>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/discussion' exact component={Discussion} />
            <Route path='/teacherReview' exact component={TeacherReview} />
            <Route path='/explain4trnb' exact component={Explain4TRNB} />
            <Route path='/projectmanager' exact component={GroupManager} />
            <Route path='/individualroom' exact component={IndividualRoom} />
        </Switch>;