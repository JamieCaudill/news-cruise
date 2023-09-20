import './Articles.css'
import { useEffect, useState } from 'react';
import sampleData from '../../sample-data/sampleData.json';

type Article = {
  source: {
    id: string | null,
    name: string | null
  },
  author: string | null,
  title: string | null,
  description: string | null,
  url: string | null,
  urlToImage: string | null,
  publishedAt: string | null,
  content: string | null
}

const Articles = () => {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(sampleData.articles);
    console.log(articles)
  }, []);

  const articleList = articles.map((article) => {
    return (
      <div className="article">
        <img className="article__image" src={article.urlToImage || ''} alt={article.title || 'article image'} />
        <div className="article__header">
          <h3 className="article__title">{article.title}</h3>
          <p className="article__description">{article.description}</p>
        </div>
        <div className="article__details">
          <p className="article__author">{article.author}</p>
          <p className="article__publishedAt">{article.publishedAt}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="articles">
      <h2 className="articles__title">Articles</h2>
      {articleList}
    </div>
  )
};

export default Articles;