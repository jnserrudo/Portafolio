// src/Components/Skills.jsx
import React from 'react';
import styles from './Skills.module.css';
// Importa todos los iconos que necesites
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiExpress, SiMysql } from 'react-icons/si';

// Organiza tus habilidades por categoría
const skillsData = {
  "Frontend": [
    { name: "React", icon: <FaReact size={24} /> },
    { name: "JavaScript", icon: <DiJavascript1 size={24} /> },
    { name: "HTML5", icon: <FaHtml5 size={24} /> },
    { name: "CSS3", icon: <FaCss3Alt size={24} /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs size={24} /> },
    { name: "Express", icon: <SiExpress size={24} /> },
  ],
  "Bases de Datos": [
    { name: "SQL", icon: <SiMysql size={24} /> }, // Usamos el de MySQL como genérico
  ],
  "Herramientas": [
    { name: "Git", icon: <FaGitAlt size={24} /> },
    { name: "GitHub", icon: <FaGithub size={24} /> },
  ]
};

export const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.skillsContainer}>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skillPill}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};