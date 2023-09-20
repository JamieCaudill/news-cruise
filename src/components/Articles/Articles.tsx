/* eslint-disable react-hooks/exhaustive-deps */
import "./Articles.css";
import { useEffect, useState } from "react";
import sampleData from "../../sample-data/sampleData.json";

type Article = {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
};

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(sampleData.articles);
    console.log(articles);
  }, []);

  const articleList = articles.map((article) => {
    return (
      <div
        className="article"
        key={article.title}
        id={article.title || undefined}
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
              {article.author} {article.publishedAt}
            </p>
            <p className="article__description">{article.description}</p>
            <button className="article__button">Read More</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="articles">
      <h2 className="articles__title">Articles</h2>
      {articleList}
    </div>
  );
};

export default Articles;
