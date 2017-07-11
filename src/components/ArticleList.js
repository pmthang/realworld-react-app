import React from 'react'

import ArticlePreView from './ArticlePreView'

const ArticleList = props => {
  if (!props.articles) {
    return <div className='article-preview'>加载中...</div>
  }
  if (props.articles.length === 0) {
    return <div className='article-preview'>还没有人分享.</div>
  }
  return (
    <div>
      {props.articles.map(article => (
        <ArticlePreView key={article.slug} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
