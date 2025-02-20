import { useContextArtisanShop } from "../../hooks/useContextArtisanShop";
import "./ArtisanShopProfiles.css";

export const ArtisanShopProfiles = () => {
  const { responseArtisanShops, loadingArtisanShops, errorArtisanShops } =
    useContextArtisanShop();

  console.log(
    "Perfiles de las tiendas de los artesanos: ",
    responseArtisanShops
  );

  if (loadingArtisanShops) {
    return <p>Cargando ...</p>;
  }

  if (errorArtisanShops) {
    return <p>{errorArtisanShops}</p>;
  }

  if (!responseArtisanShops || responseArtisanShops.length === 0) {
    return <p>No hay tiendas disponibles.</p>;
  }

  return (
    <section className="ArtisanShopProfiles">
      {responseArtisanShops.map((shop) => (
        <div key={shop.id} className="ArtisanShopProfiles_box">
          <div className="ArtisanShopProfiles_image">
            <img src={shop.image} alt={shop.name} />
          </div>

          <div className="ArtisanShopProfiles_data">
            <h3><strong>{shop.name}</strong></h3>
            <h5><strong>{shop.artisan}</strong></h5>
            <p>{shop.message}</p>
            <button 
              className="ArtisanShopProfiles_button" 
              onClick={() => navigate(`/tienda/${shop.id}`)}
            >
              Ver Tienda
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
