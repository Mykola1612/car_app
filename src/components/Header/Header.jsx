import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="w-screen py-[10px] border-b-[1px] fixed  bg-[rgb(0,0,0,0.6)] z-30 ">
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
