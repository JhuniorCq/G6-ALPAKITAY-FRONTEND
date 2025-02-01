import chullo from "../../assets/images/chullo.jpg";

import "./BannerSection.css";

export const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="banner-section__large-banner">
        <div className="banner-section__large-banner-text">
          <h1 className="banner-section__large-banner-title">
            El amor no puede llegar tarde
          </h1>
          <p className="banner-section__large-banner-paragraph">
            Descubre regalos que se envían en 3 días o menos
          </p>

          <button className="banner-section__large-banner-button">
            Ver artículos de San Valentín
          </button>
        </div>
        <img
          className="banner-section__large-banner-image"
          src={chullo}
          alt="..."
        />
      </div>

      <div className="banner-section__small-banner">
        <div className="banner-section__small-banner-text">
          <h1 className="banner-section__small-banner-title">
            Regalos para ella
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
      </div>
    </div>
  );
};
