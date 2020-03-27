import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return(
        <BrowserRouter> {/* BrouserRouter have to encapsulate all content */}
            <Switch> {/* Ensures that only one page'll be loaded by time */}
                <Route path="/" exact component={Logon} /> {/* "exact" if for the path for this page be exacly "/" without exact the path that starts with "/" will go to this page (ex: /register, /ongs, ...)*/}
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}