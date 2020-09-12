import React from 'react'
import DrinkList from './DrinkList'
import FruitsList from './FluitsList'

import './MultiRoot.css'

function MultiRoot() {
  return (
    <div className="MultiRoot">
      <DrinkList />
      <FruitsList />
    </div>
  )
}

export default MultiRoot
