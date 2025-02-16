import { Link } from "react-router-dom";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <h2 className="about__title">¿Qué es Alpakitay?</h2>
      <div className="about__content">
        <div className="about__info">
          <h3 className="about__info-title">Conectando tradición y diseño</h3>
          <p className="about__info-text">
            Alpakitay es un e-commerce dedicado a llevar lo mejor de los
            textiles artesanales directamente a ti. Nos enfocamos en preservar
            la riqueza cultural de los pueblos andinos, trabajando con
            comunidades de artesanos que han perfeccionado sus técnicas por
            generaciones. Cada pieza que ofrecemos es única, elaborada con
            materiales naturales y un profundo respeto por las tradiciones
            textiles. Creemos en la importancia de conectar el arte textil
            ancestral con el diseño moderno, creando productos que fusionan
            historia, creatividad y calidad.
          </p>
        </div>
        <div className="about__info">
          <h3 className="about__info-title">Apoyamos el comercio justo</h3>
          <p className="about__info-text">
            En Alpakitay, cada compra representa una contribución directa al
            sustento de artesanos independientes. Creemos en el comercio justo,
            asegurando que cada creador reciba un pago digno por su trabajo, sin
            intermediarios que reduzcan sus ganancias. Nuestro compromiso es
            brindarles una plataforma donde puedan exhibir su talento, llegar a
            nuevos mercados y continuar transmitiendo su conocimiento a futuras
            generaciones. Cuando compras en Alpakitay, no solo adquieres un
            producto, sino que también te conviertes en parte de una cadena de
            valor justa y sostenible.
          </p>
        </div>
        <div className="about__info">
          <h3 className="about__info-title">Calidad y autenticidad</h3>
          <p className="about__info-text">
            Nos aseguramos de que cada textil en nuestra tienda cumpla con los
            más altos estándares de calidad y autenticidad. Trabajamos con
            fibras naturales como la alpaca, el algodón y la lana de oveja,
            teñidas con pigmentos vegetales para mantener la esencia de la
            tradición andina. Cada prenda, manta o tapiz es el resultado de
            horas de trabajo minucioso, donde cada hilo cuenta una historia y
            cada patrón refleja la identidad cultural de su creador. Al elegir
            nuestros productos, llevas contigo una pieza de arte textil con un
            significado especial y un impacto positivo en las comunidades
            artesanas.
          </p>
        </div>
      </div>
      <Link className="about__button" to="/artisans-shops">
        Explora las tiendas de nuestros artesanos
      </Link>
    </div>
  );
};
