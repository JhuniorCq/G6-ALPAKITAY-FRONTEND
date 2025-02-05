import { useEffect, useState } from "react";
import { useGetCategories } from "../../hooks/useGetCategories";
import { URL_SERVER } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./CategoryBox.css";

const customStyles = {
  control: (defaultStyles, state) => ({
    ...defaultStyles,
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
  // const [showCategories, setShowCategories] = useState(false);
  const {
    responseCategories,
    loadingCategories,
    errorCategories,
    getCategories,
  } = useGetCategories();

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
  // <div className="category-box">
  //   <button
  //     className="category-box__button"
  //     onClick={() => setShowCategories(!showCategories)}
  //   >
  //     Categorías
  //   </button>

  //   {showCategories && (
  //     <ul className="category-box__list">
  //       {loadingCategories ? (
  //         <li>Cargando ...</li>
  //       ) : errorCategories ? (
  //         <li>{errorCategories}</li>
  //       ) : (
  //         responseCategories.map((category) => (
  //           <li key={category.id} className="category-box__item">
  //             <Link
  //               to={`/products/${category.name}`}
  //               className="category-box__link"
  //             >
  //               {category.name}
  //             </Link>
  //           </li>
  //         ))
  //       )}
  //     </ul>
  //   )}
  // </div>
};
