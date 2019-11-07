import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Piazza from './views/piazza'
import Edit from './views/edit'
export const getRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/piazza" component={ Piazza } />
                <Route path="/piazza/edit" component={ Edit } />
            </Switch>
        </Router>
    )
}

