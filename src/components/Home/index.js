import React, { Component } from 'react'
import { connect } from 'react-redux'

import Banner from './Banner'
import MainView from './MainView'

import { articles } from '../../api'

const mapStateToProps = state => ({
  appName: state.appName
})

const mapDisPatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: 'HOME_PAGE_LOADED', payload })
})

class Home extends Component {
  componentWillMount () {
    this.props.onLoad(articles.all)
  }

  render () {
    const { appName } = this.props
    return (
      <div className='home-page'>
        <Banner appName={appName} />
        <div className='container page'>
          <div className='row'>
            <MainView />
            <div className='col-md-3'>
              <div className='sidebar'>
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Home)
