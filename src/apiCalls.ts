const getArticles = async () => {
  try {
    const response = await fetch(
      "https://newssapi.org/v2/top-headlines?country=us&apiKey=180f2a4ded404054a9c41418048e9004&category=technology"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export default getArticles;
