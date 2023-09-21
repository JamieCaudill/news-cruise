/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./Filter.css";

// pass in function that filters articles by source and updates state
// 

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
  filterArticles: (filter: string) => void;
  articles: ArticleType[];
}

const Filter = ({filterArticles, articles}: Props) => {
  const [filter, setFilter] = useState<string>('');

  const handleChange = (e: any) => {
    const source = e.target.value;
    setFilter(source);
    
  }

  useEffect(() => {
    filterArticles(filter);
  }, [filter]);

  const uniqueSources = Array.from(new Set<string>(articles.map(article => {
    return article.source.name || '';
  })));

  return (
    <label htmlFor="filter">Filter by Source:  
      <select className="filter" onChange={handleChange}>
        <option value="">All</option>
        {uniqueSources.map((source, index) => {
          return <option key={index} value={source}>{source}</option>
        }
        )}
      </select>
    </label>
  );
}

export default Filter;