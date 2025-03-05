import { useEffect, useState } from "react";
import { ALL_OPTION, URL_BACKEND, URL_SERVER } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useGet } from "../../hooks/useGet";
import "./CategoryBox.css";

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
    fontSize: "0.95rem",
    cursor: "pointer",
  }),
  placeholder: (defaultStyles, state) => ({
    ...defaultStyles,
    color: "black",
    fontSize: "0.95rem",
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
    const path =
      selectedOption.label === ALL_OPTION
        ? "/products"
        : `/products/${selectedOption.label}`;

    navigate(path);
  };

  useEffect(() => {
    const handleCategories = async () => {
      const response = await getCategories({
        url: `${URL_BACKEND}/api/categories/all`,
      });

      setCategories([
        { value: 0, label: ALL_OPTION },
        ...response.map((category) => ({
          value: category.id,
          label: category.name,
        })),
      ]);
    };

    handleCategories();
  }, []);

  if (loadingCategories) {
    return <p>Cargando ...</p>;
  }

  if (errorCategories) {
    return <p>{errorCategories}</p>;
  }

  if (responseCategories) {
    return (
      <Select
        options={categories}
        placeholder="Categorías"
        styles={customStyles}
        onChange={handleSelectChange}
      />
    );
  }
};
