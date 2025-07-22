// src/Components/Header.jsx
import React from 'react';
import styles from './Header.module.css'; // ¡Importamos los estilos!

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.logo}>JN.dev</a>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>Sobre Mí</a></li>
          <li><a href="#projects" className={styles.navLink}>Proyectos</a></li>
          <li><a href="#skills" className={styles.navLink}>Habilidades</a></li>
          <li><a href="#contact" className={styles.navLink}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};
