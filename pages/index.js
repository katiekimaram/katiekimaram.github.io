import Layout from '../components/Layout';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import styles from '../styles/Home.module.sass';

export default function Home() {
  return (
    <Layout>
      <header className={styles.hero}>
        <div className="wrap">
          <span className={styles.kicker}>Hi, my name is</span>
          <h1 className={styles.name}>
            <span className={styles.dim}>Aram</span>
            <span className={styles.solid}>Katie Kim</span>
          </h1>
          <h2 className={styles.role}>I build the systems enterprise support teams run on.</h2>
          <p className={styles.copy}>
            Enterprise support and platform operations engineer specializing in Zendesk
            architecture, incident response, and the automation that takes manual work off
            people&apos;s plates.
          </p>
          <a href="#projects" className={styles.cta}>
            Check out my work!
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </header>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </Layout>
  );
}
