/* eslint-disable react-hooks/exhaustive-deps */
import "./Articles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type ArticleType = {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

interface Props {
  articles: ArticleType[];
  getArticle: (e: any) => void;
  filteredArticles: ArticleType[];
}

const Articles = ({articles, getArticle, filteredArticles}: Props) => {
  const [articleList, setArticleList] = useState<ArticleType[]>([]);

  useEffect(() => {
    if (filteredArticles.length) {
      setArticleList(filteredArticles);
    } else {
      setArticleList(articles);
    }
  }, [filteredArticles, articles])
  
  const displayArticles = articleList.map((article) => {
    const timestamp = article.publishedAt;
    const date = timestamp.slice(0, 10);

    return (
      <div
        className="article"
        key={article.publishedAt}
      >
        <div className="article__container">
          <img
            className="article__image"
            src={article.urlToImage || ""}
            alt={article.title || "article image"}
          />
          <div className="article__header">
            <h3 className="article__title">{article.title}</h3>
            <p className="article__author">
              {article.author} {date}
            </p>
            <p className="article__description">{article.description}</p>
            <Link to={`/article/${article.publishedAt}`} className="article__button" id={article.publishedAt} onClick={getArticle}>Read More</Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="articles">
      <h2 className="articles__title">Articles</h2>
      {displayArticles}
    </div>
  );
};

export default Articles;
