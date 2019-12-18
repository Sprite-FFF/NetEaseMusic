// import routes from './routes'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

export const GetRoutes = (props) => {
    const { routes } = props
    return (
        <Switch>
            {
                routes.map(route => {
                    return <Route exact={ route.exact } path={ route.path } key={ route.path } routes={ route.children } component={ route.component } />
                })
            }
        </Switch>
    )
}