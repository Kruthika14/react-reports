/**
 *
 * Route file
 * Reports Frontend
 * 
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './History';
// import { PrivateRoute } from '../PrivateRoute';
import Msreport from '../Components/Reports/Milestone_value_report';

class Routes extends Component
{
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        {/* <Route path="/post/:slug" component={Post} /> */}
                        <Route path="/">
                            <Msreport />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }

}
export default Routes;