import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Header'
// import Home from './Home'

const mapStateToProps = state => ({
  appName: state.appName
})

class App extends Component {
  render() {
    const { appName, children } = this.props
    return (
      <div>
        <Header appName={appName}></Header>
        { children }
      </div>
    )
  }
}

App.propTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {})(App)
