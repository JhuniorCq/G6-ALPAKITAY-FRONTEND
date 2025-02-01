import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link">Historias de Impacto</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link">Artesanos</Link>
        </li>
      </ul>
    </nav>
  );
};
