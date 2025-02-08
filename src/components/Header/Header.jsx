import { Navbar } from "../Navbar/Navbar";
import { BsCart2 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { CategoryBox } from "../CategoryBox/CategoryBox";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { useState } from "react";
import "./Header.css";
import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";

export const Header = () => {
  const { shoppingCart } = useContextShoppingCart();
  const [shoppingCartOpened, setShoppingCartOpened] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const openShoppingCart = () => {
    setShoppingCartOpened(true);
  };

  const closeShoppingCart = () => {
    setShoppingCartOpened(false);
  };

  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src=""
          alt="Alpakitay"
          onClick={goToHome}
        />

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

        <button className="header__cart-button" onClick={openShoppingCart}>
          <BsCart2 className="header__cart-icon" />
          <p className="header__quantity-products">{shoppingCart.length}</p>
        </button>
      </header>

      <ShoppingCart
        shoppingCartOpened={shoppingCartOpened}
        closeShoppingCart={closeShoppingCart}
      />
    </>
  );
};
