import React, { Component } from 'react'

class Header extends Component {
  render() {
    const { appName } = this.props
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand">{appName}</a>
        </div>
      </nav>
    )
  }
}

export default Header