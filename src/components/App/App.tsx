import "./App.css";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Article from "../Article/Article";
import sampleData from "../../sample-data/sampleData.json";
import getArticles from "../../apiCalls";

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

interface Data {
  status?: string;
  totalResults?: number;
  articles?: ArticleType[];
}

function App() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [article, setArticle] = useState<ArticleType>({} as ArticleType);
  const [filteredArticles, setFilteredArticles] = useState<ArticleType[]>([]);
  const [error, setError] = useState<string>("");

  const filterArticles = (filter: string) => {
    if (filter === "All") {
      setFilteredArticles(sampleData.articles);
      console.log("all");
      return;
    }
    const filteredArticles = articles.filter((article) => {
      console.log(filter);
      return article.source.name?.includes(filter);
    });
    if (filteredArticles.length) {
      setFilteredArticles(filteredArticles);
    }
  };

  const getArticle = (e: any) => {
    const foundArticle = articles.find((article) => {
      return article.publishedAt === e.target.id;
    });
    setArticle(foundArticle || ({} as ArticleType));
  };

  useEffect(() => {
    getArticles().then((data: Data) => {
    const writtenArticles = data.articles?.filter((article) => {
      return article.source.name !== "YouTube";
      })
      setArticles(writtenArticles || []);
    })
    .catch((error) => {
      setError(error.message);
      console.log(error.message)
    })
    // setArticles(writtenArticles);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              getArticle={getArticle}
              filterArticles={filterArticles}
              filteredArticles={filteredArticles}
              error={error}
            />
          }
        />
        <Route path="/article/*" element={<Article article={article} />} />
      </Routes>
    </div>
  );
}

export default App;
