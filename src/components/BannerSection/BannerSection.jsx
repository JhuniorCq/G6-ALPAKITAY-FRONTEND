import { useNavigate } from "react-router-dom";
import chullo from "../../assets/images/chullo.jpg";
import "./BannerSection.css";

export const BannerSection = () => {
  const navigate = useNavigate();

  const goToAllProductsView = () => {
    navigate("/products");
  };

  return (
    <div className="banner-section">
      <button
        className="banner-section__large-banner"
        onClick={goToAllProductsView}
      >
        <div className="banner-section__large-banner-text">
          <h1 className="banner-section__large-banner-title">
            Tejídos con historia y pasión
          </h1>
          <p className="banner-section__large-banner-paragraph">
            Prendas y accesorios hechos a mano con tradición y calidad
          </p>

          <span className="banner-section__large-banner-button">
            Explorar productos
          </span>
        </div>
        <img
          className="banner-section__large-banner-image"
          src={chullo}
          alt=""
        />
      </button>

      <button
        className="banner-section__small-banner"
        onClick={goToAllProductsView}
      >
        <div className="banner-section__small-banner-text">
          <h1 className="banner-section__small-banner-title">
            Elegancia en cada hilo
          </h1>
          <p className="banner-section__small-banner-paragraph">
            Empieza a explorar
          </p>
        </div>
        <img
          className="banner-section__small-banner-image"
          src={chullo}
          alt=""
        />
      </button>
    </div>
  );
};
