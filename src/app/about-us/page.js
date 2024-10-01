'use client';

import Image from 'next/image';

export default function aboutPage() {
    return (
        <div>
        <div>
            <h1 className="title is-2 has-text-centered">About us</h1>

            {/* Sección de introducción */}
            <section className="section">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <Image src="/blanca negocio.jpg" alt="Taller de alteraciones" width={600} height={400} />
                    </div>
                    <div className="column is-half">
                        <h2 className="title is-4 mb-6">Who We Are</h2>
                        <p className="mb-6">
                        In <strong>"Blanca's Alterations"</strong>, We specialize in offering the highest quality alterations and sewing services. With experience and professionalism, our goal is to ensure that each garment fits perfectly to the needs of our customers.
                        </p>
                        <p>
                        We believe that every stitch counts. We make sure that each garment fits your body perfectly.
                        </p>
                    </div>
                </div>
            </section>

        {/* Sección de valores */}
        <section className="section has-background-light">
          <h2 className="title is-2 has-text-centered mb-6">Our Values</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <h3 className="title is-3 mb-4">Quality</h3>
              <p>
              We use the best materials and techniques to ensure that each alteration is precise and long lasting.
              </p>
            </div>
            <div className="column has-text-centered">
              <h3 className="title is-3 mb-4">Attention to Detail</h3>
              <p>
              We believe that every stitch counts. We make sure that each garment fits your body perfectly.
              </p>
            </div>
            <div className="column has-text-centered">
              <h3 className="title is-3 mb-4">Customer Satisfaction</h3>
              <p>
                Our main goal is to ensure that each client is completely satisfied with the work performed.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de historia */}
        <section className="section">
          <h2 className="title is-3 has-text-centered mb-5">Our History</h2>
          <p>
          We started as a small alterations business by fashion designer Blanca Canamero, a dressmaker who managed to keep her own brand afloat in a struggling country. She decided to build an alterations business using her knowledge as a dressmaker to become the best alterations business in the valley.
          </p>
        </section>

        {/* Sección de contacto */}
        <section className="section">
          <div className="has-text-centered">
            <h2 className="title is-3 mb-5">Why choose us?</h2>
            <p>
            At "Blanca's Alterations", we strive to offer the best alterations service, fast deliveries and personalized solutions for each client. Contact us and discover the difference of working with experts in clothing alterations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
