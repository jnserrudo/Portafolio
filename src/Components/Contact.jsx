// src/Components/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Hablemos</h2>
      <p className={styles.subtitle}>
        ¿Tienes un proyecto en mente o una oportunidad para mí? Me encantaría saber de ti. Completa el formulario y me pondré en contacto lo antes posible.
      </p>
      {/* ¡Pega tu URL de Formspree aquí! */}
      <form action="https://formspree.io/f/TU_ENDPOINT_AQUI" method="POST" className={styles.form}>
        <input 
          type="text" 
          name="name" 
          className={styles.input} 
          placeholder="Tu Nombre" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          className={styles.input} 
          placeholder="Tu Correo Electrónico" 
          required 
        />
        <textarea 
          name="message" 
          className={styles.textarea} 
          placeholder="Tu Mensaje" 
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
      </form>
    </section>
  );
};