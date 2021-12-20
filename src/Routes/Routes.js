/**
 *
 * Route file
 * Reports Frontend
 * 
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Routes } from 'react-router-dom';
import { History } from 'history';
import { PrivateRoute } from '../PrivateRoute';
import Msreport from '../Components/Reports/Milestone_value_report';

class Routes extends Component
{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Msreport} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        );
    }

}
export default Routes;