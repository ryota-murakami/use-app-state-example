import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import Provider from '@laststance/use-app-state'
import App from './App'
import Counter from './Counter'
import MultiRoot from './MultiRoot'
import Action from './Action'
import * as serviceWorker from './serviceWorker'

// const initialState =

ReactDOM.render(
  <React.StrictMode>
    <Provider initialState={{ count: 0 }}>
      <Router>
        <App path="/"/>
        <Counter path="/counter"/>
        <MultiRoot path="/multiroot"/>
        <Action path="/action"/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
