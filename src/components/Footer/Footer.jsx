import { NavLink } from 'react-router-dom';
import './Footer.css';
import sprite from '../../assets/sprite.svg';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <section className="footer-main container">
        <div className="footer_container_flex">
          <h2 className="footer-title">
            <span className="text-[#3470ff]">Rent a car</span> and travel in
            comfort
          </h2>
          <div className="footer_contact_container">
            <address className="contact">
              <p className="footer-p">Contact us</p>
              <ul className="contact-container list">
                <li className="footer_list_icon">
                  <a className="contact-list link" href="tel:+380684439426">
                    +380 (68) 443-94-26
                  </a>
                </li>
                <li className="footer_list_icon">
                  <a
                    className="contact-list link"
                    href="mailto:rentcar@gmail.com"
                  >
                    rentcar@gmail.com
                  </a>
                </li>
              </ul>
            </address>
            <div className="footer-svg-container">
              <ul className="footer_list">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <svg className="footer-icon">
                      <use href={`${sprite}#icon-instagram`}></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <svg className="footer-icon">
                      <use href={`${sprite}#icon-twitter`}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="footer-span-line"></span>
        <nav>
          <ul className="footer-nav-container">
            <li>
              <NavLink className="link_header" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link_header" to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink className="link_header" to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
