import { About } from "../../components/About/About";
import { BannerSection } from "../../components/BannerSection/BannerSection";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { Footer } from "../../components/Footer/Footer";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home">
      <BannerSection />
      <FeaturedProducts title="Descubre artículos extraordinarios a precios especiales" />
      <FeaturedProducts title="Descubre artículos extraordinarios a precios especiales" />
      <FeaturedProducts title="Descubre artículos extraordinarios a precios especiales" />
      <About />
      <Footer />
    </section>
  );
};
