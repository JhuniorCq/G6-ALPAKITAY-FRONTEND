import { useEffect, useState } from "react";
import { useContextArtisan } from "../../hooks/useContextArtisan";
import Select from "react-select";
import { useContextProducts } from "../../hooks/useContextProducts";
import { ALL_OPTION } from "../../utils/constants";

export const FilterByArtisan = ({ filteredProducts, setFilteredProducts }) => {
  const { responseArtisan, loadingArtisan, errorArtisan, handleGetArtisan } =
    useContextArtisan();
  const {
    /*products,*/ responseProducts,
    loadingProducts,
    errorProducts,
    handleGetProducts,
  } = useContextProducts();
  const [artisansOptions, setArtisansOptions] = useState([]);

  const handleSelectChange = (selectedOption) => {
    if (responseArtisan) {
      console.log("Opción de artesano: ", selectedOption);
      console.log("Lista de productos por categoría: ", responseProducts);

      const selectedArtisan = selectedOption.label;

      // TODO: Un filtro reemplaza al otro, eso no debe ser así

      // La opción "Todo" debe respetar el filtro actual de "Precio"
      // if (selectedArtisan === ALL_OPTION) {
      //   setFilteredProducts(responseProducts);
      //   return;
      // }

      const acceptedProducts = filteredProducts.filter(
        (product) => product.artisan === selectedArtisan
      );

      console.log("Productos filtrados: ", acceptedProducts);
      setFilteredProducts(acceptedProducts);
    }
  };

  useEffect(() => {
    const getArtisans = async () => {
      const artisans = await handleGetArtisan();
      const artisansOptions = [
        // { value: 0, label: ALL_OPTION },
        ...artisans.map((artisan) => ({
          value: artisan.id,
          label: artisan.name,
        })),
      ];

      setArtisansOptions(artisansOptions);
    };

    getArtisans();
  }, []);

  return loadingArtisan ? (
    <p>Cargando ...</p>
  ) : errorArtisan ? (
    <p>{errorArtisan}</p>
  ) : (
    responseArtisan && (
      <Select
        options={artisansOptions}
        placeholder="Artesanos"
        onChange={handleSelectChange}
      />
    )
  );
};
