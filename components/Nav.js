import Logo from './Logo';
import styles from '../styles/Nav.module.sass';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#" aria-label="Home">
          <Logo />
        </a>
        <div className={styles.links}>
          <a href="#about">About me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" className={styles.resume}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
