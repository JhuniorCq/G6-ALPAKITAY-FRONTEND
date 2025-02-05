import "./ProductCard.css";

export const ProductCard = ({ name, price, image, artisan }) => {
  return (
    <li className="product-card">
      <img src={image} alt="" className="product-card__image" />
      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">S/. {price}</p>
        <p className="product-card__artisan">Producto de {artisan}</p>
      </div>
    </li>
  );
};
