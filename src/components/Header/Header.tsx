import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/"><h1 className="header__title">News Cruise</h1></Link>
    </header>
  );
};

export default Header;