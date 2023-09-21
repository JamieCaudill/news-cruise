import { useState, useEffect } from "react";

// pass in function that filters articles by source and updates state
// 

interface Props {
  filterArticles: (filter: string) => void;
}

const Filter = ({filterArticles}: Props) => {
  const [filter, setFilter] = useState<string>('');

  const handleChange = (e: any) => {
    setFilter(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    filterArticles(filter);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="filter">Filter by source</label>
      <input type="text" id="filter" value={filter} onChange={handleChange}/>
      <button type="submit">Filter</button>
    </form>
  );
}

export default Filter;