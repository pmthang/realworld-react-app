import React, { Component } from 'react'

const Banner = ({ appName }) => (
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">
        { appName }
      </h1>
      <p>分享你的故事.</p>
    </div>
  </div>
)

export default Banner