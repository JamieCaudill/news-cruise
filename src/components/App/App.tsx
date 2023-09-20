import React from 'react';
import './App.css';
import sampleData from '../../sample-data/sampleData.json';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
// import apiCalls from '../../apiCalls';

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

function App() {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(sampleData.articles);
    console.log(articles)
  }, []);


  return (
    <div className="App">
      <Header />
      <Articles />
    </div>
  );
}

export default App;
