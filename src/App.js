import React from 'react';
import './App.css';
import './assets/css/common.css'
import { getRoutes } from './router'

function App() {
  return (
    <div className="App">
      {
        getRoutes()
      }
    </div>
  )
}

export default App;
