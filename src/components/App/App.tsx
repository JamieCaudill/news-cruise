import React from "react";
import "./App.css";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Article from "../Article/Article";
import sampleData from "../../sample-data/sampleData.json";
// import apiCalls from '../../apiCalls';


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

function App() {

  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [article, setArticle] = useState<ArticleType>({} as ArticleType);

  const getArticle = (e: any) => {
    const foundArticle = articles.find((article) => {
      return article.publishedAt === e.target.id;
    });
    setArticle(foundArticle || {} as ArticleType);
  }

  useEffect(() => {
    setArticles(sampleData.articles);
    console.log(articles);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' 
        element={<Home 
          articles={articles} 
          getArticle={getArticle}
          />} />
        <Route path='/article/*' element={<Article article={article}/>} />
      </Routes>
    </div>
  );
}

export default App;
