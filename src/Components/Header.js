import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      showDropdown: false,
    }
  }

  flipDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown })
  }

  render() {
    return (
      <div className="header">
        <p onClick={this.flipDropdown}>X</p>
        {this.state.showDropdown ? (
          <div className="dropdown" data-testid="dropdown">
            Dropdown menu
          </div>
        ) : null}
      </div>
    )
  }
}