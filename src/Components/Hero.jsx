// src/Components/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <h1 className={styles.title}>
        Hola, soy Nahuel Serrudo
      </h1>
      <p className={styles.subtitle}>
        Ingeniero en Informática. Transformo problemas complejos en software eficiente y escalable.
      </p>
      <a href="#projects" className={styles.ctaButton}>
        Ver mis Proyectos
      </a>
    </section>
  );
};
