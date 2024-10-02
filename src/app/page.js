'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaLock, FaTag, FaStopwatch } from 'react-icons/fa';

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
            <h1 className="title is-0">Blanca'&apos; Alterations</h1>
            <p className="subtitle is-4">Adapt your clothes to your style</p>
          </div>
        </div>
      </section>
      {/* Sección de casillas con íconos */}
      <section className="section">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <FaStopwatch size={48} className="icon-style" />
              <h2 className="title is-5">Delivery time</h2>
              <p>We guarantee delivery time of 3 to 5 days (working days).</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <FaLock size={48} className="icon-style" />
              <h2 className="title is-5">Secure and reliable payment</h2>
              <p>We accept visa and mastercard payments safely and reliably.</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <FaTag size={48} className="icon-style" />
              <h2 className="title is-5">Quality and competitive prices</h2>
              <p>We guarantee high quality work and high expectations.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Mapa y dirección */}
      <section className="section">
        <div className="container">
          <h2 className="title is-4 has-text-centered title-spacing mb-6">We are located in</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.6642249727753!2d-116.45772972451014!3d33.812016075951106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db2094f8ff75b7%3A0xd6a92af4fe5d0e37!2s35250%20Date%20Palm%20Dr%20Suite%20C%2C%20Cathedral%20City%2C%20CA%2092234!5e0!3m2!1ses!2sus!4v1695242972339!5m2!1ses!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="has-text-right mt-5">
            <button className="button is-primary" onClick={copyAddress}>
              {isCopied ? 'Address copied!' : 'Copy address'}
            </button>
          </div>
        </div>
      </section>
      {/* Sección de servicios */}
      <section className="section">
        <h2 className="title is-4 has-text-centered">Some of our services</h2>
        {/* Servicio 1 */}
        <div className="columns is-vcentered service-box">
          <div className="column is-half">
            <Image src="/bastilla.png" alt="Servicio 1" width={600} height={400} />
          </div>
          <div className="column is-half">
            <h3 className="title is-4 mb-5">Pant hemming</h3>
            <p>And as the legs descend, the journey towards the decreasing and decreasing width of the legs unfolds, a resounding “yes” that resonates through the tapestry. In the pants space, expansion is a road less traveled, but it still needs to be reduced, an easy journey. From knee to butt, the symphony of fabric can be recalibrated, a melody of transformation that resonates through the halls of style.</p>
          </div>
        </div>
        {/* Servicio 2 */}
        <div className="columns is-vcentered service-box">
          <div className="column is-half">
            <Image src="/jackethombro.png" alt="Servicio 2" width={600} height={400} />
          </div>
          <div className="column is-half">
            <h3 className="title is-4 mb-5">Jacket alterations</h3>
            <p>The shoulders, being the architectural cornerstone of a jacket, require an expert hand to fit. Trying to reshape them is akin to reshaping ones destiny, an intricate matter best approached with caution. The symphony of points and structure woven into a shoulder demands reverence. Be aware of the dangers of trying to resize, which is often not recommended. It is a path fraught with complexities, like navigating through the intricate tapestry of life. However, if the need arises to recalibrate the padding, there is a great possibility. Removing the padding gives your jacket a touch of Neapolitan nonchalance, while increasing the padding pays homage to a more rugged British silhouette.</p>
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="columns is-vcentered service-box">
          <div className="column is-half">
            <Image src="/simpledress.png" alt="Servicio 3" width={600} height={400} />
          </div>
          <div className="column is-half">
            <h3 className="title is-4 mb-5">Simple dress</h3>
            <p>Dress and other clothing alteration services help you look better while spending less. Although altering a dress may cost some money, it is not the same as buying one. Only choose those clothes that you want to continue wearing, but need a modern touch or a simple adjustment.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
