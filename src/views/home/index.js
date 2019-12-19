import React from 'react'
import TabMenu from './TabMenu'
import { GetRoutes } from '../../router/index'
import './index.scss'

const Home = props => {
    const { routes } = props
    console.log(props)
    return(
        <div>
            <TabMenu />
            <GetRoutes routes={ routes }/>
        </div>
    )
}

export default Home