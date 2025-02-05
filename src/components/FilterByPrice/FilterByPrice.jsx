import Select from "react-select";
import { useContextProducts } from "../../hooks/useContextProducts";
import { ALL_OPTION } from "../../utils/constants";

const priceOptions = [
  // {
  //   value: 0,
  //   label: ALL_OPTION,
  // },
  {
    value: 1,
    label: "0 a 50",
    min: 0,
    max: 50,
  },
  {
    value: 2,
    label: "51 a 100",
    min: 51,
    max: 100,
  },
  {
    value: 3,
    label: "101 a 150",
    min: 101,
    max: 150,
  },
  {
    value: 4,
    label: "151 a 200",
    min: 151,
    max: 200,
  },
  {
    value: 5,
    label: "201 a más",
    min: 201,
    max: 999999,
  },
];

export const FilterByPrice = ({ filteredProducts, setFilteredProducts }) => {
  const {
    /*products,*/ responseProducts,
    loadingProducts,
    errorProducts,
    handleGetProducts,
  } = useContextProducts();

  const handleSelectChange = (selectedOption) => {
    if (responseProducts) {
      console.log("Opción de precio escogida: ", selectedOption);
      console.log("Lista de productos por categoría: ", responseProducts);

      const selectedPrice = selectedOption.label;

      // TODO: Un filtro reemplaza al otro, eso no debe ser así

      // La opción "Todo" debe respetar el filtro actual de "Artesano"
      // if (selectedPrice === ALL_OPTION) {
      //   setFilteredProducts(responseProducts);
      //   return;
      // }

      // CREO QUE SI DEBO USAR A responseProducts EN VEZ DE filteredProducts, PERO TAMBIÉN DEBO HACER QUE SE RESPETEN LOS FILTROS. USAR A filteredProducts HACE QUE EN ALGÚN MOMENTO EL ARRAY DE PRODUCTOS FILTRADOS ESTE VACÍO, POR LO QUE YA NO SE PODRÁ FILTRAR COSAS DE ALGO VACÍO, POR ESO NO SE DEBE USAR filteredProducts con el .filter()

      // TAL VEZ DEBA CREAR UN ESTADO DE LOS FILTROS EN <ProductFilters /> Y LUEGO RECOLECTAR LOS FILTROS SELECCIONADOS POR EL USUARIO, Y LUEGO DE ESO RECIÉN HACER EL FILTRADOEN <ProductsFilters />
      const acceptedProducts = filteredProducts.filter(
        (product) =>
          product.price >= selectedOption.min &&
          product.price <= selectedOption.max
      );

      console.log("Productos filtrados: ", acceptedProducts);
      setFilteredProducts(acceptedProducts);
    }
  };

  return (
    <Select
      options={priceOptions}
      placeholder="Precios"
      onChange={handleSelectChange}
    />
  );
};
