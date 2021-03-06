import React from 'react'
import { Link } from '@reach/router'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/counter" className="App-link">
          Counter
        </Link>{' '}
        <Link to="/multiroot" className="App-link">
          Multi Root
        </Link>{' '}
      </header>
    </div>
  )
}

export default App
