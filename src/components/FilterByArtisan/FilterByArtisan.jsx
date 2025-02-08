import { useEffect, useState } from "react";
import { useContextArtisan } from "../../hooks/useContextArtisan";
import { ALL_OPTION } from "../../utils/constants";
import Select from "react-select";

export const FilterByArtisan = ({ setSelectedFilter }) => {
  const { responseArtisan, loadingArtisan, errorArtisan, handleGetArtisan } =
    useContextArtisan();
  const [artisansOptions, setArtisansOptions] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setSelectedFilter((prev) => ({ ...prev, artisan: selectedOption }));
  };

  useEffect(() => {
    const getArtisans = async () => {
      const artisans = await handleGetArtisan();
      const artisansOptions = [
        { value: 0, label: ALL_OPTION },
        ...artisans.map((artisan) => ({
          value: artisan.id,
          label: artisan.name,
        })),
      ];

      setArtisansOptions(artisansOptions);
    };

    getArtisans();
  }, []);

  return (
    <div>
      <p>Artesanos: </p>
      {loadingArtisan ? (
        <p>Cargando ...</p>
      ) : errorArtisan ? (
        <p>{errorArtisan}</p>
      ) : (
        responseArtisan && (
          <Select
            options={artisansOptions}
            // placeholder="Artesanos"
            defaultValue={artisansOptions[0]}
            onChange={handleSelectChange}
          />
        )
      )}
    </div>
  );
};
