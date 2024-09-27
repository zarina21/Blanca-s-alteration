'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaTruck, FaLock, FaTag } from 'react-icons/fa';

const HomePage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyAddress = () => {
    const address = '35250 Date Palm Dr Suite C, Cathedral City, CA 92234';
    navigator.clipboard.writeText(address);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div>
      {/* Sección de imágenes con superposición */}
      <section className="section has-text-centered">
        <div className="image-container">
          <Image src="/sastre2.png" alt="Imagen 1" width={1200} height={600} />
          <Image src="/telas.png" alt="Imagen 2" width={1200} height={600} />
          <Image src="/hilos.png" alt="Imagen 3" width={1200} height={600} />
          <div className="overlay">
            <h1 className="title is-1">Blanca Alterations</h1>
            <p className="subtitle is-4">Este es el eslogan del negocio</p>
          </div>
        </div>
      </section>


      {/* Sección de casillas con íconos */}
      <section className="section">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <FaTruck size={48} className="icon-style" />
              <h2 className="title is-5">Garantía de entrega</h2>
              <p>Le garantizamos la entrega de su producto en 3 a 5 días.</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <FaLock size={48} className="icon-style" />
              <h2 className="title is-5">Pago seguro y confiable</h2>
              <p>Sistema de pago seguro y confiable para su tranquilidad.</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <FaTag size={48} className="icon-style" />
              <h2 className="title is-5">Calidad y precios competitivos</h2>
              <p>Garantizamos productos de calidad a precios competitivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa y dirección */}
      <section className="section">
        <div className="container">
          <h2 className="title is-4 has-text-centered title-spacing">Encuéntranos</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.6642249727753!2d-116.45772972451014!3d33.812016075951106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db2094f8ff75b7%3A0xd6a92af4fe5d0e37!2s35250%20Date%20Palm%20Dr%20Suite%20C%2C%20Cathedral%20City%2C%20CA%2092234!5e0!3m2!1ses!2sus!4v1695242972339!5m2!1ses!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="has-text-right mt-2">
            <button className="button is-primary" onClick={copyAddress}>
              {isCopied ? 'Dirección copiada!' : 'Copiar dirección'}
            </button>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="section mt-4">
        <h2 className="title is-4 has-text-centered">Nuestros Servicios</h2>

        {/* Servicio 1 */}
        <div className="columns is-vcentered service-box">
          <div className="column is-half">
            <Image src="/service-image1.jpg" alt="Servicio 1" width={600} height={400} />
          </div>
          <div className="column is-half">
            <h3 className="title is-4">Servicio 1</h3>
            <p>Descripción del servicio 1. Detalles adicionales del servicio, especificaciones y características que lo hacen especial.</p>
            <p className="price">Precio: $50</p>
          </div>
        </div>

        {/* Servicio 2 */}
        <div className="columns is-vcentered service-box">
          <div className="column is-half">
            <Image src="/service-image2.jpg" alt="Servicio 2" width={600} height={400} />
          </div>
          <div className="column is-half">
            <h3 className="title is-4">Servicio 2</h3>
            <p>Descripción del servicio 2. Detalles adicionales del servicio, especificaciones y características que lo hacen especial.</p>
            <p className="price">Precio: $70</p>
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="columns is-vcentered service-box">
          <div className="column is-half">
            <Image src="/service-image3.jpg" alt="Servicio 3" width={600} height={400} />
          </div>
          <div className="column is-half">
            <h3 className="title is-4">Servicio 3</h3>
            <p>Descripción del servicio 3. Detalles adicionales del servicio, especificaciones y características que lo hacen especial.</p>
            <p className="price">Precio: $90</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
