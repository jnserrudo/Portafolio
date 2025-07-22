// src/Components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://github.com/jnserrudo" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/jnserrudo/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaLinkedin size={28} />
        </a>
      </div>
      <p className={styles.copyright}>
        © {currentYear} Jose Nahuel Serrudo. Diseñado y construido por mí.
      </p>
    </footer>
  );
};