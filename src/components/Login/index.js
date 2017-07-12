import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render () {
    return (
      <div className='auth-page'>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-12 col-xs-12 col-md-offset-3'>
              <h1 className='text-xs-center'>登录</h1>
              <p className='text-xs-center'><a>需要一个帐号？</a></p>
              <form>
                <filedset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='eamil'
                    placeholder='邮箱'
                  />
                </filedset>

                <filedset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='password'
                    placeholder='密码'
                  />
                </filedset>

                <button
                  className='btn btn-lg btn-primary pull-xs-right'
                  type='submit'
                >
                  登录
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(Login)