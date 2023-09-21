import Header from "../Header/Header";
import "./Article.css";

const Article = ({ article }: any) => {
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
          <p className="story__published">{article.publishedAt}</p>
          <p className="story__source">{article.source.name}</p>
          <p className="story__content">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
