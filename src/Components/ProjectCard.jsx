// src/Components/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';
import { FaGithub } from "react-icons/fa"; // Icono de GitHub
import { FiExternalLink } from "react-icons/fi"; // Icono de link externo

export const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, liveUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.links}>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaGithub size={20} /> Código
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FiExternalLink size={20} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};