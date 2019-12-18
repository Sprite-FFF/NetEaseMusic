import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import Login from './views/login'
import Piazza from './views/piazza'
import Edit from './views/edit'
import Detail from './views/detail'
export const getRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={ Login } />
                <Route exact path="/" component={ Home } />
                <Route path="/piazza" component={ Piazza } />
                <Route path="/piazza/edit" component={ Edit } />
                <Route path="/piazza/detail" component={ Detail } />
            </Switch>
        </Router>
    )
}

