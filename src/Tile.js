import React, { Component, Fragment } from 'react'

class Tile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { onChange, value, id } = this.props
    return (
      <Fragment>
        <input
          className="Tile"
          type="number"
          min="1"
          max="7"
          data-id={id}
          value={value}
          maxLength="1"
          onChange={onChange}
        />
      </Fragment>
    )
  }
}

export default Tile
