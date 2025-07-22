// src/Components/About.jsx
import React from 'react';
import styles from './About.module.css';
import profilePic from '../assets/foto-portafolio.jfif'; // Importa tu foto

export const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <img src={profilePic} alt="Jose Nahuel Serrudo" className={styles.profileImage} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Sobre Mí</h2>
        <p className={styles.text}>
          Soy un ingeniero informático con especialización en desarrollo <span className={styles.highlight}>full-stack</span> y amplia experiencia en la creación de aplicaciones web. Me motiva enfrentar desafíos tecnológicos y diseñar <span className={styles.highlight}>soluciones innovadoras</span> a problemas complejos.
        </p>
        <p className={styles.text}>
          Mi enfoque profesional se centra en la <span className={styles.highlight}>eficiencia, la calidad y la adaptabilidad</span>, cualidades que me permiten integrarme rápidamente en nuevos entornos y contribuir de manera efectiva en equipos multidisciplinarios para alcanzar objetivos estratégicos.
        </p>
      </div>
    </section>
  );
};