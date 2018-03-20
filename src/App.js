import React, { Component } from 'react'
import Board from './Board'
import sudoku from 'sudoku-umd'
import logo from './logo.svg'
import './App.css'
import { findLastIndex } from 'lodash/array'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialBoard: '',
      board: '',
      correct: true
    }
    this.onChange = this.onChange.bind(this)
    this.checkGame = this.checkGame.bind(this)
    this.getCorrectResult = this.getCorrectResult.bind(this)
    this.reset = this.reset.bind(this)
    this.newGame = this.newGame.bind(this)
    this.undo = this.undo.bind(this)
  }

  componentWillMount() {
    let initGamge = sudoku.board_string_to_grid(sudoku.generate('easy'))
    let initialBoard = [...initGamge]
    initialBoard.map((item, index) => {
      initialBoard[index] = [...item]
    })
    this.setState({
      initialBoard: initialBoard,
      board: initGamge
    })
  }

  undo() {
    console.log('Test undo')
  }

  redo() {
    console.log('Test redo')
  }

  onChange(event) {
    let { board } = this.state
    if (event.target.value && event.target.value.length > 1) {
      return
    }
    board[event.target.dataset.boxId][event.target.dataset.tileId] = event.target.value
    this.setState({
      board: board
    })
  }

  checkGame() {
    let { board } = this.state
    this.setState({
      correct: sudoku.solve(sudoku.board_grid_to_string(board))
    })
  }

  getCorrectResult() {
    let { initialBoard } = this.state
    this.setState({
      board: sudoku.board_string_to_grid(sudoku.solve(sudoku.board_grid_to_string(initialBoard)))
    })
  }

  reset() {
    let { initialBoard } = this.state
    let boardVal = [...initialBoard]
    boardVal.map((item, index) => {
      boardVal[index] = [...item]
    })
    this.setState({
      board: boardVal
    })
  }

  newGame() {
    let init = sudoku.board_string_to_grid(sudoku.generate('easy'))
    this.setState({
      initialBoard: init,
      board: init
    })
  }

  render() {
    let { board, correct } = this.state
    return (
      <div className="App">
        <Board
          undo={this.undo}
          redo={this.redo}
          board={board}
          correct={correct}
          getCorrectResult={this.getCorrectResult}
          onChange={this.onChange}
          checkGame={this.checkGame}
          reset={this.reset}
          newGame={this.newGame}
        />
      </div>
    )
  }
}

export default App
