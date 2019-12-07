import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import BookRegister from './pages/BookRegister';
import BookEdit from './pages/BookEdit'

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/bookregister" component={BookRegister} />
            <Route exact path="/bookedit" component={BookEdit} />

        </Switch>
    </BrowserRouter>
  );
}
