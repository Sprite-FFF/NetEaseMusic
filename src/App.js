import React from 'react';
import './App.css';
import './assets/css/common.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { GetRoutes } from './router/index'
import routes from './router/routes'

function App() {
  return (
    <div className="App">
      <Router>
        <GetRoutes routes={ routes } />
      </Router>
    </div>
  )
}

export default App;
