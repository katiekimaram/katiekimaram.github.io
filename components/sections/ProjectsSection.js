import projects from '../../data/projects';
import styles from '../../styles/Projects.module.sass';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-title">Projects</div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div className={styles.card} key={project.id}>
              <span
                className={`${styles.status} ${
                  project.status === 'shipped' ? styles.shipped : styles.progress
                }`}
              >
                {project.status === 'shipped' ? 'Shipped' : 'In progress'}
              </span>
              <div className={styles.title}>{project.title}</div>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
