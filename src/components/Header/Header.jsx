import { Navbar } from "../Navbar/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CategoryBox } from "../CategoryBox/CategoryBox";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src="" alt="Alpakitay" />

      <CategoryBox />

      <div className="header__search-box">
        <input
          className="header__search-input"
          type="text"
          placeholder="Buscar producto"
        />
        <FaSearch className="header__search-icon" />
      </div>

      <Navbar />

      <FaShoppingCart className="header__cart-icon" />
    </header>
  );
};
