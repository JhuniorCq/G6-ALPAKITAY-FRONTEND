import { useState } from "react";
import "./CategoryBox.css";

export const CategoryBox = () => {
  const [showCategories, setShowCategories] = useState(false);

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
          <li className="category-box__item">Ponchos</li>
          <li className="category-box__item">Chullos</li>
          <li className="category-box__item">Mantas</li>
          <li className="category-box__item">Bufandas</li>
          <li className="category-box__item">Tapices</li>
        </ul>
      )}
    </div>
  );
};
