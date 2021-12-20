/**
 *
 * Route file
 * Reports Frontend
 * 
 */

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Cookies.get('loginuserDetail')
            ? <Component {...props} />
            : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)