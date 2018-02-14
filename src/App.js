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
    let init = sudoku.generate('easy').split('')
    this.setState({
      initialBoard: init,
      board: init
    })
  }

  onChange(event) {
    let { board } = this.state
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
    console.log('asdsd')
    let { board } = this.state
    this.setState({
      board: sudoku.solve(board.join('')).split('')
    })
  }

  reset() {
    console.log('ASd')
    let { initialBoard } = this.state
    console.log(initialBoard)
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
