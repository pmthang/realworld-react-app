import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './Header'
// import Home from './Home'

const mapStateToProps = state => ({
  appName: state.appName
})

class App extends Component {
  render() {
    const { appName } = this.props
    return (
      <div>
        <Header appName={appName}></Header>
      </div>
    )
  }
}

export default connect(mapStateToProps, {})(App)
