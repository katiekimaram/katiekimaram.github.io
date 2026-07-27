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
              {project.link && (
                <a className={styles.link} href={project.link} target="_blank" rel="noreferrer">
                  View project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
