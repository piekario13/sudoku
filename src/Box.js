import React, { Component } from 'react'
import Tile from './Tile'

class Box extends Component {
  constructor(props) {
    super(props)
  }

  generateTile() {
    let { onChange, tiles, id } = this.props
    let arrayTiles = []
    for (let i = 0; i < tiles.length; i++) {
      arrayTiles.push(<Tile onChange={onChange} key={i} boxId={id} tileId={i} value={tiles[i]} disabled={false} />)
    }
    return arrayTiles
  }

  render() {
    return <div className="Box grid-container-box">{this.generateTile()}</div>
  }
}

export default Box
