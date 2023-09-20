

const apiCalls = () => {
  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=180f2a4ded404054a9c41418048e9004&category=technology')
    .then(response => response.json())
    .then(data => console.log(data));
};

export default apiCalls;