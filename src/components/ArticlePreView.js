import React, { Component } from 'react'

const ArticlePreView = props => {
  const { article } = props
  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <a><img src={article.author.image} /></a>
        <div className='info'>
          <a className='author'>{article.author.username}</a>
          <span className='date'>
            {new Date(article.createAt).toLocaleDateString()}
          </span>
        </div>
        <div className='pull-xs-right'>
          <button className='btn btn-sm btn-outline-primary'>
            <i className='ion-heart' />{article.favoritesCount}
          </button>
        </div>
        <a to={`article/${article.slug}`} className='preview-link'>
          <h1>{article.title}</h1>
          <p>article.description</p>
          <span>Read more...</span>
          <ul className='tag-list'>
            {article.tagList.map(tag => (
              <li className='tag-default tag-pill tag-outline' key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </a>
      </div>
    </div>
  )
}

export default ArticlePreView

