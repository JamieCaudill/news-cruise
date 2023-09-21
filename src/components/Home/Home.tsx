import Header from "../Header/Header";
import Articles from "../Articles/Articles";


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
}

const Home = ({articles, getArticle}: Props) => {
  return (
    <div className="Home">
      <Header />
      <Articles articles={articles} getArticle={getArticle}/>
    </div>
  );
}

export default Home;