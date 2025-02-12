import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGet } from "../../hooks/useGet";
import { URL_SERVER } from "../../utils/constants";
import "./ViewProduct.css";

export const ViewProduct = () => {
  const { id } = useParams();
  const {
    responseGet: responseProduct,
    loadingGet: loadingProduct,
    errorGet: errorProduct,
    getData: getProduct,
  } = useGet({
    loading: true,
  });

  useEffect(() => {
    getProduct({ url: `${URL_SERVER}/products/${id}` });
  }, []);

  return (
    <section>
      {loadingProduct ? (
        <p>Cargando ...</p>
      ) : errorProduct ? (
        <p>{errorProduct}</p>
      ) : (
        responseProduct && (
          <>
            <p>
              Vista del producto con ID: {id} y con nombre:{" "}
              {responseProduct.name}
            </p>
            <br />
            <br />
            <p>{JSON.stringify(responseProduct)}</p>
          </>
        )
      )}
    </section>
  );
};
