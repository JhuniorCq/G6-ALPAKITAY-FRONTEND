import { useEffect, useState } from "react";
import { URL_SERVER } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./CategoryBox.css";
import { useGet } from "../../hooks/useGet";

const customStyles = {
  control: (defaultStyles, state) => ({
    ...defaultStyles,
    cursor: "pointer",
    borderColor: "transparent",
    boxShadow: "none",
    backgroundColor: "transparent",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
  menu: (defaultStyles, state) => ({
    ...defaultStyles,
    width: "250px",
    textTransform: "capitalize",
  }),
  option: (defaultStyles, state) => ({
    ...defaultStyles,
  }),
  placeholder: (defaultStyles, state) => ({
    ...defaultStyles,
    color: "black",
  }),
  singleValue: (defaultStyles, state) => ({
    ...defaultStyles,
    textTransform: "capitalize",
  }),
  indicatorSeparator: (defaultStyles, state) => ({
    ...defaultStyles,
    display: "none",
  }),
};

export const CategoryBox = () => {
  const {
    responseGet: responseCategories,
    loadingGet: loadingCategories,
    errorGet: errorCategories,
    getData: getCategories,
  } = useGet({
    loading: true,
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleSelectChange = (selectedOption) => {
    navigate(`/products/${selectedOption.label}`);
  };

  useEffect(() => {
    const handleCategories = async () => {
      const response = await getCategories({
        url: `${URL_SERVER}/categories`,
      });

      setCategories(
        response.map((category) => ({
          value: category.id,
          label: category.name,
        }))
      );
    };

    handleCategories();
  }, []);

  return loadingCategories ? (
    <p> Cargando ... </p>
  ) : errorCategories ? (
    <p>{errorCategories}</p>
  ) : (
    responseCategories && (
      <Select
        options={categories}
        placeholder="Categorías"
        styles={customStyles}
        onChange={handleSelectChange}
      />
    )
  );
};
