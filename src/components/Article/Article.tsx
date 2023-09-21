import Header from "../Header/Header";
import "./Article.css";

const Article = ({ article }: any) => {

  const timestamp = article.publishedAt;
  const date = timestamp.slice(0, 10);

  return (
    <div className="story">
      <Header />
      <div className="story__container">
        <div className="story__left">
          <img
            className="story__image"
            src={article.urlToImage}
            alt={article.title}
          />
        </div>
        <div className="story__right">
          <h3 className="story__title">{article.title}</h3>
          <p className="story__author">{article.author}</p>
          <p className="story__published">{date}</p>
          <p className="story__source">{`Source: ${article.source.name}`}</p>
          <p className="story__content">{article.content}</p>
          <a href={article.url} target="blank" className="story__link">Read full article</a>
        </div>
      </div>
    </div>
  );
};

export default Article;
