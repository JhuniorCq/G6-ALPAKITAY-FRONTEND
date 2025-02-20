import { FeaturedProduct } from "../FeaturedProduct/FeaturedProduct";
import PropTypes from "prop-types";
import "./FeaturedProducts.css";

export const FeaturedProducts = ({ title }) => {
  return (
    <div className="featured-products">
      <h2 className="featured-products__title">{title}</h2>
      <ul className="featured-products__list">
        <FeaturedProduct name="Chullo de alpaca" price={50} />
        <FeaturedProduct name="Chullo de alpaca" price={50} />
        <FeaturedProduct name="Chullo de alpaca" price={50} />
        <FeaturedProduct name="Chullo de alpaca" price={50} />
        <FeaturedProduct name="Chullo de alpaca" price={50} />
      </ul>
    </div>
  );
};

FeaturedProducts.propTypes = {
  title: PropTypes.string.isRequired,
};
