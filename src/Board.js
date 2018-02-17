import React, { Component, Fragment } from 'react'
import Tile from './Tile'
import Box from './Box'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  generateBox() {
    let { onChange, board } = this.props
    let arrayBox = []
    for (let i = 0; i < board.length; i++) {
      arrayBox.push(<Box key={i} id={i} tiles={board[i]} onChange={onChange} />)
    }
    return arrayBox
  }

  render() {
    let { checkGame, correct, getCorrectResult, reset, newGame, undo, redo } = this.props
    return (
      <Fragment>
        <button onClick={undo}>Cofinj</button>
        <button onClick={redo}>Przywróc</button>
        <div className="grid-container">{this.generateBox()}</div>
        <div className="Buttons">
          <button onClick={getCorrectResult}>Uzupełnij</button>
          <button onClick={checkGame}>Sprawdzam</button>
          <button onClick={reset}>Reset</button>
          <button onClick={newGame}>Nowa gra</button>
        </div>
        <div className="StatusGame">{correct ? 'Jest ok' : 'Nie jest ok'}</div>
      </Fragment>
    )
  }
}

export default Board
