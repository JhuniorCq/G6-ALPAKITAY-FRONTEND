import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {/* <li className="navbar__item">
          <Link className="navbar__link">Historias de Impacto</Link>
        </li> */}
        <li className="navbar__item">
          <Link to="/artisans" className="navbar__link">
            Tiendas de los Artesanos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
