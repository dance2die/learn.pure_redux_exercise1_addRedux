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

class Room extends React.Component {
  flipLight = () => this.props.dispatch({ type: 'FLIP_LIGHT' })

  render() {
    const lightedness = this.props.isLightOn ? 'lit' : 'dark'
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    )
  }
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
