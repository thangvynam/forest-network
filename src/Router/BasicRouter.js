import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Profile from '../Component/Profile/Profile';
import NewsFeed from '../Component/NewsFeed/NewsFeed';
import Login from '../Component/Login/Login';
class BasicRouter extends Component {
    render() {
        return (
            <Switch>
                <Route  exact path="/"  component={NewsFeed} />
                <Route  path="/home"  component={NewsFeed} />
                <Route  path="/profile" component={Profile} />
                <Route  path="/login" component={Login} />
            </Switch>
        );
    }
}

export default BasicRouter;