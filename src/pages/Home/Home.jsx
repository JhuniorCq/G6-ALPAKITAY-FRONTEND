import { About } from "../../components/About/About";
import { BannerSection } from "../../components/BannerSection/BannerSection";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import "./Home.css";

import { useGet } from "../../hooks/useGet";
import { useEffect } from "react";

export const Home = () => {
  const { responseGet, loadingGet, errorGet, getData } = useGet({
    loading: true,
  });

  useEffect(() => {
    getData({ url: "http://localhost:8080/api/products/all" });
  }, []);

  return (
    <>
      <section className="home">
        <BannerSection />
        <FeaturedProducts title="Descubre artículos extraordinarios a precios especiales" />
        <FeaturedProducts title="Descubre artículos extraordinarios a precios especiales" />
        <FeaturedProducts title="Descubre artículos extraordinarios a precios especiales" />
        <About />
      </section>

      <div>
        {loadingGet && <p>Cargando ...</p>}

        {!loadingGet && errorGet && <p>{errorGet}</p>}

        {!loadingGet && !errorGet && responseGet && (
          <pre>{JSON.stringify(responseGet, null, 2)}</pre>
        )}
      </div>
    </>
  );
};
