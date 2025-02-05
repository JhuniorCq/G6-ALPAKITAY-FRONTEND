import { useContext } from "react";
import { ArtisanContext } from "../context/ArtisanContext/ArtisanContext";

export const useContextArtisan = () => useContext(ArtisanContext);
