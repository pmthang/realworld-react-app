import Banner from './Banner'
import MainView from './MainView'
import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  appName: state.appName
})

class Home extends Component {
  render() {
    const { appName } = this.props
    return (
      <div className="home-page">
        <Banner appName={appName} />
        <div className="container page">
          <div className="row">
            <MainView />
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Home)