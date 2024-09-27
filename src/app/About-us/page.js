'use client';

import Image from 'next/image';

export default function aboutPage() {
    return (
        <div>
        <div>
            <h1 className="title is-2 has-text-centered">Sobre Nosotros</h1>

            {/* Sección de introducción */}
            <section className="section">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <Image src="/about-us-image.jpg" alt="Taller de alteraciones" width={600} height={400} />
                    </div>
                    <div className="column is-half">
                        <h2 className="title is-4">Quiénes Somos</h2>
                        <p>
                        En <strong>Blanca Alterations</strong>, nos especializamos en ofrecer servicios de alteraciones y costura de la más alta calidad. Con más de 20 años de experiencia, 
                        nuestro objetivo es garantizar que cada prenda se ajuste perfectamente a las necesidades de nuestros clientes.
                        </p>
                        <p>
                        Somos un equipo apasionado por la moda y el detalle, comprometidos con la excelencia y la satisfacción del cliente en cada trabajo que realizamos.
                        </p>
                    </div>
                </div>
            </section>

        {/* Sección de valores */}
        <section className="section has-background-light">
          <h2 className="title is-3 has-text-centered mb-5">Nuestros Valores</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <h3 className="title is-5 mb-3">Calidad</h3>
              <p>
                Utilizamos los mejores materiales y técnicas para asegurar que cada alteración sea precisa y de larga duración.
              </p>
            </div>
            <div className="column has-text-centered">
              <h3 className="title is-5 mb-3">Atención al Detalle</h3>
              <p>
                Creemos que cada puntada cuenta. Nos aseguramos de que cada prenda se ajuste de forma perfecta a tu cuerpo.
              </p>
            </div>
            <div className="column has-text-centered">
              <h3 className="title is-5 mb-3">Satisfacción del Cliente</h3>
              <p>
                Nuestro objetivo principal es asegurar que cada cliente esté completamente satisfecho con el trabajo realizado.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de historia */}
        <section className="section">
          <h2 className="title is-3 has-text-centered mb-5">Nuestra Historia</h2>
          <p>
            Fundado en 2003, Blanca Alterations nació del amor por la moda y el diseño personalizado. Empezamos como un pequeño taller familiar en Cathedral City y hemos crecido hasta convertirnos en un negocio de referencia en la zona, conocido por la calidad y el trato cercano a nuestros clientes.
          </p>
        </section>

        {/* Sección de contacto */}
        <section className="section">
          <div className="has-text-centered">
            <h2 className="title is-3 mb-5">¿Por qué Elegirnos?</h2>
            <p>
              En Blanca Alterations, nos esforzamos por ofrecer el mejor servicio de alteraciones, entregas rápidas y soluciones personalizadas para cada cliente. Contáctanos y descubre la diferencia de trabajar con expertos en alteraciones de ropa.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
