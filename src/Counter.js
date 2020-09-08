import React from 'react'
import  { useAppState } from '@laststance/use-app-state'
import './Counter.css'

const Counter = () => {
  const [appState, setAppState] = useAppState()
  return (
    <div style={{
      height: '100%',
      fontSize: '58px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>
        <button onClick={() => setAppState({ count: appState.count + 1 })}>
          increment
        </button>
        <button onClick={() => setAppState({ count: appState.count - 1 })}>
          decrement
        </button>
      </div>
      <p>{appState.count}</p>
    </div>
  )
}

export default Counter
