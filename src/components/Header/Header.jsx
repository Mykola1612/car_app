import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav className="container flex justify-around">
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
