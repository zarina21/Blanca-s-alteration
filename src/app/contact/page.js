'use client';
import ContactForm from '/components/ContactForm';

export default function Contact() {
  return (
    <section className="section">
      <div className="container mt-6">
        <h1 className="title has-text-centered">Contact us</h1> {/* Agregada la clase has-text-centered */}
        <ContactForm />
      </div>
    </section>
  );
};
