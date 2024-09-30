import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig'; // Asegúrate de tener esta importación correcta
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const cleanedValue = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: cleanedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedPhone = `+1 ${formData.phone.slice(0, 3)} ${formData.phone.slice(3, 6)}-${formData.phone.slice(6)}`;
      const dataToSend = {
        ...formData,
        phone: formattedPhone,
      };

      await addDoc(collection(db, 'contacts'), dataToSend);
      alert('Formulario enviado con éxito.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Hubo un error al enviar el formulario. Detalles: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="box" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="field">
        <label className="label mt-2">Nombre</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label mt-2">Apellido</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Ingrese su apellido"
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label mt-2">Correo</label>
        <div className="control">
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su correo"
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label mt-2">Teléfono</label>
        <div className="control">
          <input
            className="input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ingrese su número (sin espacios ni caracteres)"
            required
            maxLength={10}
          />
        </div>
      </div>

      <div className="field">
        <label className="label mt-2">Mensaje</label>
        <div className="control">
          <textarea
            className="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describa sus necesidades"
            required
          />
        </div>
      </div>

      <div className="control" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button type="submit" className="button is-primary">Enviar</button>
      </div>
    </form>
  );
};

export default ContactForm;
