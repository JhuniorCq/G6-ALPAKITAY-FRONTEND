import chullo from "../../assets/images/chullo.jpg";
import "./FeaturedProduct.css";

export const FeaturedProduct = ({ name, price }) => {
  return (
    <li className="featured-product">
      <img className="featured-product__image" src={chullo} alt="" />
      <div className="featured-product__info">
        <h3 className="feactured-product__name">{name}</h3>
        <p className="featured-product__price">S/. {price}</p>
      </div>
    </li>
  );
};
