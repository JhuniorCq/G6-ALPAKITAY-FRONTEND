import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/artisans-shops" className="navbar__link">
            Tiendas de los Artesanos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
