import './App.css'

import React, { useState } from 'react'
import AIQAware, { FieldType } from 'aware-sdk'

import logo from './logo.svg'

const aware = new AIQAware('dfFNXMtxUH2', 'e28EhjiBObs', 'ywlrbsETnSAWy7rYSbzt-iFsBWCz_LHI')

function App () {
  const [message, setMessage] = useState('')
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={async () => {
          const token = await aware.register()
          setMessage(`token registered: ${token}`)
        }}>
          Register
        </button>
        <button onClick={async () => {
          await aware.unregister()
          setMessage('Unregistered')
        }}>
          Unregister
        </button>
        <p>{message}</p>
        <button onClick={async () => {
          setMessage('Trying to send signal...')
          await aware.postCustomSignal(FieldType.BOOL, 'test', true, 'key')
          setMessage('Custom signal sent')
        }}>
          Send Custom signal
        </button>
      </header>
    </div>
  )
}

export default App
