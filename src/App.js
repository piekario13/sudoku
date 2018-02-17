import React, { Component } from 'react'
import Board from './Board'
import sudoku from 'sudoku-umd'
import logo from './logo.svg'
import './App.css'

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
  }

  componentWillMount() {
    let initGamge = sudoku.generate('easy').split('')
    let initialBoard = [...initGamge]
    this.setState({
      initialBoard: initialBoard,
      board: initGamge
    })
  }

  onChange(event) {
    let { board } = this.state
    if (event.target.value && event.target.value.length > 1) {
      return
    }
    board[event.target.dataset.id] = event.target.value
    this.setState({
      board: board
    })
  }

  checkGame() {
    let { board } = this.state
    console.log(sudoku.solve(board.join('')))
    this.setState({
      correct: sudoku.solve(board.join(''))
    })
  }

  getCorrectResult() {
    let { initialBoard } = this.state
    this.setState({
      board: sudoku.solve(initialBoard.join('')).split('')
    })
  }

  reset() {
    let { initialBoard } = this.state
    this.setState({
      board: initialBoard
    })
  }

  newGame() {
    let init = sudoku.generate('easy').split('')
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
