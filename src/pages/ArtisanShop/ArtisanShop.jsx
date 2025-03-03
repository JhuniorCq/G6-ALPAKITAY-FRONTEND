import { useParams } from "react-router-dom";
import { useContextArtisanShop } from "../../hooks/useContextArtisanShop";
import { useContextProducts } from "../../hooks/useContextProducts";
import "./ArtisanShop.css";
import { useState } from "react";

export const ArtisanShop = () => {
  const { responseArtisanShops, loadingArtisanShops, errorArtisanShops } =
    useContextArtisanShop();
  const { responseProducts, loadingProducts, errorProducts } =
    useContextProducts();
  const { id } = useParams();
  const [expanded, setExpanded] = useState(false);

  if (!responseArtisanShops || responseArtisanShops.length === 0) {
    return <p>Cargando tiendas...</p>;
  }
  const artisanShop = responseArtisanShops
    ? responseArtisanShops.find((shop) => shop.id.toString() === id)
    : null;

  console.log("responseArtisanShops:", responseArtisanShops);
  console.log("ID recibido:", id);

  const words = artisanShop?.history ? artisanShop.history.split(" ") : [];
  const previewText =
    words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");

  if (loadingArtisanShops || loadingProducts) return <p>Cargando ...</p>;
  if (errorArtisanShops) return <p>{errorArtisanShops}</p>;
  if (errorProducts) return <p>{errorProducts}</p>;
  if (!artisanShop) return <p>No se encontró la tienda del artesano.</p>;

  const filteredProducts = responseProducts?.filter(
    (product) => product.artisanShop === artisanShop.name
  );

  return (
    <section className="artisan-shop">
      <div key={artisanShop.id} className="artisan-shop__container">
        <div className="artisan-shop__banner">
          <img
            src={artisanShop.bannerImage}
            alt="Portada de la tienda"
            className="artisan-shop__banner-image"
          />
        </div>

        <div className="artisan-shop__profile">
          <img
            src={artisanShop.image}
            alt={artisanShop.name}
            className="artisan-shop__profile-image"
          />
          <div className="artisan-shop__profile-info">
            <h2 className="artisan-shop__profile-name">{artisanShop.name}</h2>
            <p className="artisan-shop__profile-desc">{artisanShop.message}</p>
            <div className="artisan-shop__socials">
              <a
                href={artisanShop.facebook}
                className="artisan-shop__social-link"
              >
                🔵
              </a>
              <a
                href={artisanShop.instagram}
                className="artisan-shop__social-link"
              >
                🟣
              </a>
              <a
                href={artisanShop.youtube}
                className="artisan-shop__social-link"
              >
                🔴
              </a>
            </div>
          </div>
          <div className="artisan-shop__profile_details">
            <div className="artisan-shop__profile_details-item">
              📍{" "}
              <span>
                {artisanShop.district}, {artisanShop.department}
              </span>
            </div>
            <div className="artisan-shop__profile_details-item">
              🎂 <span>Unido el {artisanShop.joinedDate}</span>
            </div>
          </div>
          <div className="artisan-shop__profile_owner">
            <img
              src={artisanShop.ownerImage}
              alt={artisanShop.artisan}
              className="artisan-shop__profile_owner-image"
            />
            <p className="artisan-shop__profile_owner-name">
              {artisanShop.artisan}
            </p>
          </div>
        </div>
      </div>

      {artisanShop.history && (
        <div
          className="artisan-shop__container"
          onClick={() => setExpanded(!expanded)}
          style={{ cursor: "pointer" }}
        >
          <h3>Historia de Impacto</h3>
          <p className="artisan-shop_history">
            {expanded ? artisanShop.history : previewText}
          </p>
        </div>
      )}

      {filteredProducts.length > 0 && (
        <div className="artisan-shop__products">
          <h3>Productos de {artisanShop.name}</h3>
          <div className="products-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">Precio: {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
