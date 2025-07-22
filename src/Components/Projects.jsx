// src/Components/Projects.jsx
import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard'; // Importamos la tarjeta

// ¡Aquí pones tus proyectos!
// Para las imágenes, puedes usar un servicio como https://placeholder.com/ mientras consigues las reales.
const projectData = [
  {
    title: 'Gestión de Recetas y Patologías',
    description: 'Sistema para un hospital que digitaliza la gestión de recetas y el seguimiento de patologías de pacientes, mejorando la eficiencia y reduciendo errores.',
    tags: ['React', 'Node.js', 'SQL', 'Express'],
    imageUrl: 'https://via.placeholder.com/400x200/4ade80/111827?text=Hospital+System',
    githubUrl: 'https://github.com/jnserrudo/tu-repo-1', // ¡Cambia esto!
    liveUrl: null, // Si no hay demo en vivo, pon null
  },
  {
    title: 'Guía Interactiva para Museo',
    description: 'Aplicación web que ofrece una guía interactiva para visitantes de un museo, con información de obras, rutas sugeridas y contenido multimedia.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'API'],
    imageUrl: 'https://via.placeholder.com/400x200/4ade80/111827?text=Museum+Guide',
    githubUrl: 'https://github.com/jnserrudo/tu-repo-2', // ¡Cambia esto!
    liveUrl: 'https://tu-demo.com', // ¡Cambia esto!
  },
  {
    title: 'Sistema de Acreditación de Eventos',
    description: 'Plataforma para gestionar acreditaciones de eventos, desde el registro de asistentes hasta la emisión de certificados y control de acceso.',
    tags: ['React', 'Report Builder', 'Node.js', 'Git'],
    imageUrl: 'https://via.placeholder.com/400x200/4ade80/111827?text=Event+Accreditation',
    githubUrl: 'https://github.com/jnserrudo/tu-repo-3', // ¡Cambia esto!
    liveUrl: null,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Mis Proyectos</h2>
      <div className={styles.grid}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};