import Header from "../Header/Header";
import Articles from "../Articles/Articles";
import Filter from "../Filter/Filter";

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
  articles: ArticleType[];
  getArticle: (e: any) => void;
  filterArticles: (filter: string) => void;
}

const Home = ({ articles, getArticle, filterArticles }: Props) => {
  return (
    <div className="Home">
      <Header />
      <Filter filterArticles={filterArticles}/>
      <Articles articles={articles} getArticle={getArticle} />
    </div>
  );
};

export default Home;
