import Home from '../views/home'
import Login from '../views/login'
import Piazza from '../views/piazza'
import Edit from '../views/edit'
import Detail from '../views/detail'
import Find from '../views/find'
const routes = [
    {
        path: '/',
        // exact: true,
        component: Home,
        children: [
            {
                path: '/find',
                component: Find
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/piazza',
        component: Piazza
    },
    {
        path: '/piazza/detail',
        component: Detail
    },
    {
        path: '/piazza/edit',
        component: Edit
    }
]

export default routes