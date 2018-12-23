import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Profile from '../Component/Profile/Profile';
import NewsFeed from '../Component/NewsFeed/NewsFeed';
class BasicRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/home" component={NewsFeed} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        );
    }
}

export default BasicRouter;