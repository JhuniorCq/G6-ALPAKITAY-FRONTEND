import { useContextArtisan } from "../../hooks/useContextArtisan";

export const ArtisanProfiles = () => {
  const { responseArtisan, loadingArtisan, errorArtisan, handleGetArtisan } =
    useContextArtisan();

  console.log("Perfil de los artesanos: ", responseArtisan);

  return <section>Perfil de los Artesanos</section>;
};
