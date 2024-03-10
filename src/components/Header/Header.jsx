import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="w-screen py-[10px] border-b-[1px] fixed  bg-[rgb(0,0,0,0.7)] z-30 ">
      <nav className="container flex justify-around">
        <NavLink className="link_header" to="/" onClick={scrollToTop}>
          Home
        </NavLink>
        <NavLink className="link_header" to="/catalog" onClick={scrollToTop}>
          Catalog
        </NavLink>
        <NavLink className="link_header" to="/favorites" onClick={scrollToTop}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
