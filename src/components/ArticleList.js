import React from 'react'

const ArticleList = props => {
  if (!props.articles) {
    return <div className='article-preview'>加载中...</div>
  }
  if (props.articles.length === 0) {
    return <div className='article-preview'>还没有人分享.</div>
  }
  return (
    <div>
      {props.articles.map(article => <h2>{article.title}</h2>)}
    </div>
  )
}

export default ArticleList
