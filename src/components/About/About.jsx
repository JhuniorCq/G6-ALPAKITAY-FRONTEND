import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <h2 className="about__title">¿Qué es Alpakitay?</h2>
      <div className="about__content">
        <div className="about__info">
          <h3 className="about__infot-title">
            Una comunidad con impacto positivo
          </h3>
          <p className="about__info-text">
            Etsy es un mercado internacional en línea al que acuden personas de
            todo el mundo para hacer, vender, comprar y coleccionar productos
            únicos. Somos una comunidad que impulsa cambios positivos para los
            pequeños negocios, las personas y el planeta. Estas son algunas de
            las formas en las que, juntos, creamos un efecto positivo.
          </p>
        </div>
        <div className="about__info">
          <h3 className="about__infot-title">
            Apoya a creadores independientes
          </h3>
          <p className="about__info-text">
            Etsy no tiene almacenes, solo millones de personas vendiendo
            productos que adoran. Nosotros facilitamos todo el proceso y te
            ayudamos a conectar directamente con creadores para que encuentres
            productos extraordinarios.
          </p>
        </div>
        <div className="about__info">
          <h3 className="about__infot-title">Tranquilidad absoluta</h3>
          <p className="about__info-text">
            Tu privacidad es la principal prioridad de nuestro equipo dedicado.
            Lo tenemos todo dispuesto para entrar en acción si necesitas ayuda.
          </p>
        </div>
      </div>
    </div>
  );
};
