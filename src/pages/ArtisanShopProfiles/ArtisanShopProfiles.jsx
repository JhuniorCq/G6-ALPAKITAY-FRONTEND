import { useContextArtisanShop } from "../../hooks/useContextArtisanShop";

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

  if (responseArtisanShops) {
    return (
      <section>
        Perfil de las tiendas de los Artesanos:{" "}
        {JSON.stringify(responseArtisanShops)}
      </section>
    );
  }
};
