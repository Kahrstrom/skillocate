import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Profile from './containers/profile'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Profile} />
    </Route>
);
