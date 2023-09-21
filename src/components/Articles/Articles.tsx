/* eslint-disable react-hooks/exhaustive-deps */
import "./Articles.css";
import { useEffect, useState } from "react";
import sampleData from "../../sample-data/sampleData.json";
import { Link } from "react-router-dom";

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
}

const Articles = ({articles, getArticle}: Props) => {

  const articleList = articles.map((article) => {
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
              {article.author} {article.publishedAt}
            </p>
            <p className="article__description">{article.description}</p>
            <Link to={`/article/${date}`}><button className="article__button" id={article.publishedAt} onClick={getArticle}>Read More</button> </Link>
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
