import { NavLink } from 'react-router-dom';
// import { styles } from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <nav className="container">
        <NavLink className="link_header" to="/">
          Home
        </NavLink>
        <NavLink className="link_header" to="/catalog">
          Catalog
        </NavLink>
        <NavLink className="link_header" to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
