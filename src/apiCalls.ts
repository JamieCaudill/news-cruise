const getArticles = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=180f2a4ded404054a9c41418048e9004&category=technology')
  const data = await response.json();
  return data;
};

export default getArticles;