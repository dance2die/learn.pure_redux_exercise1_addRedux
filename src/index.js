import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

import './index.css'

const log = console.log

const initialState = {
  isLightOn: true,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FLIP_LIGHT':
      return { isLightOn: !state.isLightOn }
    default:
      return state
  }
}

const store = createStore(reducer)

function Room({ dispatch, isLightOn }) {
  const flipLight = () => dispatch({ type: 'FLIP_LIGHT' })
  const lightedness = isLightOn ? 'lit' : 'dark'
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  )
}

function mapStateToProps(state) {
  return { isLightOn: state.isLightOn }
}
const ConnectedRoom = connect(mapStateToProps)(Room)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoom />
  </Provider>,

  document.getElementById('root')
)
