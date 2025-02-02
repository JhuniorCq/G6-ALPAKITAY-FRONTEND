import { useEffect, useState } from "react";
import { useGetCategories } from "../../hooks/useGetCategories";
import { URL_SERVER } from "../../utils/constants";
import "./CategoryBox.css";
import { Link } from "react-router-dom";

export const CategoryBox = () => {
  const [showCategories, setShowCategories] = useState(false);
  const {
    responseCategories,
    loadingCategories,
    errorCategories,
    getCategories,
  } = useGetCategories();

  useEffect(() => {
    getCategories({ url: `${URL_SERVER}/categories` });
  }, []);

  return (
    <div className="category-box">
      <button
        className="category-box__button"
        onClick={() => setShowCategories(!showCategories)}
      >
        Categorías
      </button>

      {showCategories && (
        <ul className="category-box__list">
          {loadingCategories ? (
            <li>Cargando ...</li>
          ) : errorCategories ? (
            <li>{errorCategories}</li>
          ) : (
            responseCategories.map((category) => (
              <li key={category.id} className="category-box__item">
                <Link
                  to={`/products/${category.name}`}
                  className="category-box__link"
                >
                  {category.name}
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
