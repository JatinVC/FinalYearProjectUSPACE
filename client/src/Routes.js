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
            <Route path='/TeacherReview' exact component={TeacherReview} />
            <Route path='/Explain4TRNB' exact component={Explain4TRNB} />
            <Route path='/Groupmanager' exact component={GroupManager} />
            <Route path='/IndividualRoom' exact component={IndividualRoom} />
        </Switch>;