import React, { Component, Fragment } from 'react'
import Tile from './Tile'
class Board extends Component {
  constructor(props) {
    super(props)
  }

  generateTile() {
    let { onChange, board } = this.props
    let arrayTiles = []
    for (let i = 0; i <= 80; i++) {
      arrayTiles.push(<Tile onChange={onChange} key={i} id={i} value={board[i]} />)
    }
    return arrayTiles
  }
  render() {
    let { checkGame, correct, getCorrectResult, reset, newGame } = this.props
    return (
      <Fragment>
        <div className="grid-container">{this.generateTile()}</div>
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
