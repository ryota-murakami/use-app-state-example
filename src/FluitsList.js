import React, { useRef } from 'react'
import FruitsProvider, { useAppState } from '@laststance/use-app-state'

const fruitsState = {
  fruitsList: [
    { id: 0, name: 'orange' },
    { id: 1, name: 'apple' },
    { id: 2, name: 'berry' }
  ]
}

const FruitsList = () => {
  const [appState, setAppState] = useAppState()
  const button = useRef()

  const addPeaches = () => {
    appState.fruitsList.push({ id: 3, name: 'peaches' })
    setAppState(appState)
    button.current.disabled = true
  }

  return (
    <div>
      <h3>FruitsList</h3>
      <ul>
        {appState.fruitsList.map(f => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
      <button ref={button} onClick={() => addPeaches()}>
        Add peaches
      </button>
    </div>
  )
}

const FluitsListApp = () => (
  <FruitsProvider initialState={fruitsState}>
    <FruitsList/>
  </FruitsProvider>
)

export default FluitsListApp
