import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import './index.css'
import App from './App'
import Counter from './Counter'
import MultiRoot from './MultiRoot'
import Action from './Action'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/" />
      <Counter path="/counter"/>
      <MultiRoot path="/multiroot"/>
      <Action path="/action"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
