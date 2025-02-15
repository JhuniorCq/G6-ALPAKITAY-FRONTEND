import { useContextArtisanShop } from "../../hooks/useContextArtisanShop";

export const ArtisanShopProfiles = () => {
  const { responseArtisanShops, loadingArtisanShops, errorArtisanShops } =
    useContextArtisanShop();

  console.log(
    "Perfiles de las tiendas de los artesanos: ",
    responseArtisanShops
  );

  return loadingArtisanShops ? (
    <p>Cargando ...</p>
  ) : errorArtisanShops ? (
    <p>{errorArtisanShops}</p>
  ) : (
    responseArtisanShops && (
      <section>
        Perfil de las tiendas de los Artesanos:{" "}
        {JSON.stringify(responseArtisanShops)}
      </section>
    )
  );
};
