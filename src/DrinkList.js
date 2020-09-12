import React, { useRef } from 'react'
import DrinkProvider, { useAppState } from '@laststance/use-app-state'

const initialState = {
  drinkList: [
    { id: 0, name: 'water' },
    { id: 1, name: 'cola' },
    { id: 2, name: 'tea' }
  ]
}

const DrinkList = () => {
  const [drinkSate, setAppState] = useAppState()
  const button = useRef()
  const drinkList = drinkSate.drinkList

  const addSoda = () => {
    drinkSate.drinkList.push({ id: 3, name: 'soda' })
    setAppState(drinkSate)
    button.current.disabled = true
  }

  return (
    <div>
      <h3>DrinkList</h3>
      <ul>
        {drinkList.map(d => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
      <button ref={button} onClick={() => addSoda()}>
        Add Soda
      </button>
    </div>
  )
}

const DrinkListApp = () => (
  <DrinkProvider initialState={initialState}>
    <DrinkList/>
  </DrinkProvider>
)

export default DrinkListApp
